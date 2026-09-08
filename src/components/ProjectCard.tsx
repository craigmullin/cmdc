type ProjectCardProps = {
  title: string
  description: string
  technology: string
  href: string
}

export function ProjectCard({ title, description, technology, href }: ProjectCardProps) {
  const titleWithoutPeriod = title.replace(/\.$/, '')

  return (
    <article className="project-card">
      <h3>{titleWithoutPeriod}<span className="project-card__period">.</span></h3>
      <p className="project-card__description">{description}</p>
      <p className="project-card__meta">{technology}</p>
      {href ? <a className="project-card__link" href={href} target="_blank" rel="noreferrer">View project <span aria-hidden="true">↗</span></a> : <span className="project-card__pending">In development</span>}
    </article>
  )
}
