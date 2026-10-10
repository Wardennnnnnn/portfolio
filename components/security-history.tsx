import { securityHistory } from '@/lib/security-history';

export function SecurityHistory({ slug }: { slug: string }) {
  const entries = securityHistory[slug];
  if (!entries?.length) return null;
  return <section className="security-history" aria-labelledby="security-history-title">
    <h2 id="security-history-title">Security review history</h2>
    <p className="lessons-intro">Dated findings and follow-up evidence. Review items are distinguished from confirmed vulnerabilities and verified fixes.</p>
    <ol>{entries.map(entry => <li key={entry.id} id={entry.id}>
      <h3>{entry.title}</h3>
      <p className="security-entry-meta"><time dateTime={entry.date}>{new Date(`${entry.date}T00:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })}</time> · {entry.status}{entry.version && ` · ${entry.version}`}</p>
      <p>{entry.summary}</p>
      <p className="security-validation"><strong>Validation:</strong> {entry.validation}</p>
      {entry.resolves && <a className="text-link" href={`#${entry.resolves}`}>Original finding</a>}
    </li>)}</ol>
  </section>;
}
