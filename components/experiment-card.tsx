import Link from 'next/link';
import type { Experiment } from '@/lib/content';
import { ProjectScreenshot } from './project-screenshot';

export function ExperimentCard({ project: p }: { project: Experiment }) {
  return (
    <article className="experiment">
      <div>
        <h3>{p.title}</h3><p className="experiment-domain">{p.domain}</p><p>{p.summary}</p>
        <p className="project-role">{p.role}</p><p className="status">{p.status}</p>
        {p.learnings?.[0] && <div className="project-learning"><h4>What I learned</h4><p>{p.learnings[0].detail}</p></div>}
        <details><summary>More about this project<span className="plus" aria-hidden="true" /></summary><p>{p.details}</p></details>
        <p className="project-date">{p.dates || 'Project dates to be added'}</p>
        <Link className="text-link" href={`/projects/${p.id}/`}>{p.story ? 'View case study' : 'View project notes'}</Link>
      </div>
      <ProjectScreenshot project={p} />
    </article>
  );
}
