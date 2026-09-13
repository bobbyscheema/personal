import { useEffect, useState } from 'react'
import {
  ArrowDown, ArrowUpRight, BookOpen, Cpu,
  Link, Mail, Menu, Orbit, X, Zap,
} from 'lucide-react'

const experience = [
  {
    period: 'SUMMER 2026', role: 'Software Engineering Intern', company: 'NASA Ames Research Center',
    team: 'Multi-Mission Operations Center', place: 'Mountain View, CA', accent: 'ORBITAL INFRA',
    summary: 'Built a monitoring dashboard for mission infrastructure that brought health and performance data from more than 50 hosts into one place.',
    points: ['Centralized monitoring across mission-critical infrastructure', 'Aggregation and alert pipelines for faster anomaly detection', 'Interactive views for uptime, latency, availability, and alert history'],
  },
  {
    period: 'FALL 2025', role: 'Software Engineering Intern', company: 'Second Foundation AI',
    team: 'Agentic Systems', place: 'San Francisco, CA', accent: 'INTELLIGENCE',
    summary: 'Worked on the software behind an agentic AI dashboard. I built parts of the multi-agent workflow, backend APIs, and interactive views used to run and inspect business analysis.',
    points: ['Built task-planning and prompt pipelines with Python and FastAPI', 'Reduced end-to-end query latency by 35%', 'Added evaluations for latency, error rates, and output consistency'],
  },
  {
    period: 'SPRING 2026', role: 'Web Developer', company: 'Moffitt Status',
    team: 'ASUC · UC Berkeley', place: 'Berkeley, CA', accent: 'SPATIAL SYSTEMS',
    summary: 'Developed a full-stack site used by more than 1,000 Berkeley students to check library seat availability, including a pipeline that converted 2D floor plans into 3D spaces.',
    points: ['Near real-time availability data', '2D-to-3D spatial transformation pipeline', '30% faster model generation workflow'],
  },
]

const projects = [
  {
    number: '01', title: 'Nexus', label: 'KNOWLEDGE GRAPH', date: 'JAN 2026', href: 'https://github.com/andrewyzhou/nexus',
    description: 'Our team cleaned and merged more than 7,800 company records into a PostgreSQL knowledge graph. I worked on the REST API, D3.js interface, and pipelines that filled in missing company relationships.',
    impact: 'Cut manual data entry by 60%', stack: ['Python', 'PostgreSQL', 'D3.js', 'LLMs'],
  },
  {
    number: '02', title: 'Smart Sort', label: 'NEURAL ALGORITHMS', date: 'JUN 2025',
    description: 'Trained a PyTorch model to learn sorting behavior from synthetic arrays. I tested it against traditional sorting algorithms and built a small canvas demo to compare runtime and stability.',
    impact: 'Tested across multiple data distributions', stack: ['PyTorch', 'JavaScript', 'Canvas', 'ML'],
  },
]

