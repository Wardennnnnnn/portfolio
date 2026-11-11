import { ProjectShowcase } from '@/components/project-showcase';
import { SparTapDemo } from '@/components/safetap-demo';
import { CtfPlayground } from '@/components/ctf-playground';
import { ProjectProgression } from '@/components/project-progression';
import Link from 'next/link';
import { projects, earlyProjects, ongoingProjects, hyperlink } from '@/lib/content';
import { ProjectCard } from '@/components/project-card';
import { ExperimentCard } from '@/components/experiment-card';
import { ProjectScreenshot } from '@/components/project-screenshot';
import { SecurityUpdates } from '@/components/security-updates';

export default function HomePage() {
  return (
<main id="main">
      <section className="hero wrap" id="home" aria-labelledby="hero-title">
        <div className="hero-intro">
          <p className="name">Don Mclaire C. Gonzales</p>
          <p className="location">IT student · Batangas, Philippines</p>
        </div>
        <div className="hero-composition">
          <div className="hero-statement">
            <h1 id="hero-title">Web and application developer, working toward a career in <span>cybersecurity.</span></h1>
            <p>I am a third-year Information Technology student. I build web and mobile applications, and I plan to pursue a career in cybersecurity. This portfolio documents my projects, my contribution to each, and where each one stands today.</p>
            <div className="hero-actions">
              <a className="button primary" href="#work">View projects</a>
              <a className="text-link" href="#safetap-demo">Try the demos</a>
            </div>
          </div>
          <ProjectShowcase projects={projects.map(({ id, title, domain, screenshot, alt, screenshotSize }) => ({ id, title, domain, screenshot, alt, screenshotSize }))} />
        </div>
        <div className="hero-rule" aria-hidden="true" />
      </section>
<section className="work wrap" id="work" aria-labelledby="work-title"><div className="section-heading"><h2 id="work-title">Projects</h2><p>Each entry explains why the project was built, what I contributed, and its current status.</p></div><div>{projects.map(project => <ProjectCard key={project.id} project={project} />)}</div></section>
<SparTapDemo />
<section className="cyber-section" id="hyperlink" aria-labelledby="cyber-title"><div className="wrap cyber-layout"><div><h2 id="cyber-title">HyperLink VI<span className="cyber-role">— Head and sole challenge developer</span></h2><p className="cyber-subtitle">Capture the Flag development</p><p>I developed an 18-challenge Capture the Flag competition for a department event. The challenges cover six cybersecurity categories and progress from beginner to advanced difficulty.</p><p>My work included challenge-generation scripts, player files, hints, scoring configurations, organizer solutions, an automated verification tool, and preparation for CTFd deployment.</p><div className="project-learning"><h3>What I learned</h3><p>{hyperlink.learnings[0].detail}</p></div><p className="small-note">Prepared in September 2026. The challenge bank passed verification. Event approval is pending.</p><Link className="text-link" href="/projects/hyperlink/">View the CTF case study</Link><div className="cyber-evidence"><ProjectScreenshot project={hyperlink} compact /></div></div><div className="cyber-right"><div className="category-list"><span>Cryptography</span><span>Forensics</span><span>Reverse engineering</span><span>Web exploitation</span><span>Binary exploitation</span><span>Open-source intelligence</span></div><CtfPlayground /></div></div></section>
<ProjectProgression />
<SecurityUpdates />
<section className="wrap early-work" aria-labelledby="early-work-title"><div className="section-heading"><h2 id="early-work-title">Earlier work</h2><p>Grade 12 projects in hardware integration, design adaptation, and teamwork.</p></div>{earlyProjects.map(project => <ExperimentCard key={project.id} project={project} />)}</section>
<section className="wrap experiments" aria-labelledby="experiments-title"><div className="section-heading"><h2 id="experiments-title">Projects in progress</h2><p>Prototypes and team work that are still under development.</p></div><div>{ongoingProjects.map(project => <ExperimentCard key={project.id} project={project} />)}</div></section>
<section className="about-section wrap" id="about" aria-labelledby="about-title"><div className="about-title"><h2 id="about-title">About</h2><p className="signature">Don Mclaire</p></div><div className="about-copy"><p>I am a third-year BS Information Technology student at Batangas State University – The National Engineering University, CICS Alangilan.</p><p>I like to look for things that could work better, understand the people who are affected, and consider what a practical solution might be. My projects cover educational platforms, campus safety, infrastructure transparency, and agricultural automation.</p><h3>Career direction</h3><p>Most of my project experience is in web and application development. I want to pursue a career in cybersecurity. Building applications has given me a practical way to understand how systems work and where they can fail. My HyperLink challenge work and cybersecurity coursework are part of this path.</p><h3>How I work</h3><p>I use AI tools as one part of my development process, together with documentation and forum research. BasCal, SparTap, PITS, and the HyperLink challenges were solo projects. Silong Hamuros is a team project in which I serve as Project Manager, Main Project Feature Lead, and Application Feature Lead. I conceptualized most of its planned features, and I help develop the application workflows.</p><h3>Approach</h3><p>I do not wait to have every answer before I begin. I look for a problem worth solving, learn what I need along the way, and keep refining the work until it is complete.</p></div></section>
<section className="wrap skills-section" id="skills" aria-labelledby="skills-title"><div className="section-heading"><h2 id="skills-title">Technical skills</h2><p>Technologies I have used in my projects, and areas I am exploring.</p></div><div className="skill-rows"><div><h3>Web and applications</h3><p>JavaScript · HTML · CSS · Node.js · Express · Socket.IO · Flutter · Dart</p></div><div><h3>Data and desktop</h3><p>MySQL · SQLite · Python · Kivy · KivyMD</p></div><div><h3>AI and infrastructure</h3><p>Perplexity API · GitHub · Linux · CTFd · n8n · ngrok · Tailscale</p></div><div><h3>Areas of exploration</h3><p>IoT · Networking · Cybersecurity · Workflow automation · Project leadership</p></div></div></section>
<section className="wrap experience-section" id="experience" aria-labelledby="experience-title">
  <div className="section-heading"><h2 id="experience-title">Leadership and involvement</h2><p>Leadership roles and involvement in student communities.</p></div>
  <div className="experience-list">
    <article><h3>CTF Head and Challenge Developer</h3><p>HyperLink VI · Department organization event</p><span>September 2026 preparation · Event approval pending</span></article>
    <article><h3>Project Manager and Main Project Feature Lead</h3><p>Silong Hamuros · Application Feature Lead · Six-member team</p><span>October 2026–present</span></article>
    <article><h3>Disaster Risk Reduction and Management Lead</h3><p>IINTESS</p><span>August 2026–present</span></article>
    <article><h3>DRRM Officer</h3><p>ASTRA Developers</p><span>August 2026–present</span></article>
    <article><h3>Partnerships and Resource Development Committee Member</h3><p>CICS Student Council (CICS-SC)</p><span>August 2026–present</span></article>
    <article><h3>Work Immersion</h3><p>NYK Bauan · Best in Work Immersion Award</p><span>Started April 15, 2024</span></article>
    <article><h3>Public Relations Committee Member</h3><p>Supreme Secondary Learner Government (SSLG)</p><span>2023–2024</span></article>
    <article><h3>Grade 12 Java A Class President</h3><p>Bauan Technical Integrated High School</p><span>2023–2024</span></article>
    <article><h3>Rondalla Lead and Bandurria Player</h3><p>Selected as lead for proficiency on the bandurria.</p><span>2013–2014</span></article>
  </div>
</section>
<section className="wrap education-section" id="education" aria-labelledby="education-title">
  <h2 id="education-title">Education and training</h2>
  <div className="education-layout">
    <div>
      <h3>Batangas State University – The National Engineering University</h3>
      <p>Bachelor of Science in Information Technology<br />CICS · Alangilan Campus</p>
      <p className="small-note">2024–2028 · Expected graduation: 2028</p>
      <h3>Bauan Technical Integrated High School</h3>
      <p>Senior High School</p>
      <p className="small-note">2022–2024</p>
    </div>
    <div className="credential-placeholder">
      <h3>Training and professional development</h3>
      <p>ServiceNow training</p>
      <p className="small-note">In progress · Certification not yet obtained</p>
      <p>Google Cybersecurity Certificate — Coursework</p>
      <p className="small-note">Coursework completed · Certificate not obtained</p>
      <p>SAGIP — DRRM Training</p>
      <p className="small-note">Training for Disaster Risk Reduction and Management personnel, provided by BFP, PNP, and the Red Cross.</p>
      <section className="planned-learning" aria-labelledby="planned-learning-title">
        <h3 id="planned-learning-title">Planned certifications</h3>
        <p className="planned-learning-intro">Appkademiya certification goals. None have been started.</p>
        <dl className="learning-goals">
          <div><dt>COAP — Certified Offensive API Pentester</dt><dd>API security and offensive testing. I want to strengthen how I assess the security of application APIs.</dd></div>
          <div><dt>NTO-101 — NetOps Certified Engineer</dt><dd>Network operations, automation, and API-driven management. I want to deepen my understanding of operating and securing networks.</dd></div>
          <div><dt>CWPT — Certified Web Penetration Tester</dt><dd>Web application penetration testing. I want to improve how I identify and assess weaknesses in web applications.</dd></div>
          <div><dt>LXO-101 — LinuxOps Certified Engineer</dt><dd>Linux operations and system administration. I want to build a stronger foundation for managing and troubleshooting Linux systems.</dd></div>
        </dl>
        <a className="text-link" href="https://ph.linkedin.com/company/appkademiya" target="_blank" rel="noopener noreferrer">About Appkademiya</a>
      </section>
    </div>
  </div>
</section>
<section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="wrap"><div className="contact-heading"><h2 id="contact-title">Contact</h2><p>I am open to internships, job opportunities, freelance projects, and project collaborations, including capstone development. Please feel free to contact me.</p></div><a className="contact-email" href="mailto:gdonmclaire15@gmail.com">gdonmclaire15@gmail.com</a><div className="contact-grid"><div><h3>Other emails</h3><a href="mailto:gonzalesdm@proton.me">gonzalesdm@proton.me</a><a href="mailto:24-01367@g.batstate-u.edu.ph">24-01367@g.batstate-u.edu.ph</a></div><div><h3>Online</h3><a href="https://github.com/Wardennnnnnn" target="_blank" rel="noopener noreferrer">GitHub</a><a href="https://www.linkedin.com/in/don-mclaire-gonzales-b6774b341" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="https://www.facebook.com/akocdm.gonzales" target="_blank" rel="noopener noreferrer">Facebook</a></div></div></div></section>
</main>
  );
}
