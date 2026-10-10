import test from 'node:test';
import assert from 'node:assert/strict';
import { demoReducer, demoStudents, initialDemoState, checkDemoFlag } from '../lib/demo-state.ts';
const scan = id => ({ type: 'scan', id });
const toggle = { type: 'connection' };
test('online arrival synchronizes once, including repeated scans', () => {
  const first = demoReducer(initialDemoState, scan(demoStudents[0].id));
  const repeat = demoReducer(first, scan(demoStudents[0].id));
  assert.equal(repeat.synced.length, 1);
  assert.equal(repeat.queued.length, 0);
  assert.match(repeat.message, /duplicate/);
  assert.equal(initialDemoState.synced.length, 0);
});
test('offline arrivals stay queued until reconnection', () => {
  let state = demoReducer(initialDemoState, toggle);
  for (const student of demoStudents) state = demoReducer(state, scan(student.id));
  assert.equal(state.synced.length, 0);
  assert.equal(state.queued.length, 4);
  state = demoReducer(state, scan(demoStudents[0].id));
  assert.equal(state.queued.length, 4);
  state = demoReducer(state, toggle);
  assert.equal(state.online, true);
  assert.equal(state.synced.length, 4);
  assert.deepEqual(state.queued, []);
  assert.match(state.message, /4 queued check-ins synced/);
});
test('reconnection preserves previous arrivals and duplicate checks work across connection modes', () => {
  let state = demoReducer(initialDemoState, scan(demoStudents[0].id));
  state = demoReducer(state, toggle);
  state = demoReducer(state, scan(demoStudents[0].id));
  assert.equal(state.queued.length, 0);
  state = demoReducer(state, scan(demoStudents[1].id));
  state = demoReducer(state, toggle);
  assert.deepEqual(state.synced, [demoStudents[0].id, demoStudents[1].id]);
});
test('empty reconnection, unknown IDs, and reset are safe', () => {
  assert.equal(demoReducer(initialDemoState, scan('unknown')), initialDemoState);
  let state = demoReducer(demoReducer(initialDemoState, toggle), toggle);
  assert.match(state.message, /No queued/);
  state = demoReducer(state, scan(demoStudents[0].id));
  assert.deepEqual(demoReducer(state, { type: 'reset' }), initialDemoState);
});
test('repeated scans and connection changes never inflate the arrival count', () => {
  let state = initialDemoState;
  for (let i = 0; i < 100; i++) {
    state = demoReducer(state, i % 3 === 0 ? toggle : scan(demoStudents[i % 4].id));
    const ids = [...state.synced, ...state.queued];
    assert.equal(new Set(ids).size, ids.length);
    assert.ok(ids.length <= demoStudents.length);
    assert.ok(state.log.length <= 4);
  }
});
test('CTF accepts the decoded flag and rejects missing or incorrect wrappers', () => {
  assert.ok(checkDemoFlag(' DON{build_with_purpose} '));
  assert.ok(checkDemoFlag('don{BUILD_WITH_PURPOSE}'));
  for (const value of ['', 'build_with_purpose', 'DON{ohvyq_jvgu_checbfr}', 'DON{wrong}']) assert.equal(checkDemoFlag(value), false);
  const decoded = 'ohvyq_jvgu_checbfr'.replace(/[a-z]/g, c => String.fromCharCode((c.charCodeAt(0) - 97 + 13) % 26 + 97));
  assert.ok(checkDemoFlag(`DON{${decoded}}`));
});

test('empty and oversized CTF answers remain invalid', () => {
  assert.equal(checkDemoFlag('   '), false);
  assert.equal(checkDemoFlag('DON{' + 'x'.repeat(10000) + '}'), false);
  assert.equal(checkDemoFlag('DON{build_with_purpose}\nextra'), false);
});
