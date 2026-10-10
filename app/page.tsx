import { ProjectShowcase } from '@/components/project-showcase';
import { SafeTapDemo } from '@/components/safetap-demo';
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
            <h1 id="hero-title">A problem is<br />an invitation<br />to <span>build.</span></h1>
            <p>I build web and mobile applications using AI-assisted development. My goal is to pursue cybersecurity, bringing that development experience into understanding vulnerabilities and building safer systems.</p>
            <div className="hero-actions">
              <a className="button primary" href="#work">Explore my work</a>
              <a className="text-link" href="#safetap-demo">Try the interactive demos</a>
            </div>
          </div>
          <ProjectShowcase projects={projects.map(({ id, title, domain, screenshot, alt, screenshotSize }) => ({ id, title, domain, screenshot, alt, screenshotSize }))} />
        </div>
        <div className="hero-rule" aria-hidden="true" />
      </section>
<section className="work wrap" id="work" aria-labelledby="work-title"><div className="section-heading"><h2 id="work-title">Ideas put to work.</h2><p>Why I built them. What I contributed.<br />Where they are today.</p></div><div>{projects.map(project => <ProjectCard key={project.id} project={project} />)}</div></section>
<SafeTapDemo />
<section className="cyber-section" id="hyperlink" aria-labelledby="cyber-title"><div className="wrap cyber-layout"><div><h2 id="cyber-title">Building challenges.<br />Creating curiosity.</h2><p className="cyber-subtitle">HyperLink VI · CTF Head & Sole Challenge Developer</p><p>I developed an 18-challenge Capture the Flag competition using AI-assisted development, bringing together six cybersecurity categories in a progression from beginner exercises to advanced challenges.</p><p>My work included challenge-generation scripts, player files, hints, scoring configurations, organizer solutions, an automated verification tool, and CTFd deployment preparation.</p><div className="project-learning"><h3>What I learned</h3><p>{hyperlink.learnings[0].detail}</p></div><p className="small-note">Preparation: September 2026 · Challenge-bank verifier passed. Event paperwork is in progress and approval is pending.</p><Link className="text-link" href="/projects/hyperlink/">View the CTF case study</Link><div className="cyber-evidence"><ProjectScreenshot project={hyperlink} compact /></div></div><div className="cyber-right"><div className="category-list"><span>Cryptography</span><span>Forensics</span><span>Reverse engineering</span><span>Web exploitation</span><span>Binary exploitation</span><span>Open-source intelligence</span></div><CtfPlayground /></div></div></section>
<ProjectProgression />
<SecurityUpdates />
<section className="wrap early-work" aria-labelledby="early-work-title"><div className="section-heading"><h2 id="early-work-title">Where I started.</h2><p>Grade 12 projects in hardware integration,<br />design adaptation, and teamwork.</p></div>{earlyProjects.map(project => <ExperimentCard key={project.id} project={project} />)}</section>
<section className="wrap experiments" aria-labelledby="experiments-title"><div className="section-heading"><h2 id="experiments-title">Still taking shape.</h2><p>Prototypes, team work, and questions<br />I'm continuing to explore.</p></div><div>{ongoingProjects.map(project => <ExperimentCard key={project.id} project={project} />)}</div></section>
<section className="about-section wrap" id="about" aria-labelledby="about-title"><div className="about-title"><h2 id="about-title">Curiosity first.<br />Then, the work.</h2><p className="signature">Don Mclaire</p></div><div className="about-copy"><p>I'm Don Mclaire C. Gonzales, a third-year BS Information Technology student at Batangas State University – The National Engineering University, CICS Alangilan.</p><p>I enjoy noticing what could work better, understanding the people affected, and exploring what a practical solution might look like. My projects span educational platforms, campus safety, infrastructure transparency, and agricultural automation.</p><h3>Where I'm headed</h3><p>Most of my project experience is in web and application development. Cybersecurity is the career direction I want to pursue. Building applications gives me a practical starting point for understanding how systems work and where they can fail; my HyperLink challenge work and cybersecurity coursework are part of that learning journey.</p><h3>How I build</h3><p>I use AI-assisted programming as part of my development process. BasCal, SafeTap, PITS, and the HyperLink challenges were solo development efforts with AI assistance. Silong Hamuros is a team project where I serve as Project Manager, Main Project Feature Lead, and Application Feature Lead. I conceptualized most of the planned prototype’s features and help develop the application workflows.</p><h3>Why I build</h3><p>I don't need to have every answer before I start. I need a worthwhile problem, the willingness to learn, and the patience to keep refining an idea until it becomes something tangible.</p></div></section>
<section className="wrap skills-section" id="skills" aria-labelledby="skills-title"><div className="section-heading"><h2 id="skills-title">Tools behind the ideas.</h2><p>Technologies used in my projects,<br />and areas I'm exploring.</p></div><div className="skill-rows"><div><h3>Web & applications</h3><p>JavaScript · HTML · CSS · Node.js · Express · Socket.IO · Flutter · Dart</p></div><div><h3>Data & desktop</h3><p>MySQL · SQLite · Python · Kivy · KivyMD</p></div><div><h3>AI & infrastructure</h3><p>Perplexity API · GitHub · Linux · CTFd · n8n · ngrok · Tailscale</p></div><div><h3>Areas of exploration</h3><p>IoT · Networking · Cybersecurity · Workflow automation · Project leadership</p></div></div></section>
<section className="wrap experience-section" id="experience" aria-labelledby="experience-title">
  <div className="section-heading"><h2 id="experience-title">Responsibility beyond code.</h2><p>Leading projects and contributing<br />to student communities.</p></div>
  <div className="experience-list">
    <article><h3>CTF Head & Challenge Developer</h3><p>HyperLink VI · Department organization event</p><span>September 2026 preparation · Event approval pending</span></article>
    <article><h3>Project Manager & Main Project Feature Lead</h3><p>Silong Hamuros · Application Feature Lead · Six-member team</p><span>October 2026–present</span></article>
    <article><h3>Disaster Risk Reduction and Management Lead</h3><p>IINTESS</p><span>August 2026–present</span></article>
    <article><h3>DRRM Officer</h3><p>ASTRA Developers</p><span>August 2026–present</span></article>
    <article><h3>Partnerships and Resource Development Committee Member</h3><p>CICS Student Council (CICS-SC)</p><span>August 2026–present</span></article>
    <article><h3>Work Immersion</h3><p>NYK Bauan · Best in Work Immersion Award</p><span>Started April 15, 2024</span></article>
    <article><h3>Public Relations Committee Member</h3><p>Supreme Secondary Learner Government (SSLG)</p><span>2023–2024</span></article>
    <article><h3>Grade 12 Java A Class President</h3><p>Bauan Technical Integrated High School</p><span>2023–2024</span></article>
    <article><h3>Rondalla Lead & Bandurria Player</h3><p>Selected as lead for my proficiency in playing the bandurria.</p><span>2013–2014</span></article>
  </div>
