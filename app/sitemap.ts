import type { MetadataRoute } from 'next';
import { projectSlugs } from '@/lib/content';
import { siteUrl } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${siteUrl}/` }, ...projectSlugs.map(slug => ({ url: `${siteUrl}/projects/${slug}/` }))];
}
