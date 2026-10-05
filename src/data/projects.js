// Featured projects, shown in the horizontal scrolling section.
// `domain` is shown in the mini browser bar of the preview, and `preview`
// picks the mock UI drawn inside it: dashboard, board, chat, list, terminal.
// TODO: real data - every project below is MOCK content. Replace the text,
// links and numbers with your real projects, and later swap the mock
// preview for a real screenshot.
export const projects = [
  {
    slug: "cloudledger",
    title: "CloudLedger",
    domain: "cloudledger.app",
    preview: "dashboard",
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
    domain: "devpulse.dev",
    preview: "board",
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
    domain: "askdocs.ai",
    preview: "chat",
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
  {
    slug: "shopflow",
    title: "ShopFlow",
    domain: "shopflow.store",
    preview: "list",
    year: "2025",
    role: "Full-stack engineer",
    summary:
      "An online store with a fast product catalogue, secure checkout and " +
      "an admin panel for orders and stock.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    live: "https://example.com/shopflow",
    github: "https://github.com/AshanOdi/shopflow",
    caseStudy: {
      problem: "A local shop sold only through social media and lost track of orders.",
      role: "Built the storefront, checkout and admin panel end to end.",
      decisions: [
        "Used Stripe Checkout so card data never touches our servers.",
        "Cached product pages so the catalogue loads instantly.",
      ],
      challenges: ["Keeping stock correct when two people buy the last item at once."],
      results: ["Online orders grew to about 40% of total sales in three months."],
    },
  },
  {
    slug: "infrakit",
    title: "InfraKit",
    domain: "github.com/AshanOdi/infrakit",
    preview: "terminal",
    year: "2025",
    role: "Open source",
    summary:
      "Reusable AWS CDK templates to launch a secure API, database and CI/CD " +
      "pipeline in minutes.",
    tech: ["AWS CDK", "TypeScript", "GitHub Actions", "IAM"],
    live: "https://example.com/infrakit",
    github: "https://github.com/AshanOdi/infrakit",
    caseStudy: {
      problem: "Every new project repeated the same days of AWS setup by hand.",
      role: "Designed and maintain the templates and their documentation.",
      decisions: [
        "Least-privilege IAM roles by default for every template.",
        "Everything as code, so environments can be rebuilt from scratch.",
      ],
      challenges: ["Keeping templates simple while still covering real needs."],
      results: ["New environment setup went from ~2 days to under 30 minutes."],
    },
  },
  {
    slug: "taskpilot",
    title: "TaskPilot",
    domain: "taskpilot.io",
    preview: "board",
    year: "2024",
    role: "Full-stack engineer",
    summary:
      "A real-time task board where updates appear instantly for the whole " +
      "team, with comments and due-date reminders.",
    tech: ["React", "WebSockets", "Node.js", "Redis"],
    live: "https://example.com/taskpilot",
    github: "https://github.com/AshanOdi/taskpilot",
    caseStudy: {
      problem: "Teams kept refreshing the page to see each other's changes.",
      role: "Built the real-time sync layer and most of the UI.",
      decisions: [
        "WebSockets with Redis pub/sub so several servers can share updates.",
        "Optimistic UI so moves feel instant, then confirm with the server.",
      ],
      challenges: ["Resolving conflicts when two people edit the same card."],
      results: ["Updates reach every open board in under 200 ms."],
    },
  },
  {
    slug: "fitlog",
    title: "FitLog",
    domain: "fitlog.app",
    preview: "dashboard",
    year: "2024",
    role: "Solo project",
    summary:
      "A workout tracker that works offline as an installable web app and " +
      "syncs when you are back online.",
    tech: ["React", "PWA", "IndexedDB", "Charts"],
    live: "https://example.com/fitlog",
    github: "https://github.com/AshanOdi/fitlog",
    caseStudy: {
      problem: "Gyms often have weak signal, so online-only apps lose workouts.",
      role: "Designed and built the whole app.",
      decisions: [
        "Stored workouts locally in IndexedDB first, then synced in the background.",
        "Made it a PWA so it installs like a native app without an app store.",
      ],
      challenges: ["Merging offline edits made on two devices."],
      results: ["Zero lost workouts across three months of daily use."],
    },
  },
  {
    slug: "deploybot",
    title: "DeployBot",
    domain: "slack.com/apps/deploybot",
    preview: "chat",
    year: "2023",
    role: "Internal tool",
    summary:
      "A Slack bot that runs deploys, shows build status and rolls back " +
      "with one command.",
    tech: ["Node.js", "Slack API", "AWS Lambda", "GitHub Actions"],
    live: "https://example.com/deploybot",
    github: "https://github.com/AshanOdi/deploybot",
    caseStudy: {
      problem: "Only two people knew how to deploy, which slowed every release.",
      role: "Built the bot and wrote the team guide for using it.",
      decisions: [
        "Ran the bot on Lambda so it costs nothing between commands.",
        "Required a confirm step before production deploys.",
      ],
      challenges: ["Slack's 3-second reply limit; solved with a quick ack and a follow-up message."],
      results: ["Anyone on the team can deploy; releases went from weekly to daily."],
    },
  },
];
