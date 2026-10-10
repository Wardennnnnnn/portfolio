import Image from 'next/image';
import type { Walkthrough } from '@/lib/walkthroughs';
export function ProjectWalkthrough({ walkthrough, slug }: { walkthrough: Walkthrough; slug: string }) {
  return <section className="walkthrough" aria-labelledby="walkthrough-title">
    <h2 id="walkthrough-title">{walkthrough.title}</h2><p className="walkthrough-intro">Choose a step to follow the workflow. Markers highlight the relevant part of each original screenshot.</p>
    <fieldset className="native-walkthrough"><legend className="sr-only">Workflow steps</legend>
      {walkthrough.steps.map((step, index) => <span className="walkthrough-option" key={step.title}><input className="native-choice" type="radio" name={`${slug}-walkthrough`} id={`${slug}-step-${index}`} defaultChecked={index === 0} /><label htmlFor={`${slug}-step-${index}`}><span>{String(index + 1).padStart(2, '0')}</span>{step.title}</label></span>)}
      <div className="walkthrough-panels">{walkthrough.steps.map((step, index) => <div className="walkthrough-panel" key={step.title}>
        <div className="walkthrough-media"><div className="annotated-image"><a href={step.src} data-image-viewer data-image-alt={step.alt} data-image-caption={step.title} data-image-width={step.width} data-image-height={step.height} aria-label={`Enlarge screenshot: ${step.title}`}><Image src={step.src} alt={step.alt} width={step.width} height={step.height} sizes="(max-width: 900px) 100vw, 850px" /></a><span className="image-marker active-marker" style={{ left: `${step.x}%`, top: `${step.y}%` }} aria-hidden="true">{index + 1}</span>{walkthrough.steps.map((item, other) => other !== index && item.src === step.src && <label className="image-marker marker-link" style={{ left: `${item.x}%`, top: `${item.y}%` }} key={item.title} htmlFor={`${slug}-step-${other}`} title={item.title} aria-hidden="true">{other + 1}</label>)}</div></div>
        <div className="walkthrough-description"><span className="walkthrough-position">Step {index + 1} of {walkthrough.steps.length}</span><h3>{step.title}</h3><p>{step.description}</p></div>
      </div>)}</div>
    </fieldset>
    <div className="architecture-note"><div><h3>A design decision</h3><p>{walkthrough.decision}</p></div><div><h3>The tradeoff</h3><p>{walkthrough.tradeoff}</p></div></div>
  </section>;
}
