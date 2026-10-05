import { useState } from "react";
import { projects } from "../../data/projects.js";
import CaseStudy from "./CaseStudy.jsx";
import "./projects.css";

export default function Projects() {
  // The project whose case study is open, or null when none is open.
  const [selected, setSelected] = useState(null);

  return (
    <section className="section" id="projects">
      <header className="section-head">
        <h2>Featured projects</h2>
        <p>Selected work, each with the story behind it.</p>
      </header>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            featured={i === 0}
            onOpen={() => setSelected(project)}
          />
        ))}
      </div>

      {selected && <CaseStudy project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

function ProjectCard({ project, featured, onOpen }) {
  return (
    <article className={featured ? "project-card is-featured" : "project-card"}>
      {/* Preview area. TODO: real data - swap for a screenshot when ready. */}
      <div className="project-preview" aria-hidden="true">
        <span className="project-preview-title">{project.title}</span>
      </div>

      <div className="project-body">
        <p className="project-meta">
          {project.year} <span>/</span> {project.role}
        </p>
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>

        <ul className="project-tech">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="project-links">
          <button type="button" className="project-open" onClick={onOpen}>
            Read case study →
          </button>
          <a href={project.live} target="_blank" rel="noreferrer">Live demo ↗</a>
          <a href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </div>
    </article>
  );
}
