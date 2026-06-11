import PageBody from "../PageBody/PageBody";
import ProjectShowcase from "../ProjectShowcase/ProjectShowcase";
import { projects } from "../../data/projects";

export default function ProjectsBody() {
  return (
    <PageBody>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {projects.map((project) => (
          <ProjectShowcase
            key={project.id}
            title={project.title}
            description={project.description}
          >
            {project.content}
          </ProjectShowcase>
        ))}
      </div>
    </PageBody>
  );
}
