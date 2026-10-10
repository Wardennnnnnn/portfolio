'use client';
import { useReducer } from 'react';
import Link from 'next/link';
import { demoReducer, demoStudents, initialDemoState } from '@/lib/demo-state';
import { useHydrated } from './use-hydrated';
export function SafeTapDemo() {
  const [state, dispatch] = useReducer(demoReducer, initialDemoState);
  const ready = useHydrated();
  const checked = state.synced.length + state.queued.length;
  const complete = checked === demoStudents.length;
  return <section className="demo-section wrap" id="safetap-demo" aria-labelledby="demo-title">
    <div className="section-heading"><h2 id="demo-title">Try the idea.<br />See the difference.</h2><p>A SafeTap interaction demo.<br />Fictional students. Everything stays in this page.</p></div>
    <div className="demo-layout">
      <div className="demo-guide"><h3>Connection lost.<br />Check-ins continue.</h3><p>Tap a student to record an arrival. Switch offline, record another, then reconnect to synchronize the queue.</p><div className="demo-flow" aria-label="Check-in workflow"><span>Record arrival</span><span>Queue if offline</span><span>Sync on reconnect</span></div><p className="demo-explainer">A queued arrival is recorded on this device. It joins the shared count after synchronization.</p><Link className="text-link" href="/projects/safetap/">Explore SafeTap’s actual workflows</Link></div>
      <div className="demo-console">
        <div className="demo-toolbar"><span className="connection-state"><span className={`connection-dot${state.online ? '' : ' offline'}`} aria-hidden="true" />{state.online ? 'Demo online' : 'Demo offline'}</span><button className="connection-button" disabled={!ready} type="button" onClick={() => dispatch({ type: 'connection' })}>{state.online ? 'Switch offline' : 'Reconnect & sync'}</button></div>
        <div className="arrival-count"><span><strong>{state.synced.length}</strong> / {demoStudents.length}</span><p>Synced arrivals<span>{state.queued.length} queued on this device · {demoStudents.length - checked} awaiting</span></p></div>
        <p className="roster-instruction">Choose a student to check in</p>
        <ul className="demo-roster" aria-label="Fictional students">{demoStudents.map(student => {
          const synced = state.synced.includes(student.id); const queued = state.queued.includes(student.id); const recorded = synced || queued;
          return <li key={student.id} data-status={synced ? 'synced' : queued ? 'queued' : 'awaiting'}><span className="student-initials" aria-hidden="true">{student.initials}</span><span className="roster-name">{student.name}<span>{synced ? 'Synced arrival' : queued ? 'Saved locally · pending sync' : 'Awaiting check-in'}</span></span><button className="student-check-in" type="button" disabled={!ready || recorded} aria-label={`Check in ${student.name}`} onClick={() => dispatch({ type: 'scan', id: student.id })}>{recorded ? <><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="m4 12 5 5L20 6" fill="none" stroke="currentColor" strokeWidth="2" /></svg>Recorded</> : 'Check in'}</button></li>;
        })}</ul>
        <p className="demo-feedback" role="status" aria-atomic="true">{!ready ? 'Loading interactive controls…' : complete && !state.queued.length ? 'Everyone is accounted for. All four demo arrivals are synced.' : complete ? 'All arrivals recorded locally. Reconnect to sync the remaining queue.' : state.message}</p>
        <div className="demo-bottom"><details className="demo-log"><summary>Recent activity</summary>{state.log.length ? <ul>{state.log.map((entry, index) => <li key={`${index}-${entry}`}>{entry}</li>)}</ul> : <p>No check-ins yet.</p>}</details><button className="control-link demo-reset" type="button" disabled={!ready || !state.log.length} onClick={() => dispatch({ type: 'reset' })}>Start over</button></div>
        <noscript><p>Enable JavaScript to try the check-in demo. The project walkthrough remains available.</p></noscript>
      </div>
    </div>
  </section>;
}
