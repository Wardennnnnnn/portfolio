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
  title: { default: 'Don Mclaire Gonzales — Web & App Developer', template: '%s | Don Gonzales' },
  description: 'Don Mclaire C. Gonzales is an IT student building web and mobile applications with AI-assisted development and pursuing a career in cybersecurity. Explore his projects and learning journey.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Don Mclaire Gonzales — Web & App Developer',
    description: 'Web and application development experience, a cybersecurity career goal, and projects built with curiosity and AI assistance.',
    type: 'website',
    url: '/',
    siteName: 'Don Mclaire Gonzales',
    images: [socialImage],
  },
  twitter: { card: 'summary_large_image', images: [socialImage.url] },
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
