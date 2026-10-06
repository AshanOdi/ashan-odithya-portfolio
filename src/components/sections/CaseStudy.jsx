import { useEffect, useRef } from "react";
import Icon from "../Icon.jsx";
import "./case-study.css";

// Full project story shown in a native <dialog>. The browser gives us
// the dark backdrop, Escape-to-close and focus handling for free.
export default function CaseStudy({ project, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    // Guard: React StrictMode runs effects twice in development.
    if (!dialog.open) dialog.showModal();

    // Stop the page behind the dialog from scrolling while it is open.
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = oldOverflow;
    };
  }, []);

  // Clicking the dark backdrop (outside the content box) closes the dialog.
  const onDialogClick = (e) => {
    if (e.target === dialogRef.current) dialogRef.current.close();
  };

  const { caseStudy } = project;

  return (
    <dialog
      ref={dialogRef}
      className="case-study"
      aria-labelledby="case-study-title"
      onClose={onClose}
      onClick={onDialogClick}
    >
      <div className="cs-inner">
        <button
          type="button"
          className="cs-close"
          aria-label="Close case study"
          onClick={() => dialogRef.current.close()}
        >
          <Icon name="close" size={18} />
        </button>

        <p className="cs-meta">
          Case study <span>/</span> {project.year} <span>/</span> {project.role}
          {project.company && <> @ {project.company}</>}
        </p>
        <h2 id="case-study-title">{project.title}</h2>
        <p className="cs-summary">{project.summary}</p>

        <ul className="cs-tech">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        {/* Real screenshots, when the project has them. */}
        {project.gallery && (
          <div className="cs-gallery">
            {project.gallery.map((shot) => (
              <figure key={shot.src}>
                <img src={shot.src} alt={shot.caption} width="1440" height="900" loading="lazy" />
                <figcaption>{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
        )}

        <div className="cs-sections">
          <Block number="01" title="The problem"><p>{caseStudy.problem}</p></Block>
          <Block number="02" title="My role"><p>{caseStudy.role}</p></Block>
          <Block number="03" title="Key decisions"><List items={caseStudy.decisions} /></Block>
          <Block number="04" title="Challenges"><List items={caseStudy.challenges} /></Block>
          <Block number="05" title="Results"><List items={caseStudy.results} /></Block>
        </div>

        <div className="cs-links">
          {project.live && (
            <a className="btn btn-primary" href={project.live} target="_blank" rel="noreferrer">
              Live demo ↗
            </a>
          )}
          <a
            className={project.live ? "btn btn-ghost" : "btn btn-primary"}
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            {project.githubLabel ?? "GitHub"} ↗
          </a>
        </div>
      </div>
    </dialog>
  );
}

function Block({ number, title, children }) {
  return (
    <section className="cs-block">
      <h3><span>{number}</span>{title}</h3>
      {children}
    </section>
  );
}

function List({ items }) {
  return (
    <ul className="cs-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
