import { useEffect, useRef, useState } from "react";
import { projects } from "../../data/projects.js";
import CaseStudy from "./CaseStudy.jsx";
import ProjectPreview from "./ProjectPreview.jsx";
import Icon from "../Icon.jsx";
import "./projects.css";

// The pinned effect runs only on wide screens for people who allow motion.
// Everyone else gets a normal sideways-swipe row (handled in CSS).
const PIN_QUERY = "(min-width: 901px) and (prefers-reduced-motion: no-preference)";

export default function Projects() {
  // The project whose case study is open, or null when none is open.
  const [selected, setSelected] = useState(null);
  const [pinned, setPinned] = useState(false);
  const [current, setCurrent] = useState(1); // card number shown in the counter

  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  // Turn the pinned mode on/off when the screen size or motion setting changes.
  useEffect(() => {
    const media = window.matchMedia(PIN_QUERY);
    const update = () => setPinned(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  // The scroll-driven part: vertical scroll distance becomes sideways movement.
  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!pinned) {
      section.style.height = "";
      track.style.transform = "";
      return;
    }

    let distance = 0; // how far (px) the track has to move sideways
    let frame = 0;

    // 1. Measure: make the section tall enough that scrolling through it
    //    takes exactly as long as sliding the whole track across.
    const measure = () => {
      distance = Math.max(0, track.scrollWidth - track.clientWidth);
      section.style.height = `${distance + window.innerHeight}px`;
      onScroll();
    };

    // 2. On scroll: how far through the section are we, from 0 to 1?
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const top = section.getBoundingClientRect().top;
        const progress = distance ? Math.min(1, Math.max(0, -top / distance)) : 0;
        track.style.transform = `translateX(${-progress * distance}px)`;
        section.style.setProperty("--progress", progress);
        setCurrent(Math.round(progress * (projects.length - 1)) + 1);
      });
    };

    // Re-measure if the cards change size (fonts loading, window resize).
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    measure();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      section.style.height = "";
      track.style.transform = "";
    };
  }, [pinned]);

  // Keyboard users: when Tab moves focus to a card that is off screen,
  // scroll the page so that card slides into view.
  const onFocus = (e) => {
    if (!pinned) return;
    const card = e.target.closest(".project-card");
    if (!card) return;
    const section = sectionRef.current;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const offset = card.offsetLeft - trackRef.current.offsetLeft - 40;
    window.scrollTo({ top: sectionTop + Math.max(0, offset), behavior: "instant" });
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={pinned ? "projects is-pinned" : "projects"}
    >
      <div className="projects-sticky">
        <header className="projects-head">
          <div>
            <h2>Featured projects</h2>
            <p>Selected work, each with the story behind it.</p>
          </div>
          <p className="projects-count" aria-hidden="true">
            <span>{String(current).padStart(2, "0")}</span> / {String(projects.length).padStart(2, "0")}
          </p>
        </header>

        <ul className="projects-track" ref={trackRef} onFocus={onFocus}>
          {projects.map((project, i) => (
            <li key={project.slug}>
              <ProjectCard
                project={project}
                number={i + 1}
                onOpen={() => setSelected(project)}
              />
            </li>
          ))}
        </ul>

        <div className="projects-progress" aria-hidden="true">
          <span />
        </div>
      </div>

      {selected && <CaseStudy project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

function ProjectCard({ project, number, onOpen }) {
  // Cursor spotlight: save the mouse position inside the card as CSS
  // variables; the CSS draws a soft glow at that spot.
  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <article className="project-card" onMouseMove={onMouseMove}>
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
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="project-links">
          <button type="button" className="project-open" onClick={onOpen}>
            Case study <Icon name="arrowRight" size={16} />
          </button>
          <a href={project.live} target="_blank" rel="noreferrer">
            Live <Icon name="arrowUpRight" size={14} />
          </a>
          <a href={project.github} target="_blank" rel="noreferrer">
            GitHub <Icon name="arrowUpRight" size={14} />
          </a>
        </div>
      </div>
    </article>
  );
}
