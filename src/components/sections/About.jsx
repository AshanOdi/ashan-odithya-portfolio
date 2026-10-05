import "./about.css";

const paragraph =
  "I’m a Computer Engineering graduate and Software Engineer who enjoys turning " +
  "ideas into useful products. I’ve worked across frontend, backend and cloud " +
  "technologies, mainly with React, TypeScript, Node.js and AWS. Right now, I’m " +
  "focusing on becoming a stronger full-stack engineer while exploring cloud " +
  "architecture, system design and AI-powered applications.";

const facts = [
  { icon: "📍", text: "Sri Lanka" },
  { icon: "💻", text: "Software Engineer" },
  { icon: "☁️", text: "AWS & Full-stack" },
  { icon: "🌱", text: "Always learning & building" },
  { icon: "🌍", text: "Open to remote opportunities" },
];

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="about-photo">
        {/* width/height stop the page from jumping while the image loads */}
        <img
          src="/images/ashan.webp"
          alt="Portrait of Ashan Odithya"
          width="800"
          height="1000"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="about-copy">
        <header className="section-head">
          <h2>About me</h2>
        </header>

        <p className="about-text">{paragraph}</p>

        <ul className="about-facts">
          {facts.map((fact) => (
            <li key={fact.text}>
              <span aria-hidden="true">{fact.icon}</span>
              {fact.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
