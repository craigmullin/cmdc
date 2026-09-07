type ProjectCardProps = {
  title: string
  status: string
  description: string
  technology: string
  href: string
  index: number
}

export function ProjectCard({ title, status, description, technology, href, index }: ProjectCardProps) {
  const titleWithoutPeriod = title.replace(/\.$/, '')

  return (
    <article className="project-card">
      <div className="project-card__topline">
        <p className="eyebrow">{status}</p>
        <span className="project-card__number" aria-hidden="true">0{index + 1}</span>
      </div>
      <h3>{titleWithoutPeriod}<span className="project-card__period">.</span></h3>
      <p className="project-card__description">{description}</p>
      <p className="project-card__meta">{technology}</p>
      {href ? <a className="project-card__link" href={href} target="_blank" rel="noreferrer">View project <span aria-hidden="true">↗</span></a> : <span className="project-card__pending">In development</span>}
    </article>
  )
}