</section>
<section className="wrap education-section" id="education" aria-labelledby="education-title">
  <h2 id="education-title">Learning, always.</h2>
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
      <h3>Training & professional development</h3>
      <p>Google Cybersecurity Certificate — Coursework</p>
      <p className="small-note">Coursework completed · Certificate not obtained</p>
      <p>SAGIP — DRRM Training</p>
      <p className="small-note">Training for Disaster Risk Reduction and Management personnel, provided by BFP, PNP, and Red Cross.</p>
      <section className="planned-learning" aria-labelledby="planned-learning-title">
        <h3 id="planned-learning-title">Planned learning</h3>
        <p className="planned-learning-intro">Appkademiya certification goals · All not yet started</p>
        <dl className="learning-goals">
          <div><dt>COAP — Certified Offensive API Pentester</dt><dd>API security and offensive testing. My goal is to strengthen how I assess the security of application APIs.</dd></div>
          <div><dt>NTO-101 — NetOps Certified Engineer</dt><dd>Network operations, with automation and API-driven management. My goal is to deepen my understanding of operating and securing networks.</dd></div>
          <div><dt>CWPT — Certified Web Penetration Tester</dt><dd>Web application penetration testing. My goal is to improve how I identify and assess security weaknesses in web applications.</dd></div>
          <div><dt>LXO-101 — LinuxOps Certified Engineer</dt><dd>Linux operations and system administration. My goal is to build a stronger foundation for managing and troubleshooting Linux systems.</dd></div>
        </dl>
        <a className="text-link" href="https://ph.linkedin.com/company/appkademiya" target="_blank" rel="noopener noreferrer">About Appkademiya</a>
      </section>
    </div>
  </div>
</section>
<section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="wrap"><div className="contact-heading"><h2 id="contact-title">Have something<br />worth building?</h2><p>Let's talk about internships, job opportunities, freelance projects, or an idea you're working on.</p></div><a className="contact-email" href="mailto:gdonmclaire15@gmail.com">gdonmclaire15@gmail.com</a><div className="contact-grid"><div><h3>Other ways to email</h3><a href="mailto:gonzalesdm@proton.me">gonzalesdm@proton.me</a><a href="mailto:24-01367@g.batstate-u.edu.ph">24-01367@g.batstate-u.edu.ph</a></div><div><h3>Find me online</h3><a href="https://github.com/Wardennnnnnn" target="_blank" rel="noopener noreferrer">GitHub</a><a href="https://www.linkedin.com/in/don-mclaire-gonzales-b6774b341" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="https://www.facebook.com/akocdm.gonzales" target="_blank" rel="noopener noreferrer">Facebook</a></div></div></div></section>
</main>
  );
}
