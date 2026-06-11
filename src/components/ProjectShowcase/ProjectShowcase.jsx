import './ProjectShowcase.css'

export default function ProjectShowcase({ title, description, children }) {
  return (
    <article className="project-showcase">
      <header className="project-showcase-header">
        <h2 className="project-showcase-title">{title}</h2>
        <p className="project-showcase-description">{description}</p>
      </header>
      <div className="project-showcase-content">{children}</div>
    </article>
  )
}
