import Image from 'next/image';
import type { Screenshot } from '@/lib/content';

export function ProjectScreenshot({ project, compact = false, fullSize = false }: { project: Screenshot; compact?: boolean; fullSize?: boolean }) {
  if (project.screenshot) {
    const [width, height] = project.screenshotSize ?? [1000, 650];
    return <figure className="project-image">
      <a href={project.screenshot} data-image-viewer data-image-alt={project.alt} data-image-caption={project.screenshotCaption ?? project.title} data-image-width={width} data-image-height={height} aria-label={`Enlarge ${project.title} image`}>
        <Image src={project.screenshot} alt={project.alt} width={width} height={height} sizes={fullSize ? '(max-width: 1000px) 100vw, 950px' : '(max-width: 720px) 100vw, 50vw'} />
      </a>
      {(fullSize || project.screenshotCaption) && <figcaption>{project.screenshotCaption ?? 'Application preview'}</figcaption>}
    </figure>;
  }
  return (
    <figure className={`screenshot-placeholder${compact ? ' compact' : ''}`}>
      <div className="media-top"><span>Project preview</span><svg viewBox="0 0 32 32" aria-hidden="true"><rect x="4" y="6" width="24" height="20" rx="2" /><path d="m5 23 7-8 6 5 4-4 6 8" /><circle cx="22" cy="12" r="2" /></svg></div>
      <span className="media-title" aria-hidden="true">{project.title}</span>
      <figcaption>{project.title} screenshot<span>Image to be added</span></figcaption>
    </figure>
  );
}
