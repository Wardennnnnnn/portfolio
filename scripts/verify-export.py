"""Check the shipped static pages, navigation, assets, and share metadata."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import xml.etree.ElementTree as ET

root = Path(__file__).resolve().parents[1]
out = root/'out'
class Page(HTMLParser):
 def __init__(self):
  super().__init__(); self.ids=set(); self.refs=[]; self.meta={}; self.canonical=None; self.viewers=[]
 def handle_starttag(self, tag, attrs):
  a=dict(attrs)
  if a.get('id'):
   assert a['id'] not in self.ids, f'Duplicate ID: {a["id"]}'
   self.ids.add(a['id'])
  if tag=='a' and a.get('href'): self.refs.append((a['href'],True))
  if tag in ('img','script') and a.get('src'): self.refs.append((a['src'],False))
  if tag=='link' and a.get('href'):
   if a.get('rel')=='canonical': self.canonical=a['href']
   else: self.refs.append((a['href'],False))
  if tag=='meta': self.meta[a.get('property',a.get('name',''))]=a.get('content')
  if tag=='a' and 'data-image-viewer' in a:
   assert a.get('target')!='_blank', 'Image viewer opens new tab'
   assert a.get('data-image-alt') and a.get('data-image-caption')
   self.viewers.append(a)
paths=['/']+[f'/projects/{p.name}/' for p in sorted((out/'projects').iterdir()) if (p/'index.html').exists()]
assert len(paths)==9, paths
pages={}
for path in paths:
 page=Page();page.feed((out/path.lstrip('/')/'index.html').read_text());pages[path]=page
 assert page.canonical=='https://terincorp.com'+path,(path,page.canonical)
 assert page.meta['og:image']=='https://terincorp.com/assets/social-preview.png'
 assert page.meta['twitter:card']=='summary_large_image'
 assert page.meta['description'] and page.viewers
refs=0
for path,page in pages.items():
 for ref,navigation in page.refs:
  url=urlsplit(ref)
  if url.scheme or url.netloc: continue
  target=unquote(url.path) or path
  if not target.startswith('/'): target=path+target
  file=out/target.lstrip('/')
  if file.is_dir(): file=file/'index.html'
  assert file.is_file(),(path,ref,'missing local target')
  if navigation and url.fragment:
   route=target if target.endswith('/') else target+'/'
   destination=pages.get(route)
   if destination: assert url.fragment in destination.ids,(path,ref,'missing anchor')
  refs+=1
sitemap=ET.parse(out/'sitemap.xml')
urls={x.text for x in sitemap.findall('.//{http://www.sitemaps.org/schemas/sitemap/0.9}loc')}
assert urls=={'https://terincorp.com'+p for p in paths}
assert 'Sitemap: https://terincorp.com/sitemap.xml' in (out/'robots.txt').read_text()
for path in ['/projects/safetap/','/projects/silong-hamuros/']:
 assert 'Security review history' in (out/path.lstrip('/')/'index.html').read_text()
print(f'PASS: {len(paths)} pages; {refs} local links/assets; anchors, image-viewer links, canonicals, OG metadata, sitemap, robots, and security-history sections.')
print('Not checked: rendered mobile/desktop layouts, browser clicks/touch, external URL availability, or live domain/deployment.')
