'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
const storageKey = 'don-theme';

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const resolve = () => {
      let stored: string | null = null;
      try { stored = localStorage.getItem(storageKey); } catch { /* Storage can be unavailable. */ }
      const next: Theme = stored === 'light' || stored === 'dark' ? stored : media.matches ? 'dark' : 'light';
      document.documentElement.dataset.theme = next;
      setTheme(next);
    };
    const handleStorage = (event: StorageEvent) => {
      if (event.key === storageKey || event.key === null) resolve();
    };
    resolve();
    media.addEventListener('change', resolve);
    window.addEventListener('storage', handleStorage);
    return () => {
      media.removeEventListener('change', resolve);
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  const toggle = () => {
    const current = document.documentElement.dataset.theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next: Theme = current === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem(storageKey, next); } catch { /* Keep the toggle usable without storage. */ }
    setTheme(next);
  };

  const label = theme === null ? 'Theme' : theme === 'dark' ? 'Light mode' : 'Dark mode';
  return (
    <button className="theme-button" type="button" onClick={toggle} aria-label={theme === null ? 'Switch color theme' : `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
      <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8" /><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor" stroke="none" /></svg>
      <span>{label}</span>
    </button>
  );
}
