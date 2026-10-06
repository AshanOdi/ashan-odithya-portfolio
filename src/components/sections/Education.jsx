import { education, certifications } from "../../data/education.js";
import "./education.css";

export default function Education() {
  // The certifications column only shows once there is at least one.
  const hasCerts = certifications.length > 0;

  return (
    <section className="section" id="education">
      <header className="section-head">
        <h2>{hasCerts ? "Education & certifications" : "Education"}</h2>
      </header>

      <div className={hasCerts ? "edu-grid" : "edu-grid is-single"}>
        <div className="edu-col">
          {/* With only one column, the section heading already says it. */}
          {hasCerts && <h3 className="edu-label">Education</h3>}
          {education.map((item) => (
            <article className="edu-card" key={item.degree}>
              <p className="edu-period">{item.period}</p>
              <h4>{item.degree}</h4>
              <p className="edu-school">{item.school}</p>
              {item.note && <p className="edu-note">{item.note}</p>}
            </article>
          ))}
        </div>

        {hasCerts && (
          <div className="edu-col">
            <h3 className="edu-label">Certifications</h3>
            <ul className="cert-list">
              {certifications.map((cert) => (
                <li key={cert.name} className="cert-item">
                  <div>
                    <h4>{cert.name}</h4>
                    <p>{cert.issuer}</p>
                  </div>
                  {/* Only link when there is a credential to show. */}
                  {cert.link ? (
                    <a href={cert.link} target="_blank" rel="noreferrer" className="cert-year">
                      {cert.year} ↗
                    </a>
                  ) : (
                    <span className="cert-year">{cert.year}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
