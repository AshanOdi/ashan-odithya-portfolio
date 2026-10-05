import Icon from "../Icon.jsx";
import "./now.css";

// What I'm focused on right now. Update this every few months and change
// the date, so visitors can see the site is alive.
const updated = "October 2026";

const focus = [
  {
    icon: "cloud",
    title: "AWS & Cloud Architecture",
    text: "Learning AWS deeper: IAM, networking, serverless, infrastructure and cloud architecture.",
  },
  {
    icon: "server",
    title: "Backend & System Design",
    text: "Improving Node.js backend development, APIs, databases and scalable system design.",
  },
  {
    icon: "cpu",
    title: "AI / ML Engineering",
    text: "Exploring practical AI/ML applications and how to integrate AI into real-world software products.",
  },
];

export default function Now() {
  return (
    <section className="section" id="now">
      <header className="section-head">
        <h2>Now</h2>
        <p className="now-updated">
          <span className="now-dot" aria-hidden="true" /> Updated {updated}
        </p>
      </header>

      <div className="now-grid">
        {focus.map((item) => (
          <article className="now-card" key={item.title}>
            <span className="now-icon"><Icon name={item.icon} size={22} /></span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
