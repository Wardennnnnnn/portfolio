import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export function SiteHeader() {
  return (
    <div className="header-shell">
      <header className="site-header wrap">
        <Link className="wordmark" href="/#home" aria-label="Don Gonzales home">terincorp<span>.com</span></Link>
        <nav aria-label="Main navigation">
          <Link href="/#work">Work</Link><Link href="/#safetap-demo">Play</Link><Link href="/#about">About</Link><Link href="/#experience">Experience</Link><Link href="/#contact">Contact</Link>
        </nav>
        <ThemeToggle />
      </header>
    </div>
  );
}
