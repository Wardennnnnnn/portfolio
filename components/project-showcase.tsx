import Image from 'next/image';
type ShowcaseProject = { id: string; title: string; domain: string; screenshot: string; alt: string; screenshotSize?: readonly [number, number] };
const questions: Record<string, string> = {
  bascal: 'How can research become a useful learning tool?',
  safetap: 'Who has arrived—and who still needs to be accounted for?',
  pits: 'How can public project records become easier to scrutinize?',
};
export function ProjectShowcase({ projects }: { projects: ShowcaseProject[] }) {
  return <aside className="hero-showcase">
    <fieldset className="native-showcase"><legend>A question. A working idea.</legend>
      {projects.map((project, index) => <span key={project.id} className="showcase-option"><input className="native-choice" type="radio" name="featured-project" id={`showcase-${project.id}`} value={project.id} defaultChecked={index === 0} /><label htmlFor={`showcase-${project.id}`}>{project.title}</label></span>)}
      <div className="showcase-panels">{projects.map((project, index) => <div className={`showcase-panel showcase-panel-${project.id}`} key={project.id}>
        <a className="showcase-image" href={project.screenshot} data-image-viewer data-image-alt={project.alt} data-image-caption={project.title} data-image-width={project.screenshotSize?.[0]} data-image-height={project.screenshotSize?.[1]} aria-label={`Enlarge ${project.title} preview`}><Image src={project.screenshot} alt={project.alt} width={project.screenshotSize?.[0] ?? 1920} height={project.screenshotSize?.[1] ?? 1080} sizes="(max-width: 900px) 100vw, 600px" loading={index === 0 ? 'eager' : 'lazy'} /></a>
        <div className="showcase-copy"><p>{questions[project.id]}</p><a className="text-link" href={`/projects/${project.id}/`}>Explore {project.title}</a></div>
      </div>)}</div>
    </fieldset>
    <a className="showcase-ctf text-link" href="#ctf-playground">Try a small cybersecurity challenge</a>
  </aside>;
}
