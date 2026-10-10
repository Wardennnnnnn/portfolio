export interface SecurityHistoryEntry {
  id: string;
  date: string;
  status: 'Needs review' | 'Hardening planned' | 'Confirmed vulnerability' | 'Fix verified';
  title: string;
  summary: string;
  validation: string;
  version?: string;
  resolves?: string;
}

// Preserve earlier entries. Add a resolution with its version, evidence, and
// `resolves` pointing to the original entry once a fix has actually been verified.
export const securityHistory: Record<string, SecurityHistoryEntry[]> = {
  safetap: [
    { id: 'safetap-cookie-deployment', date: '2026-10-10', status: 'Needs review', title: 'Verify deployed session settings', summary: 'Secure cookies are configurable in the server. The deployed HTTPS and cookie configuration needs confirmation.', validation: 'Source inspected; live deployment settings not verified.' },
    { id: 'safetap-directory-scope', date: '2026-10-10', status: 'Needs review', title: 'Review student-directory access', summary: 'Authenticated users receive the student directory. Review the operational requirements to determine the records each role needs.', validation: 'Response code inspected; the intended access policy needs confirmation.' },
  ],
  'silong-hamuros': [
    { id: 'silong-production-access', date: '2026-10-10', status: 'Hardening planned', title: 'Plan production credential management', summary: 'The prototype separates app and device credentials. Token rotation, revocation, and API rate limiting remain production milestones.', validation: 'Source inspected; no production security assessment or physical-device validation performed.' },
  ],
};
