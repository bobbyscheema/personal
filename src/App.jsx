import { useEffect, useRef, useState } from 'react'
import {
  ArrowDown, ArrowUpRight, BookOpen, Boxes, Braces, Cpu,
  Link, Mail, Menu, Orbit, X, Zap,
} from 'lucide-react'

const experience = [
  {
    period: 'SUMMER 2026', role: 'Software Engineering Intern', company: 'NASA Ames Research Center',
    team: 'Multi-Mission Operations Center', place: 'Mountain View, CA', accent: 'ORBITAL INFRA',
    summary: 'Building the observability layer for mission infrastructure—turning real-time health and performance signals from 50+ hosts and 300+ service checks into one operational view.',
    points: ['Centralized monitoring across mission-critical infrastructure', 'Aggregation and alert pipelines for faster anomaly detection', 'Interactive views for uptime, latency, availability, and alert history'],
  },
  {
    period: 'FALL 2025', role: 'Software Engineering Intern', company: 'Second Foundation AI',
    team: 'Agentic Systems', place: 'San Francisco, CA', accent: 'INTELLIGENCE',
    summary: 'Built an agentic AI workspace that orchestrates autonomous models through multi-step analysis and turns complex business questions into real-time, explorable answers.',
    points: ['100+ automated insights generated per session', '35% lower end-to-end query latency', 'Evaluation pipelines measuring quality, reliability, and cost'],
  },
  {
    period: 'SPRING 2026', role: 'Web Developer', company: 'Moffitt Status',
    team: 'ASUC · UC Berkeley', place: 'Berkeley, CA', accent: 'SPATIAL SYSTEMS',
    summary: 'Developed a full-stack product for 1,000+ Berkeley students, transforming 2D library plans into fast, queryable 3D spaces for live seat availability.',
    points: ['Near real-time availability data', '2D-to-3D spatial transformation pipeline', '30% faster model generation workflow'],
  },
]

const projects = [
  {
    number: '01', title: 'Nexus', label: 'KNOWLEDGE GRAPH',
    description: 'A relationship intelligence engine built from 7,800+ fragmented company records. Nexus normalizes noisy data into a graph you can actually explore—and uses LLMs to uncover missing connections.',
    impact: '60% less manual data entry', stack: ['Python', 'PostgreSQL', 'D3.js', 'LLMs'], icon: Boxes,
  },
  {
    number: '02', title: 'Smart Sort', label: 'NEURAL ALGORITHMS',
    description: 'An experiment in teaching a neural network to sort. I trained a PyTorch model, challenged it across distributions, and built a live canvas to compare learned behavior with classic algorithms.',
    impact: 'From algorithm to learned behavior', stack: ['PyTorch', 'JavaScript', 'Canvas', 'ML'], icon: Braces,
  },
]

const domains = [
  { icon: Cpu, code: '01 / COMPUTE', title: 'Close to the metal', text: 'Computer architecture, GPU programming, performance, and the details hidden beneath abstractions.' },
  { icon: Orbit, code: '02 / AEROSPACE', title: 'Systems that matter', text: 'Mission operations, resilient infrastructure, and software designed for high-consequence environments.' },
  { icon: Zap, code: '03 / INTELLIGENCE', title: 'AI with a job to do', text: 'Agents, learned systems, and evaluation—not as demos, but as tools for reasoning through hard problems.' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeExperience, setActiveExperience] = useState(0)
  const heroRef = useRef(null)

  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible')
    }), { threshold: 0.12 })
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onMove = (event) => {
      if (!heroRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      const x = (event.clientX / window.innerWidth - 0.5) * 10
      const y = (event.clientY / window.innerHeight - 0.5) * 8
      heroRef.current.style.setProperty('--px', `${x}px`)
      heroRef.current.style.setProperty('--py', `${y}px`)
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
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
        <section className="hero" id="top" ref={heroRef}>
          <div className="hero-image" aria-hidden="true" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="container hero-content">
            <div className="eyebrow"><span className="status-dot" /> UC Berkeley EECS · Berkeley, CA</div>
            <h1>I build software for<br /><em>complex systems.</em></h1>
            <p className="hero-copy">Software engineer exploring the edge of <strong>intelligence</strong>, <strong>infrastructure</strong>, and <strong>high-performance compute</strong>—from AI agents to mission operations.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowDown size={16} /></a>
              <a className="text-link" href="mailto:bobbycheema@berkeley.edu">bobbycheema@berkeley.edu <ArrowUpRight size={15} /></a>
            </div>
          </div>
          <div className="hero-readout" aria-hidden="true">
            <span>SYS / PORTFOLIO</span><span>37.8715° N</span><span>122.2730° W</span>
          </div>
        </section>

        <section className="signal-strip" aria-label="Areas of interest">
          <div className="container signal-inner">
            <span>AI SYSTEMS</span><i /><span>GPU + LOW-LEVEL</span><i /><span>AEROSPACE</span><i /><span>INFRASTRUCTURE</span><i /><span>HARD PROBLEMS</span>
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
              <div><div className="section-kicker"><span>02</span> SELECTED WORK</div><h2>Things I’ve <em>shipped.</em></h2></div>
              <p>Products that turn messy information and unconventional ideas into useful systems.</p>
            </div>
            <div className="project-list">
              {projects.map(({ number, title, label, description, impact, stack, icon: Icon }) => (
                <article className="project-card" key={title} data-reveal>
                  <div className="project-visual">
                    <div className={`project-art art-${number}`}>
                      <Icon size={42} strokeWidth={1} />
                      <div className="project-orbits"><i /><i /><i /></div>
                      <span>{number}</span>
                    </div>
                  </div>
                  <div className="project-info">
                    <span className="project-label">{label}</span>
                    <h3>{title}</h3><p>{description}</p>
                    <div className="impact"><span>↗</span>{impact}</div>
                    <div className="stack">{stack.map(item => <span key={item}>{item}</span>)}</div>
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
          <div className="contact-grid" aria-hidden="true" />
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
