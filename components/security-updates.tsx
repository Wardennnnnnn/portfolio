import Link from 'next/link';
import { securityHistory } from '@/lib/security-history';
import { projects, experiments } from '@/lib/content';

export function SecurityUpdates() {
  const work = [...projects, ...experiments];
  return <section className="security-updates wrap" id="security-history" aria-labelledby="security-updates-title">
    <div className="section-heading"><h2 id="security-updates-title">Security review log</h2><p>Review items and planned hardening work.</p></div>
    <p className="lessons-intro">These entries are review items and planned hardening work. Confirmed vulnerabilities and verified fixes will be recorded with their versions and validation results, and the original findings will be kept.</p>
    <div className="security-projects">{Object.entries(securityHistory).map(([slug, entries]) => <article key={slug}>
      <h3><Link href={`/projects/${slug}/#security-history-title`}>{work.find(project => project.id === slug)?.title ?? slug}</Link></h3>
      <ul>{entries.map(entry => <li key={entry.id}>
        <h4>{entry.title}</h4>
        <p className="security-entry-meta"><time dateTime={entry.date}>{entry.date}</time> · {entry.status}{entry.version && ` · ${entry.version}`}</p>
        <p>{entry.summary}</p>
        <Link className="text-link" href={`/projects/${slug}/#${entry.id}`}>View review record</Link>
      </li>)}</ul>
    </article>)}</div>
  </section>;
}
