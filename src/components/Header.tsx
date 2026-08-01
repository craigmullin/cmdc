import { site } from '../data/site'

export function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Craig Mullin, home">C<span>.</span></a>
      <nav aria-label="Primary navigation">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        {site.resumeUrl && <a href={site.resumeUrl}>Résumé</a>}
      </nav>
    </header>
  )
}
