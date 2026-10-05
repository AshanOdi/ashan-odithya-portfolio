import { education, certifications } from "../../data/education.js";
import "./education.css";

export default function Education() {
  return (
    <section className="section" id="education">
      <header className="section-head">
        <h2>Education & certifications</h2>
      </header>

      <div className="edu-grid">
        <div className="edu-col">
          <h3 className="edu-label">Education</h3>
          {education.map((item) => (
            <article className="edu-card" key={item.degree}>
              <p className="edu-period">{item.period}</p>
              <h4>{item.degree}</h4>
              <p className="edu-school">{item.school}</p>
              <p className="edu-note">{item.note}</p>
            </article>
          ))}
        </div>

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
      </div>
    </section>
  );
}
