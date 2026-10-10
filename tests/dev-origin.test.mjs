import { createRequire } from 'node:module';
import test from 'node:test';
import assert from 'node:assert/strict';
import config from '../next.config.ts';
const require = createRequire(import.meta.url);
const { blockCrossSiteDEV } = require('next/dist/server/lib/router-utils/block-cross-site-dev.js');
const response = { statusCode: 200, end() { throw Error('Allowed LAN request was blocked'); } };
test('Next allows HMR from the actual LAN preview origin', () => {
  assert.equal(blockCrossSiteDEV({ url: '/_next/hmr', headers: { origin: 'http://192.168.1.225:3000' } }, response, config.allowedDevOrigins, 'localhost'), false);
});
test('Next allows script requests whose referrer is the LAN preview', () => {
  assert.equal(blockCrossSiteDEV({ url: '/_next/static/chunks/test.js', headers: { 'sec-fetch-mode': 'no-cors', 'sec-fetch-site': 'cross-site', referer: 'http://192.168.1.225:3000/' } }, response, config.allowedDevOrigins, 'localhost'), false);
});
