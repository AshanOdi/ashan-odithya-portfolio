import "./skills.css";

// Skills grouped by category, matching the "Technical skills" on my CV
// (plus Next.js and Spring Boot, used in Lanka Card Deals and Forge).
// `core: true` marks the main skills, which get a stronger style.
const groups = [
  {
    title: "Languages",
    skills: [
      { name: "TypeScript", core: true },
      { name: "JavaScript", core: true },
      { name: "Java" },
      { name: "Python" },
      { name: "C++" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", core: true },
      { name: "Next.js" },
      { name: "Redux Toolkit" },
      { name: "Tailwind CSS" },
      { name: "Material UI" },
      { name: "Ant Design" },
      { name: "HTML5 & CSS3" },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", core: true },
      { name: "Express.js" },
      { name: "REST APIs" },
      { name: "Serverless" },
      { name: "Microservices" },
      { name: "JWT & OAuth 2.0" },
      { name: "OpenAPI / Swagger" },
      { name: "Spring Boot" },
    ],
  },
  {
    title: "AWS",
    skills: [
      { name: "Lambda", core: true },
      { name: "API Gateway" },
      { name: "DynamoDB" },
      { name: "S3" },
      { name: "Cognito" },
      { name: "CloudWatch" },
      { name: "VPC" },
      { name: "Route 53" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "DynamoDB" },
    ],
  },
  {
    title: "DevOps, testing & tools",
    skills: [
      { name: "Terraform", core: true },
      { name: "Docker" },
      { name: "CI/CD" },
      { name: "GitHub Actions" },
      { name: "Playwright" },
      { name: "Unit & integration testing" },
      { name: "Git, GitHub & Bitbucket" },
      { name: "Jira" },
      { name: "Agile / Scrum" },
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
