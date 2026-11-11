import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ImageViewer } from '@/components/image-viewer';
import './globals.css';
import { siteUrl, socialImage } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
  title: { default: 'Don Mclaire C. Gonzales — Web and Application Developer', template: '%s | Don Gonzales' },
  description: 'Don Mclaire C. Gonzales is a third-year Information Technology student at Batangas State University. He builds web and mobile applications and plans to pursue a career in cybersecurity. This portfolio presents his projects, leadership roles, and security work.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Don Mclaire C. Gonzales — Web and Application Developer',
    description: 'Web and application development projects, security review notes, and a career goal in cybersecurity.',
    type: 'website',
    url: '/',
    siteName: 'Don Mclaire Gonzales',
    images: [socialImage],
  },
  twitter: { card: 'summary_large_image', title: "Don Mclaire C. Gonzales — Web and Application Developer", description: "Web and application development projects, security review notes, and a career goal in cybersecurity.", images: [socialImage.url] },
};

export const viewport: Viewport = { colorScheme: 'light dark', themeColor: '#2555e8' };

// Runs before paint. Only the root theme attribute differs during hydration.
const themeInit = `try{var t=localStorage.getItem('don-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeInit }} /></head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <SiteHeader />{children}<SiteFooter /><ImageViewer />
      </body>
    </html>
  );
}
