'use client';
import { useEffect, useRef, useState } from 'react';
import { readViewerImage, withViewerImage, type ViewerImage } from '@/lib/image-viewer-history';

export function ImageViewer() {
  const [image, setImage] = useState<ViewerImage | null>(null);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [zoomed, setZoomed] = useState(false);
  const [retry, setRetry] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const activeRef = useRef<ViewerImage | null>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const closingRef = useRef(false);
  const outsidePressRef = useRef(false);

  useEffect(() => {
    function show(next: ViewerImage | null) {
      closingRef.current = false;
      activeRef.current = next;
      setZoomed(false);
      setStatus('loading');
      setRetry(0);
      setImage(next);
    }
    function click(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[data-image-viewer]') : null;
      if (!target) return;
      const src = target.getAttribute('href');
      if (!src?.startsWith('/assets/projects/')) return;
      event.preventDefault();
      if (activeRef.current || closingRef.current) return;
      openerRef.current = target;
      const preview = target.querySelector('img');
      const next: ViewerImage = {
        id: `image-${Date.now()}-${Math.random().toString(36).slice(2)}`,
        src,
        alt: target.dataset.imageAlt || preview?.alt || 'Project image',
        caption: target.dataset.imageCaption || preview?.alt || 'Project image',
        width: Number(target.dataset.imageWidth || preview?.getAttribute('width')) || undefined,
        height: Number(target.dataset.imageHeight || preview?.getAttribute('height')) || undefined,
      };
      try { window.history.pushState(withViewerImage(window.history.state, next), '', window.location.href); } catch { /* The viewer still works if history is unavailable. */ }
      show(next);
    }
    const pop = () => show(readViewerImage(window.history.state));
    document.addEventListener('click', click);
    window.addEventListener('popstate', pop);
    pop();
    return () => {
      document.removeEventListener('click', click);
      window.removeEventListener('popstate', pop);
    };
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!image || !dialog) return;
    const bodyOverflow = document.body.style.overflow;
    const rootOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    if (!dialog.open) dialog.showModal();
    return () => {
      if (dialog.open) dialog.close();
      document.body.style.overflow = bodyOverflow;
      document.documentElement.style.overflow = rootOverflow;
      if (openerRef.current?.isConnected) openerRef.current.focus({ preventScroll: true });
    };
  }, [image]);

  function close() {
    if (!activeRef.current || closingRef.current) return;
    const entry = readViewerImage(window.history.state);
    if (entry?.id === activeRef.current.id) {
      closingRef.current = true;
      window.history.back();
    } else {
      activeRef.current = null;
      setImage(null);
    }
  }
  function outside(target: EventTarget | null) {
    return target instanceof Element && !target.closest('[data-viewer-surface]');
  }
  return <dialog ref={dialogRef} className={`image-viewer${zoomed ? ' is-zoomed' : ''}`} aria-labelledby="image-viewer-title" onCancel={event => { event.preventDefault(); close(); }} onPointerDown={event => { outsidePressRef.current = outside(event.target); }} onClick={event => { if (outsidePressRef.current && outside(event.target)) close(); }}>
    {image && <div className="image-viewer-sheet">
      <div className="image-viewer-toolbar" data-viewer-surface>
        <h2 id="image-viewer-title">{image.caption}</h2>
        <div className="image-viewer-actions"><button type="button" disabled={status !== 'ready'} aria-pressed={zoomed} onClick={() => setZoomed(value => !value)}>{zoomed ? 'Fit image' : 'Zoom in'}</button><button className="image-viewer-close" type="button" autoFocus onClick={close} aria-label="Close image viewer"><svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="1.8" /></svg><span>Close</span></button></div>
      </div>
      <div className="image-viewer-canvas">
        {status !== 'error' && <img key={`${image.id}-${retry}`} src={image.src} alt={image.alt} width={image.width} height={image.height} data-viewer-surface className={status === 'loading' ? 'image-loading' : undefined} onLoad={() => setStatus('ready')} onError={() => setStatus('error')} />}
        {status === 'loading' && <p className="image-viewer-status" role="status" data-viewer-surface>Loading image…</p>}
        {status === 'error' && <div className="image-viewer-error" role="status" data-viewer-surface><p>This image couldn’t load.</p><button type="button" onClick={() => { setStatus('loading'); setRetry(value => value + 1); }}>Try again</button></div>}
      </div>
    </div>}
  </dialog>;
}