const domains = [
  { icon: Cpu, code: '01 / COMPUTE', title: 'Close to the metal', text: 'I’m interested in computer architecture, GPU programming, performance, and what happens below the usual abstractions.' },
  { icon: Orbit, code: '02 / AEROSPACE', title: 'Reliable systems', text: 'Aerospace is interesting to me because the software has to be observable, dependable, and useful under real constraints.' },
  { icon: Zap, code: '03 / INTELLIGENCE', title: 'Practical AI', text: 'I like building the software around models: agent workflows, evaluations, data pipelines, and interfaces people can actually use.' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeExperience, setActiveExperience] = useState(0)

  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible')
    }), { threshold: 0.12 })
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Bobby Cheema home"><span>BC</span><i /></a>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a className="nav-resume" href="/Bobby_Cheema_Resume.pdf" target="_blank" onClick={closeMenu}>Résumé <ArrowUpRight size={14} /></a>
          </div>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="container hero-content">
            <div className="eyebrow"><span className="status-dot" /> UC Berkeley EECS · Berkeley, CA</div>
            <h1>I build software for<br /><em>complex systems.</em></h1>
            <p className="hero-copy">Software engineer exploring the edge of <strong>intelligence</strong>, <strong>infrastructure</strong>, and <strong>high-performance compute</strong>—from AI agents to mission operations.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowDown size={16} /></a>
              <a className="text-link" href="mailto:bobbycheema@berkeley.edu">bobbycheema@berkeley.edu <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </section>

        <section className="section manifesto" id="about">
          <div className="container">
            <div className="section-kicker" data-reveal><span>01</span> OPERATING PRINCIPLES</div>
            <div className="manifesto-grid">
              <h2 data-reveal>I like problems with<br /><em>real constraints.</em></h2>
              <div className="manifesto-copy" data-reveal>
                <p>The interesting work happens where abstractions meet reality: when latency matters, failure modes matter, and the system has to make sense under pressure.</p>
                <p>I’m an EECS student at UC Berkeley, drawn to ambitious engineering across AI, aerospace, distributed infrastructure, and the hardware-software boundary.</p>
              </div>
            </div>
            <div className="domain-grid">
              {domains.map(({ icon: Icon, code, title, text }) => (
                <article className="domain-card" key={code} data-reveal>
                  <div className="domain-top"><span>{code}</span><Icon size={22} strokeWidth={1.5} /></div>
                  <h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects" id="work">
          <div className="container">
            <div className="section-heading" data-reveal>
              <div><div className="section-kicker"><span>02</span> SELECTED WORK</div><h2>Projects I’ve <em>built.</em></h2></div>
              <p>A couple of projects I worked on outside of classes and internships.</p>
            </div>
            <div className="project-list">
              {projects.map(({ number, title, label, date, href, description, impact, stack }) => (
                <article className="project-card" key={title} data-reveal>
                  <span className="project-number">{number}</span>
                  <div className="project-info">
                    <div className="project-meta"><span className="project-label">{label}</span><span>{date}</span></div>
                    <h3>{title}</h3><p>{description}</p>
                    <div className="impact"><span>↗</span>{impact}</div>
                    <div className="stack">{stack.map(item => <span key={item}>{item}</span>)}</div>
                    {href && <a className="project-link" href={href} target="_blank" rel="noreferrer">View on GitHub <ArrowUpRight size={15} /></a>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section experience" id="experience">
          <div className="container">
            <div className="section-heading" data-reveal>
              <div><div className="section-kicker"><span>03</span> EXPERIENCE</div><h2>Built in the <em>real world.</em></h2></div>
              <p>From mission operations to model orchestration and spatial data systems.</p>
            </div>
            <div className="experience-shell" data-reveal>
              <div className="experience-tabs" role="tablist">
                {experience.map((item, index) => (
                  <button key={item.company} className={activeExperience === index ? 'active' : ''} onClick={() => setActiveExperience(index)} role="tab" aria-selected={activeExperience === index}>
                    <span>{item.period}</span><strong>{item.company}</strong><small>{item.accent}</small>
                  </button>
                ))}
              </div>
              <article className="experience-detail" key={activeExperience}>
                <div className="experience-meta"><span>{experience[activeExperience].accent}</span><span>{experience[activeExperience].place}</span></div>
                <h3>{experience[activeExperience].role}</h3>
                <h4>{experience[activeExperience].company} <i>/</i> {experience[activeExperience].team}</h4>
                <p>{experience[activeExperience].summary}</p>
                <ul>{experience[activeExperience].points.map(point => <li key={point}>{point}</li>)}</ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section toolkit">
          <div className="container toolkit-grid">
            <div data-reveal>
              <div className="section-kicker"><span>04</span> TOOLKIT</div>
              <h2>Broad range.<br /><em>Deep curiosity.</em></h2>
            </div>
            <div className="tool-groups" data-reveal>
              <div><span>LANGUAGES</span><p>Python · C / C++ · Java · TypeScript · JavaScript · SQL</p></div>
              <div><span>SYSTEMS + DATA</span><p>Linux · PostgreSQL · Docker · REST · Data pipelines · Observability</p></div>
              <div><span>AI + PRODUCT</span><p>PyTorch · NumPy · Pandas · FastAPI · React · D3.js · Canvas</p></div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container contact-content" data-reveal>
            <span className="contact-label"><i /> OPEN TO AMBITIOUS PROBLEMS</span>
            <h2>Let’s build something<br /><em>that has to work.</em></h2>
            <p>I’m always interested in meeting people thinking seriously about AI, infrastructure, aerospace, and high-performance systems.</p>
            <a className="button button-light" href="mailto:bobbycheema@berkeley.edu">Start a conversation <Mail size={17} /></a>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div><a className="brand footer-brand" href="#top"><span>BC</span><i /></a><p>Engineer, builder, student of complex systems.</p></div>
          <div className="footer-links"><a href="mailto:bobbycheema@berkeley.edu"><Mail size={16} /> Email</a><a href="https://www.linkedin.com/in/bobby-cheema" target="_blank" rel="noreferrer"><Link size={16} /> LinkedIn</a><a href="/Bobby_Cheema_Resume.pdf" target="_blank"><BookOpen size={16} /> Résumé</a></div>
          <div className="footer-note"><span>DESIGNED + BUILT WITH INTENTION</span><small>© {new Date().getFullYear()} Bobby Cheema</small></div>
        </div>
      </footer>
    </div>
  )
}

export default App
