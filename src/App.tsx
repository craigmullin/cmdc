import { Button } from './components/Button'
import { Header } from './components/Header'
import { ProjectCard } from './components/ProjectCard'
import { projects, site } from './data/site'
import './styles/global.css'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="page-shell" id="top">
        <Header />
        <main id="main">
          <section className="hero" aria-labelledby="hero-title">
            <h1 id="hero-title">Craig<br /><em>Mullin</em><span>.</span></h1>
            <div className="hero__statement">
              <h2>Software engineer, systems thinker, and design-minded builder.</h2>
              <p>I make practical software with clear structure, humane interfaces, and enough personality to be remembered.</p>
              <div className="hero__actions">
                <Button href="#work">View my work</Button>
                {site.resumeUrl ? <Button href={site.resumeUrl} variant="secondary">View résumé</Button> : <Button href="#about" variant="secondary">About me</Button>}
              </div>
            </div>
          </section>

          <section className="section" id="work" aria-labelledby="work-title">
            <div className="section-heading">
              <h2 id="work-title">Things made<br />with intention.</h2>
            </div>
            <div className="project-grid">
              {projects.map((project) => <ProjectCard key={project.title} {...project} />)}
            </div>
          </section>

          <section className="section about" id="about" aria-labelledby="about-title">
            <div className="section-heading">
              <h2 id="about-title">Engineering with<br /><em>judgment.</em></h2>
            </div>
            <div className="about__copy">
              <p>I am a software engineer with a background in Java, cloud applications, and enterprise systems. I am most interested in the space where engineering, product judgment, and visual clarity overlap.</p>
              <p>I use AI as a working partner for research, iteration, and implementation—not as a substitute for understanding the work.</p>
              <Button href={site.resumeUrl} variant="secondary">Download résumé</Button>
              <p className="skills">Java · Spring · AWS · React · TypeScript · Product thinking · AI-assisted development</p>
            </div>
          </section>

          <section className="section resume" id="resume" aria-labelledby="resume-title">
            <div>
              <h2 id="resume-title">Experience,<br /><em>in detail.</em></h2>
            </div>
            <div className="resume__copy">
              <p>Senior full-stack engineer focused on enterprise integration, cloud applications, and thoughtful product development.</p>
              <p>My résumé includes my full professional experience, independent projects, technical skills, and education.</p>
              <div className="resume__actions">
                <Button href={site.resumeUrl}>Download résumé</Button>
                <Button href="#contact" variant="secondary">Contact me</Button>
              </div>
            </div>
          </section>

          <aside className="currently" aria-labelledby="currently-title">
            <h2 id="currently-title">Currently</h2>
            <p>Building this studio site, expanding DartStat and Ledger, and developing WordFlare.</p>
          </aside>
        </main>

        <footer id="contact">
          <div className="contact__intro">
            <h2>Let's talk.</h2>
            <p>I'm interested in senior software engineering, product-minded development, and thoughtful uses of AI.</p>
            <a className="contact__email" href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div className="footer__links" aria-label="Contact links">
            <a href={`mailto:${site.email}`}>Email Craig <span aria-hidden="true">↗</span></a>
            <a href={site.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            <a href={site.githubUrl} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          </div>
          <div className="footer__base">
            <span>© {new Date().getFullYear()} Craig Mullin</span>
            <span className="footer__aside">Quietly opinionated. Occasionally in orange.</span>
            <span>Alpha 0.3</span>
          </div>
        </footer>
      </div>
    </>
  )
}
