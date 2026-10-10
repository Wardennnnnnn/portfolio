import Link from 'next/link';
import type { Project } from '@/lib/content';
import { ProjectScreenshot } from './project-screenshot';

export function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article className={`project project-${p.id}`} id={p.id}>
      <div className="project-info">
        <h3>{p.title}</h3>
        <div className="project-topline"><span className="project-order">{p.number}</span><span>{p.domain}</span></div>
        <p className="status">{p.status}</p><p className="project-summary">{p.summary}</p>
        {p.learnings?.[0] && <div className="project-learning"><h4>What I learned</h4><p>{p.learnings[0].detail}</p></div>}
        <p className="project-role">{p.role}</p>
        <ul className="tech-list" aria-label="Technologies">{p.stack.map(tech => <li key={tech}>{tech}</li>)}</ul>
        <div className="project-links">
          <Link className="text-link" href={`/projects/${p.id}/`}>View case study</Link>
          {p.links.map(([label, url]) => <a key={url} className="text-link" href={url} target="_blank" rel="noopener noreferrer">{label}</a>)}
        </div>
        <p className="project-date">{p.dates || 'Project dates to be added'}</p>
      </div>
      <ProjectScreenshot project={p} />
      <details className="project-story">
        <summary>Read the project story<span className="plus" aria-hidden="true" /></summary>
        <div className="story-grid">{p.story.map(([heading, text]) => <div key={heading}><h4>{heading}</h4><p>{text}</p></div>)}</div>
      </details>
    </article>
  );
}
