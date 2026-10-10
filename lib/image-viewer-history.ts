export const viewerHistoryKey = '__donImageViewer';
export interface ViewerImage { id: string; src: string; alt: string; caption: string; width?: number; height?: number }
export function readViewerImage(state: unknown): ViewerImage | null {
  if (!state || typeof state !== 'object') return null;
  const image = (state as Record<string, unknown>)[viewerHistoryKey];
  if (!image || typeof image !== 'object') return null;
  const value = image as Partial<ViewerImage>;
  if (typeof value.id !== 'string' || typeof value.src !== 'string' || !value.src.startsWith('/assets/projects/') || typeof value.alt !== 'string' || typeof value.caption !== 'string') return null;
  return value as ViewerImage;
}
export function withViewerImage(state: unknown, image: ViewerImage): Record<string, unknown> {
  // Preserve Next's router state so Back restores the page rather than leaving it.
  return { ...(state && typeof state === 'object' ? state : {}), [viewerHistoryKey]: image };
}
