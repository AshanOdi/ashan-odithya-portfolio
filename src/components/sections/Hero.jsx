import "./hero.css";

// All hero text lives here, so it is easy to edit in one place.
// TODO: replace the placeholder headline and intro with real details.
const content = {
  name: "Ashan Odithya",
  role: "Software Engineer",
  headlineStart: "I build software that is",
  headlineAccent: "fast, reliable",
  headlineEnd: "and easy to use.",
  intro:
    "From clean APIs to polished interfaces, I care about the whole journey: " +
    "the first commit, the code review, and the product people actually use.",
};

export default function Hero() {
  return (
    <section className="section hero" id="hero">
      <p className="hero-eyebrow">
        {content.name} <span aria-hidden="true">/</span> {content.role}
      </p>

      <h1 className="hero-title">
        {content.headlineStart} <span className="hero-accent">{content.headlineAccent}</span>{" "}
        {content.headlineEnd}
      </h1>

      <p className="hero-intro">{content.intro}</p>

      <div className="hero-actions">
        <a className="btn btn-primary" href="#projects">View projects</a>
        <a className="btn btn-ghost" href="#contact">Contact me</a>
      </div>
    </section>
  );
}
