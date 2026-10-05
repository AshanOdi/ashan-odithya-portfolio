// Featured projects. The first project is shown as the large "hero" card.
// TODO: real data - every project below is MOCK content. Replace the text,
// links and numbers with your real projects (3 to 5 is ideal).
export const projects = [
  {
    slug: "cloudledger",
    title: "CloudLedger",
    year: "2026",
    role: "Full-stack engineer",
    summary:
      "A serverless expense tracker for small teams, with receipt uploads, " +
      "monthly reports and role-based access.",
    tech: ["React", "TypeScript", "AWS Lambda", "DynamoDB", "S3"],
    live: "https://example.com/cloudledger",
    github: "https://github.com/AshanOdi/cloudledger",
    caseStudy: {
      problem:
        "Small teams tracked expenses in shared spreadsheets. Receipts got " +
        "lost and month-end reports took hours to prepare by hand.",
      role:
        "Designed and built the whole product alone: UI, API, data model " +
        "and the AWS infrastructure.",
      decisions: [
        "Went serverless (Lambda + API Gateway) so the app costs almost nothing when idle.",
        "Used DynamoDB single-table design to keep reads fast and predictable.",
        "Uploaded receipts straight to S3 with pre-signed URLs, so files never pass through the API.",
      ],
      challenges: [
        "Keeping report queries cheap in DynamoDB; solved with a monthly summary item updated on every write.",
        "Handling large image uploads on slow mobile networks.",
      ],
      results: [
        "Month-end report time dropped from ~3 hours to under 5 minutes.",
        "Runs for under $5 per month on AWS.",
      ],
    },
  },
  {
    slug: "devpulse",
    title: "DevPulse",
    year: "2025",
    role: "Frontend lead",
    summary:
      "A dashboard that turns GitHub activity into simple team health " +
      "metrics: review time, PR size and deploy frequency.",
    tech: ["React", "Node.js", "PostgreSQL", "GitHub API"],
    live: "https://example.com/devpulse",
    github: "https://github.com/AshanOdi/devpulse",
    caseStudy: {
      problem:
        "Engineering leads had no quick way to see where pull requests got stuck.",
      role:
        "Led the frontend, built the charts and worked with one backend engineer on the API.",
      decisions: [
        "Synced GitHub data on a schedule into PostgreSQL instead of calling the API on every page load.",
        "Kept charts lightweight with plain SVG instead of a heavy chart library.",
      ],
      challenges: [
        "Staying inside GitHub API rate limits for large organisations.",
      ],
      results: [
        "Average PR review time on the pilot team fell by 30% in two months.",
      ],
    },
  },
  {
    slug: "askdocs",
    title: "AskDocs",
    year: "2025",
    role: "Solo project",
    summary:
      "Upload PDFs and ask questions about them in plain language. Answers " +
      "include the exact page they came from.",
    tech: ["Node.js", "LLM API", "Vector search", "AWS S3"],
    live: "https://example.com/askdocs",
    github: "https://github.com/AshanOdi/askdocs",
    caseStudy: {
      problem:
        "Finding one answer inside long policy documents took too long.",
      role: "Built it end to end as a learning project in AI engineering.",
      decisions: [
        "Split documents into overlapping chunks and stored embeddings for search.",
        "Always returned page references so users can check every answer.",
      ],
      challenges: [
        "Reducing wrong answers; added a rule to say “not found” when sources are weak.",
      ],
      results: [
        "Answers typical questions in under 3 seconds with a source link.",
      ],
    },
  },
];
