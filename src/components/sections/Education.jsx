import { education, research, awards, certifications } from "../../data/education.js";
import Icon from "../Icon.jsx";
import "./education.css";

// Left column: degree (with coursework) and research.
// Right column: certifications and awards.
// Each block only shows when its list has entries.
export default function Education() {
  return (
    <section className="section" id="education">
      <header className="section-head">
        <h2>Education & achievements</h2>
      </header>

      <div className="edu-grid">
        <div className="edu-col">
          <h3 className="edu-label">Education</h3>
          {education.map((item) => (
            <article className="edu-card" key={item.degree}>
              <p className="edu-period">{item.period}</p>
              <h4>{item.degree}</h4>
              <p className="edu-school">{item.school}</p>
              {item.note && <p className="edu-note">{item.note}</p>}
              {item.coursework && (
                <>
                  <p className="edu-sub">Relevant coursework</p>
                  <ul className="edu-tags">
                    {item.coursework.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </>
              )}
            </article>
          ))}

          {research.length > 0 && (
            <>
              <h3 className="edu-label edu-label-gap">Research</h3>
              {research.map((item) => (
                <article className="edu-card" key={item.title}>
                  <h4>{item.title}</h4>
                  <p className="edu-note">{item.summary}</p>
                  <ul className="edu-points">
                    {item.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  <ul className="edu-tags">
                    {item.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </>
          )}
        </div>

        <div className="edu-col">
          {certifications.length > 0 && (
            <>
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
            </>
          )}

          {awards.length > 0 && (
            <>
              <h3 className="edu-label edu-label-gap">Awards & competitions</h3>
              <ul className="cert-list">
                {awards.map((award) => (
                  <li key={award.name} className="cert-item award-item">
                    <span className="award-icon">
                      <Icon name="trophy" size={18} />
                    </span>
                    <div>
                      <h4>{award.name}</h4>
                      <p>{award.team}</p>
                    </div>
                    <span className="award-result">{award.result}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
