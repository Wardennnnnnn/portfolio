export const demoStudents = [
  { id: 'demo-01', name: 'Alex Rivera', initials: 'AR' },
  { id: 'demo-02', name: 'Sam Cruz', initials: 'SC' },
  { id: 'demo-03', name: 'Jamie Reyes', initials: 'JR' },
  { id: 'demo-04', name: 'Taylor Santos', initials: 'TS' },
];
export type DemoState = { online: boolean; synced: string[]; queued: string[]; message: string; log: string[] };
export type DemoAction = { type: 'scan'; id: string } | { type: 'connection' } | { type: 'reset' };
export const initialDemoState: DemoState = { online: true, synced: [], queued: [], message: 'Tap a fictional student to record the first arrival.', log: [] };
export function demoReducer(state: DemoState, action: DemoAction): DemoState {
  if (action.type === 'reset') return { ...initialDemoState, synced: [], queued: [], log: [] };
  let message: string;
  if (action.type === 'connection') {
    if (state.online) {
      message = 'Offline mode. New check-ins will wait in the local queue.';
      return { ...state, online: false, message, log: [message, ...state.log].slice(0, 4) };
    }
    message = state.queued.length ? `Reconnected. ${state.queued.length} queued check-in${state.queued.length === 1 ? '' : 's'} synced.` : 'Reconnected. No queued check-ins to sync.';
    return { ...state, online: true, synced: [...new Set([...state.synced, ...state.queued])], queued: [], message, log: [message, ...state.log].slice(0, 4) };
  }
  const student = demoStudents.find(student => student.id === action.id);
  if (!student) return state;
  if ([...state.synced, ...state.queued].includes(student.id)) {
    message = `${student.name} is already checked in. No duplicate record added.`;
    return { ...state, message, log: [message, ...state.log].slice(0, 4) };
  }
  message = state.online ? `${student.name} checked in and synced.` : `${student.name} checked in locally. Waiting to sync.`;
  return { ...state, synced: state.online ? [...state.synced, student.id] : state.synced, queued: state.online ? state.queued : [...state.queued, student.id], message, log: [message, ...state.log].slice(0, 4) };
}
export function checkDemoFlag(value: string): boolean {
  return value.trim().toLowerCase() === 'don{build_with_purpose}';
}
