// Featured projects, shown in the horizontal scrolling section.
// `domain` is shown in the mini browser bar of the preview, and `preview`
// picks the mock UI drawn inside it: dashboard, board, chat, list, terminal.
// `image` (optional) shows a real screenshot instead of the mock UI.
// TODO: real data - every project except the Wellness portal is still MOCK
// content. Replace them with your real projects.
export const projects = [
  // REAL project (from ~/ash-personal/Wellness-App/README.md).
  {
    slug: "wellness-portal",
    title: "Wellness Allowance Portal",
    domain: "Wellness Portal · internal tool",
    image: "/projects/wellness/finance-dashboard.webp",
    year: "2026",
    role: "Software Engineering Intern",
    company: "", // TODO: real data - company name
    summary:
      "A serverless, mobile-first portal where employees claim their yearly " +
      "wellness allowance, and HR and Finance review, approve and pay those " +
      "claims. Built on AWS Lambda, DynamoDB and Cognito, with all " +
      "infrastructure in Terraform.",
    tech: ["React 19", "TypeScript", "AWS Lambda", "DynamoDB", "Cognito", "S3", "Terraform"],
    live: null, // internal company tool: no public demo
    github: "https://github.com/AshanOdi/Wellness-Allowance-Internship",
    githubLabel: "Docs on GitHub",
    gallery: [
      { src: "/projects/wellness/employee-dashboard.webp", caption: "Employee dashboard: balances and claims" },
      { src: "/projects/wellness/finance-dashboard.webp", caption: "Finance dashboard: monthly payouts" },
      { src: "/projects/wellness/all-claims.webp", caption: "Finance: every claim, filterable by stage" },
      { src: "/projects/wellness/admin-users.webp", caption: "Super admin: approving sign-ups and roles" },
    ],
    caseStudy: {
      problem:
        "Every employee gets a yearly wellness allowance, split into " +
        "preventative spending (gym, yoga, massage) and curative spending " +
        "(doctor, dental, physio), with curative capped at 65%. Claims went " +
        "through email and spreadsheets: nobody could see a claim's status, " +
        "balances drifted, invoices were scattered across inboxes, and Finance " +
        "had no single view of pending payouts.",
      role:
        "Software Engineering Intern in a small team, and the top contributor " +
        "to the codebase (~600 of ~1,160 commits, Feb–Sep 2026). I built the " +
        "serverless backend Lambdas, the DynamoDB data model and transactional " +
        "balance logic, the claim state machine and server-side authorization, " +
        "Terraform modules and the Bitbucket CI/CD pipeline with OIDC, the " +
        "Cognito / Google SSO sign-up flow, React features and the mobile UI, " +
        "plus unit tests and OpenAPI docs.",
      decisions: [
        "Fully serverless and pay-per-use, with one least-privilege Lambda per responsibility.",
        "Files never pass through Lambda: the browser uploads straight to S3 with presigned URLs, into a temp bucket that empties itself.",
        "Claim status changes are enforced on the server by a declarative state machine; any other change returns 409 Conflict.",
        "DynamoDB keys designed from the queries, so “all employees for 2026” is a single query.",
        "Every AWS resource in Terraform, with dev and production built from the same modules.",
      ],
      challenges: [
        "Keeping balances correct when several people act on the same claim at once: every money move is a DynamoDB transaction with conditions, so conflicts are cancelled safely.",
        "DynamoDB transactions can't include S3, so submitting a claim follows a saga: commit, copy the files, and roll back with a compensating transaction if the copy fails.",
        "A yearly rollover job that must never double-apply: a year marker plus conditional writes make every re-run safe.",
      ],
      results: [
        "Replaced email and spreadsheets with one self-service portal for employees, HR, Finance and admins.",
        "169 unit tests run on every pipeline; a failing test blocks the deploy.",
        "17 Lambda functions and 18 API routes, all defined in Terraform and documented with OpenAPI 3.",
        "Safe production deploys: short-lived OIDC credentials, automatic DynamoDB backups before every apply and a post-deploy smoke test.",
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
