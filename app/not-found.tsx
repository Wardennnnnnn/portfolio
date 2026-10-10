import Link from 'next/link';

export default function NotFound() {
  return <main id="main" className="not-found wrap"><h1>Page not found.</h1><p>This page may have moved, or the link may be incorrect.</p><Link className="button primary" href="/">Return to the portfolio</Link></main>;
}
