import test from 'node:test';
import assert from 'node:assert/strict';
import { readViewerImage, withViewerImage, viewerHistoryKey } from '../lib/image-viewer-history.ts';
const image = { id: 'image-1', src: '/assets/projects/rfid-hardware.jpeg', alt: 'RFID hardware', caption: 'Grade 12 hardware', width: 1280, height: 1864 };
test('opening an image preserves Next router state without mutating the page entry', () => {
  const state = { __NA: true, __PRIVATE_NEXTJS_INTERNALS_TREE: ['page'], custom: 'kept' };
  const next = withViewerImage(state, image);
  assert.equal(next.__NA, true);
  assert.deepEqual(next.__PRIVATE_NEXTJS_INTERNALS_TREE, ['page']);
  assert.equal(next.custom, 'kept');
  assert.equal(state[viewerHistoryKey], undefined);
  assert.deepEqual(readViewerImage(next), image);
});
test('Back resolves the page entry to no image; Forward resolves the image entry', () => {
  const page = { __NA: true };
  const overlay = withViewerImage(page, image);
  assert.deepEqual(readViewerImage(overlay), image);
  assert.equal(readViewerImage(page), null);
  assert.deepEqual(readViewerImage(overlay), image);
});
test('history payloads only accept local project images with complete metadata', () => {
  for (const state of [null, undefined, 1, {}, { [viewerHistoryKey]: 'bad' }, { [viewerHistoryKey]: { ...image, src: 'https://example.com/image.png' } }, { [viewerHistoryKey]: { ...image, caption: undefined } }]) assert.equal(readViewerImage(state), null);
  assert.deepEqual(readViewerImage(withViewerImage(null, image)), image);
});
