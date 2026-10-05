import "./skills.css";

// Skills grouped by category. `core: true` marks the main skills,
// which get a stronger style.
// TODO: real data - review this list and remove anything you don't use.
const groups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", core: true },
      { name: "TypeScript", core: true },
      { name: "JavaScript" },
      { name: "HTML & CSS" },
      { name: "Vite" },
      { name: "Responsive UI" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", core: true },
      { name: "Express" },
      { name: "REST APIs" },
      { name: "Authentication" },
      { name: "System design" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", core: true },
      { name: "Lambda" },
      { name: "S3" },
      { name: "EC2" },
      { name: "IAM" },
      { name: "Docker" },
      { name: "GitHub Actions" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "DynamoDB" },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { name: "Python" },
      { name: "LLM APIs" },
      { name: "Prompt design" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git" },
      { name: "Postman" },
      { name: "VS Code" },
      { name: "Linux" },
      { name: "Jira" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <header className="section-head">
        <h2>Tech stack</h2>
        <p>The tools I use to take a product from idea to production.</p>
      </header>

      <div className="skills-grid">
        {groups.map((group, i) => (
          <article className="skill-card" key={group.title}>
            <div className="skill-card-head">
              {/* 01, 02, 03... padStart adds the leading zero */}
              <span className="skill-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{group.title}</h3>
            </div>
            <ul className="skill-tags">
              {group.skills.map((skill) => (
                <li key={skill.name} className={skill.core ? "is-core" : undefined}>
                  {skill.name}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
