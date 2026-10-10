(() => {
'use strict';
const escape = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const pictureIcon='<svg viewBox="0 0 32 32" aria-hidden="true"><rect x="4" y="6" width="24" height="20" rx="2"/><path d="m5 23 7-8 6 5 4-4 6 8"/><circle cx="22" cy="12" r="2"/></svg>';
const picture = p => p.screenshot ? `<figure class="project-image"><img src="${escape(p.screenshot)}" alt="${escape(p.alt)}" loading="lazy" width="1000" height="650"></figure>` : `<figure class="screenshot-placeholder">${pictureIcon}<figcaption>${escape(p.title)} screenshot<span>Image to be added</span></figcaption></figure>`;
const content=window.portfolioContent;
document.querySelector('#projects').innerHTML=content.projects.map(p=>`<article class="project" id="${escape(p.id)}"><div class="project-info"><div class="project-topline"><span>${escape(p.number)} / ${escape(p.domain)}</span><span class="status">${escape(p.status)}</span></div><h3>${escape(p.title)}</h3><p class="project-summary">${escape(p.summary)}</p><p class="project-role">${escape(p.role)}</p><ul class="tech-list" aria-label="Technologies">${p.stack.map(s=>`<li>${escape(s)}</li>`).join('')}</ul><div class="project-links">${p.links.map(([label,url])=>`<a class="text-link" href="${escape(url)}" target="_blank" rel="noopener noreferrer">${escape(label)}</a>`).join('')}</div><p class="project-date">Project dates to be added</p></div>${picture(p)}<details class="project-story"><summary>Read the project story<span class="plus" aria-hidden="true"></span></summary><div class="story-grid">${p.story.map(([heading,paragraph])=>`<div><h4>${escape(heading)}</h4><p>${escape(paragraph)}</p></div>`).join('')}</div></details></article>`).join('');
document.querySelector('#experiments').innerHTML=content.experiments.map(p=>`<article class="experiment"><div><p class="experiment-domain">${escape(p.domain)}</p><h3>${escape(p.title)}</h3><p>${escape(p.summary)}</p><p class="project-role">${escape(p.role)}</p><p class="status">${escape(p.status)}</p><details><summary>More about this project<span class="plus" aria-hidden="true"></span></summary><p>${escape(p.details)}</p></details><p class="project-date">Project dates to be added</p></div>${picture(p)}</article>`).join('');
const root=document.documentElement, button=document.querySelector('#theme-toggle'), label=document.querySelector('#theme-label');
const query=window.matchMedia('(prefers-color-scheme: dark)');
const current=()=>root.dataset.theme || (query.matches?'dark':'light');
const update=()=>{const next=current()==='dark'?'light':'dark';label.textContent=next==='dark'?'Dark mode':'Light mode';button.setAttribute('aria-label',`Switch to ${next} mode`);};
button.addEventListener('click',()=>{root.dataset.theme=current()==='dark'?'light':'dark';try{localStorage.setItem('don-theme',root.dataset.theme)}catch(e){}update()});
query.addEventListener('change',update);update();
})();
