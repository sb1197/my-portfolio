import { useState } from 'react';
import '../styles/ProjectsSection.css';

import SectionShell from './SectionShell';

function ProjectsSection({ projects }) {
  const [openProjects, setOpenProjects] = useState(new Set());

  const toggleProject = (projectKey) => {
    setOpenProjects((prev) => {
      const next = new Set(prev);
      if (next.has(projectKey)) {
        next.delete(projectKey);
      } else {
        next.add(projectKey);
      }
      return next;
    });
  };

  return (
    <SectionShell id="projects" title="Projects">
      <div className="project-list">
        {projects.map((project) => {
          const projectKey = `${project.name}-${project.period}`;
          const isOpen = openProjects.has(projectKey);

          return (
            <article key={projectKey} className={`project-card ${isOpen ? 'open' : 'collapsed'}`}>
              <button
                type="button"
                className="project-summary"
                aria-expanded={isOpen}
                onClick={() => toggleProject(projectKey)}
              >
                <div className="project-heading">
                  <h2>{project.name}</h2>
                  <span className="project-toggle">{isOpen ? 'Hide' : 'Show'}</span>
                </div>
              </button>

              {isOpen && (
                <div>
                  <div className="project-info">
                    <p className="project-role">{project.role}</p>
                    <p className="project-period">{project.period}</p>
                  </div>
                  {Array.isArray(project.description) ? (
                    <ul className="summary-list">
                      {project.description.map((line, i) => (
                        <li key={i}>
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>{project.description}</p>
                  )}
                </div>
              )}
              <ul className="skill-tag-list">
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}

export default ProjectsSection;
