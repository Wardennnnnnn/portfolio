import { ProjectWalkthrough } from '@/components/project-walkthrough';
import { walkthroughs } from '@/lib/walkthroughs';
import { SafeTapDemo } from '@/components/safetap-demo';
import { CtfPlayground } from '@/components/ctf-playground';
import type { Metadata } from 'next';
import { socialImage } from '@/lib/site';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { experiments, hyperlink, projects, type ProjectLearning, type ProjectLink, type StorySection, type Screenshot } from '@/lib/content';
import { ProjectScreenshot } from '@/components/project-screenshot';
import { SecurityHistory } from '@/components/security-history';

type Props = { params: Promise<{ slug: string }> };
interface CaseStudy extends Screenshot {
  role: string; status: string; summary: string; stack: string[];
  story: StorySection[]; links: ProjectLink[]; dates?: string; learnings?: ProjectLearning[];
}

function findProject(slug: string): CaseStudy | undefined {
  const project = projects.find(p => p.id === slug);
  if (project) return project;
  const experiment = experiments.find(p => p.id === slug);
  if (experiment) return { ...experiment, stack: experiment.stack ?? [], story: experiment.story ?? [['Project notes', experiment.details]], links: experiment.links ?? [] };
  if (slug === hyperlink.id) return { ...hyperlink, links: [] };
  return undefined;
}

export async function generateProjectMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) return { title: 'Project not found' };
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${slug}/` },
    openGraph: { title: `${project.title} | Don Gonzales`, description: project.summary, type: 'article', url: `/projects/${slug}/`, images: [socialImage] },
    twitter: { card: 'summary_large_image', title: `${project.title} | Don Gonzales`, description: project.summary, images: [socialImage.url] },
  };
}

export default async function ProjectCaseStudy({ params }: Props) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) notFound();
  return (
    <main id="main" className="case-study wrap">
      <Link className="text-link back-link" href="/#work">Back to selected work</Link>
      <h1>{project.title}</h1>
      <p className="project-role">{project.role}</p><p className="status">{project.status}</p>
      <p className="case-intro">{project.summary}</p>
      {project.stack.length > 0 && <ul className="tech-list" aria-label="Technologies">{project.stack.map(tech => <li key={tech}>{tech}</li>)}</ul>}
      {slug === 'hyperlink' && <a className="text-link" href="#ctf-playground">Try the portfolio mini challenge</a>}
      <p className="project-date">{project.dates || 'Project dates to be added'}</p>
      {project.links.length > 0 && <div className="project-links">{project.links.map(([label, url]) => <a className="text-link" key={url} href={url} target="_blank" rel="noopener noreferrer">{label}</a>)}</div>}
      {walkthroughs[slug] ? <ProjectWalkthrough walkthrough={walkthroughs[slug]} slug={slug} /> : <ProjectScreenshot project={project} fullSize />}
      <div className="story-grid">{project.story.map(([heading, text]) => <section key={heading}><h2>{heading}</h2><p>{text}</p></section>)}</div>
      {project.learnings && project.learnings.length > 0 && <section className="project-lessons" aria-labelledby="lessons-title">
        <h2 id="lessons-title">What I learned through this project</h2>
        <p className="lessons-intro">The experience I take into the next project: technical decisions, practical tradeoffs, and ways of working.</p>
        <ul>{project.learnings.map(lesson => <li key={lesson.title}><h3>{lesson.title}</h3><p>{lesson.detail}</p></li>)}</ul>
      </section>}
      <SecurityHistory slug={slug} />
      {project.gallery && project.gallery.length > 0 && <section className="project-gallery" aria-labelledby="gallery-title">
        <h2 id="gallery-title">{slug === 'silong-hamuros' ? 'Application & proposed system' : 'Inside the application'}</h2>
        <p className="gallery-intro">A closer look at the project.</p>
        <div className="gallery-grid">{project.gallery.map(image => <figure key={image.src} className={`gallery-image${image.height > image.width ? ' portrait' : ''}`}>
          <a href={image.src} data-image-viewer data-image-alt={image.alt} data-image-caption={image.caption} data-image-width={image.width} data-image-height={image.height} aria-label={`Enlarge image: ${image.caption}`}>
            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 720px) 100vw, 50vw" />
          </a>
          <figcaption>{image.caption}</figcaption>
        </figure>)}</div>
      </section>}
      {slug === 'safetap' && <SafeTapDemo />}
      {slug === 'hyperlink' && <div className="case-ctf"><CtfPlayground /></div>}
      <div className="case-contact"><Link className="text-link" href="/#contact">Talk to me about a project</Link></div>
    </main>
  );
}
