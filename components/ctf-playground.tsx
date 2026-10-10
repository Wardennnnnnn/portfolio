'use client';
import { useState, type FormEvent } from 'react';
import { checkDemoFlag } from '@/lib/demo-state';
import { useHydrated } from './use-hydrated';
export function CtfPlayground() {
  const ready = useHydrated();
  const [flag, setFlag] = useState('');
  const [result, setResult] = useState<'idle' | 'empty' | 'format' | 'incorrect' | 'solved'>('idle');
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault();
    if (!flag.trim()) return setResult('empty');
    if (!/^don\{[^{}]+\}$/i.test(flag.trim())) return setResult('format');
    setResult(checkDemoFlag(flag) ? 'solved' : 'incorrect'); }
  return <section className="ctf-playground" id="ctf-playground" aria-labelledby="ctf-title">
    <div className="ctf-heading"><h3 id="ctf-title">Your first flag is waiting.</h3><p>A beginner cryptography puzzle made for this portfolio. Separate from the HyperLink competition.</p></div>
    <p>Letters have moved halfway around the alphabet. Decode the message:</p>
    <code className="cipher-text">ohvyq_jvgu_checbfr</code>
    <details className="ctf-hint"><summary>Need a hint?</summary><p>This is ROT13: A becomes N, B becomes O, and so on. Leave underscores unchanged. Wrap the decoded phrase in <code>DON&#123;…&#125;</code>.</p></details>
    <form noValidate onSubmit={submit} className="flag-form"><label htmlFor="ctf-flag">Submit your flag <span>Format: DON&#123;decoded_phrase&#125; · case-insensitive</span></label><div className="flag-entry"><input id="ctf-flag" value={flag} onChange={event => { setFlag(event.target.value); if (result !== 'idle') setResult('idle'); }} placeholder="DON{your_answer}" autoComplete="off" spellCheck={false} maxLength={100} disabled={!ready || result === 'solved'} aria-invalid={['empty', 'format', 'incorrect'].includes(result)} aria-describedby="flag-feedback" /><button type="submit" className="ctf-submit" disabled={!ready || result === 'solved'}>{result === 'solved' ? 'Captured' : 'Check flag'}</button></div></form>
    <div id="flag-feedback" className={`flag-feedback${result === 'solved' ? ' solved' : ''}`} role="status">{result === 'solved' ? <><svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true"><path d="m4 12 5 5L20 6" fill="none" stroke="currentColor" strokeWidth="2" /></svg><span><strong>Flag captured.</strong> Build with purpose. That’s the idea behind the work here.</span></> : !ready ? 'Loading the challenge controls…' : result === 'empty' ? 'Enter a flag first. Use the hint if you need a starting point.' : result === 'format' ? 'Use the format DON{decoded_phrase}, with opening and closing braces.' : result === 'incorrect' ? 'That flag doesn’t match yet. Try the ROT13 hint and check the DON{…} format.' : 'No timer. No leaderboard. Follow your curiosity.'}</div>
    {result === 'solved' && <button className="ctf-reset" type="button" onClick={() => { setFlag(''); setResult('idle'); }}>Try again</button>}
    <details className="ctf-solution"><summary>Show the solution & explanation</summary><p>Applying ROT13 twice restores the original text. The decoded phrase is <code>build_with_purpose</code>, so the flag is <code>DON&#123;build_with_purpose&#125;</code>. Encoding is reversible without a secret key; it is not secure encryption.</p></details>
    <noscript><p>Enable JavaScript to check your flag, or open the solution above.</p></noscript>
  </section>;
}
