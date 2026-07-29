import SectionShell from './SectionShell';

function ProjectsSection({ projects }) {
  return (
    <SectionShell title="Projects">
      <div className="project-list">
        {projects.map((project) => (
          <article key={`${project.name}-${project.period}`} className="project-card">
            <div className="project-heading">
              <h4>{project.name}</h4>
              <p className="project-role">{project.role}</p>
              <p className="project-period">{project.period}</p>
            </div>
            <p>{project.description}</p>
            <ul className="tag-list">
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

export default ProjectsSection;
