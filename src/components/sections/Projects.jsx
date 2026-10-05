import { useState } from "react";
import { projects } from "../../data/projects.js";
import CaseStudy from "./CaseStudy.jsx";
import ProjectPreview from "./ProjectPreview.jsx";
import Marquee from "../Marquee.jsx";
import Icon from "../Icon.jsx";
import "./projects.css";

// Hybrid layout: the first project is a large featured card, the rest
// flow past in a slow auto-scrolling strip underneath.
export default function Projects() {
  // The project whose case study is open, or null when none is open.
  const [selected, setSelected] = useState(null);
  const [featured, ...others] = projects;

  return (
    <section className="section" id="projects">
      <header className="section-head">
        <h2>Featured projects</h2>
        <p>Selected work, each with the story behind it.</p>
      </header>

      <ProjectCard project={featured} number={1} variant="featured" onOpen={setSelected} />

      <div className="projects-more">
        <p className="projects-more-label">
          More projects <span>/</span> {others.length}
        </p>
        <Marquee label="More projects" speed={32} interactive>
          {others.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              number={i + 2}
              variant="compact"
              onOpen={setSelected}
            />
          ))}
        </Marquee>
      </div>

      {selected && <CaseStudy project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

function ProjectCard({ project, number, variant, onOpen }) {
  const compact = variant === "compact";

  // Cursor spotlight: save the mouse position inside the card as CSS
  // variables; the CSS draws a soft glow at that spot.
  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  // Compact cards show fewer tags so they stay the same height.
  const tech = compact ? project.tech.slice(0, 3) : project.tech;

  return (
    <article className={`project-card is-${variant}`} onMouseMove={onMouseMove}>
      <div className="project-preview">
        <ProjectPreview domain={project.domain} type={project.preview} />
      </div>

      <div className="project-body">
        <p className="project-meta">
          {String(number).padStart(2, "0")} <span>/</span> {project.year} <span>/</span> {project.role}
        </p>
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>

        <ul className="project-tech">
          {tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="project-links">
          <button type="button" className="project-open" onClick={() => onOpen(project)}>
            Case study <Icon name="arrowRight" size={16} />
          </button>
          {compact ? (
            <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`}>
              <Icon name="github" size={18} />
            </a>
          ) : (
            <>
              <a href={project.live} target="_blank" rel="noreferrer">
                Live demo <Icon name="arrowUpRight" size={14} />
              </a>
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub <Icon name="arrowUpRight" size={14} />
              </a>
            </>
          )}
        </div>
      </div>
    </article>
  );
}
