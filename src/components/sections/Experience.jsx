import { experience } from "../../data/experience.js";
import "./experience.css";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <header className="section-head">
        <h2>Experience</h2>
        <p>Where I’ve worked and what changed because of it.</p>
      </header>

      {/* <ol> because the order matters: newest job first. */}
      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.role + job.company} className={job.current ? "tl-item is-current" : "tl-item"}>
            <span className="tl-dot" aria-hidden="true" />

            <p className="tl-period">
              {job.period} <span>/</span> {job.location}
            </p>

            <div className="tl-card">
              <h3>
                {job.role}{" "}
                <a href={job.link} target="_blank" rel="noreferrer">@ {job.company}</a>
              </h3>

              <ul className="tl-achievements">
                {job.achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <ul className="tl-tech">
                {job.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
