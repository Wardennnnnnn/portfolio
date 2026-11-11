import Link from 'next/link';
const milestones = [
  { theme: 'March 2024 · Grade 12', title: 'RFID Attendance', project: 'RFID Attendance', href: '/projects/rfid-attendance/', text: "Learned JavaScript and server basics by building an attendance prototype. It received the Best in Innovation Award in 2024." },
  { theme: '2024 · Grade 12', title: 'Coin Sorter and Counter', project: 'Coin Sorter and Counter', href: '/projects/coin-sorter/', text: "Led a class build and arranged help to adapt a purchased 3D model for Philippine coins." },
  { theme: 'November–December 2025', title: 'PITS', project: 'PITS', href: '/projects/pits/', text: "Practiced Python and file handling through a system for infrastructure records, budgets, evidence review, and public project browsing." },
  { theme: 'June–July 2026', title: 'BasCal', project: 'BasCal', href: '/projects/bascal/', text: "Built a commissioned calculus platform and learned about AI integration, mathematical notation, and research-driven requirements." },
  { theme: 'July–August 2026', title: 'DRRM Alert Automation', project: 'DRRM Alert Automation', href: '/projects/drrm-alert-automation/', text: "Built a working n8n workflow. The channel for delivering announcements is still unresolved." },
  { theme: 'September 2026 · Preparation', title: 'HyperLink VI', project: 'HyperLink VI', href: '/projects/hyperlink/', text: "Prepared an 18-challenge bank that passed verification. Event paperwork and approval are pending." },
  { theme: 'October 2026', title: 'SparTap', project: 'SparTap', href: '/projects/safetap/', text: "Researched deployment, NFC, QR, and schematic floor views for a deployed application that has yet to be used in real operations." },
  { theme: 'Started October 2026', title: 'Silong Hamuros', project: 'Silong Hamuros', href: '/projects/silong-hamuros/', text: "Lead features in a six-member team. A functional Android prototype exists, and physical hardware testing is still ahead." },
];
export function ProjectProgression() {
  return <section className="progression-section wrap" aria-labelledby="progression-title"><div className="section-heading"><h2 id="progression-title">Project timeline</h2><p>The development of my projects over time.</p></div><p className="progression-intro">The dates below follow my work so far. Event approval, real-world use, and physical hardware testing are separate milestones that are still outstanding.</p><ol className="progression-list">{milestones.map(milestone => <li key={milestone.project}><div className="milestone-label"><span>{milestone.theme}</span><Link href={milestone.href}>{milestone.project}</Link></div><div><h3>{milestone.title}</h3><p>{milestone.text}</p></div></li>)}</ol></section>;
}
