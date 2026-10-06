// Featured projects, shown in the horizontal scrolling section.
// `domain` is shown in the mini browser bar of the preview, and `preview`
// picks the mock UI drawn inside it: dashboard, board, chat, list, terminal.
// `image` (optional) shows a real screenshot instead of the mock UI.
// Every project here is real; the details come from each project's README
// in ~/ash-personal/. `live: null` hides the live demo link.
export const projects = [
  // REAL project (from ~/ash-personal/Wellness-App/README.md).
  {
    slug: "wellness-portal",
    title: "Wellness Allowance Portal",
    domain: "Wellness Portal · internal tool",
    image: "/projects/wellness/finance-dashboard.webp",
    year: "2026",
    role: "Software Engineering Intern",
    company: "WealthOS Asia Pacific (Private) Limited",
    companyShort: "WealthOS",
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
  // REAL project (from ~/ash-personal/Weather-App/README.md).
  {
    slug: "kaalagune",
    title: "Kaalagune",
    domain: "kaalagune-app.vercel.app",
    image: "/projects/kaalagune/dashboard.webp",
    year: "2025",
    role: "Solo project",
    summary:
      "A secure weather dashboard with live conditions, a 24-hour chart, " +
      "5-day forecast, air quality and smart tips. Kaalagune means " +
      "“the weather” in Sinhala.",
    tech: ["React 19", "Vite", "Tailwind CSS", "Auth0", "OpenWeather API"],
    live: "https://kaalagune-app.vercel.app/",
    github: "https://github.com/AshanOdi/Weather-App",
    gallery: [
      { src: "/projects/kaalagune/dashboard.webp", caption: "Dashboard: saved cities, live weather, tips and 24-hour chart" },
    ],
    caseStudy: {
      problem:
        "Most weather apps bury the useful bits. I wanted one secure dashboard " +
        "that shows what matters at a glance (conditions, the next 24 hours, " +
        "air quality) in plain language, for every city you care about.",
      role:
        "Built the whole app solo: UI and motion, the OpenWeather API layer, " +
        "forecast processing, the Auth0 security setup and Vercel deployment.",
      decisions: [
        "Auth0 Universal Login with PKCE and MFA, so the app never sees a password; plus a guest mode for quick visitors.",
        "All API calls go through one cached client: weather is reused for 5 minutes, city search for 24 hours.",
        "Forecast and air quality load in parallel; if air quality fails, the rest of the dashboard still loads.",
        "Data is always fetched in metric and converted only for display, so one cache serves °C and °F users.",
      ],
      challenges: [
        "Showing each city's correct local time from UTC timestamps plus the city's timezone offset.",
        "Turning 40 three-hourly data points into a clean 24-hour view and 5 daily summaries, grouped by the city's local date.",
        "A hand-built SVG temperature chart (no chart library) that resizes with its card and scrolls on phones.",
      ],
      results: [
        "Live on Vercel, deployed automatically on every push to main.",
        "Invite-only accounts with multi-factor authentication, and sessions that survive a refresh.",
      ],
    },
  },
  // REAL project (from ~/ash-personal/PopcornPicks/README.md).
  {
    slug: "popcornpicks",
    title: "PopcornPicks",
    domain: "popcorn-picks-three.vercel.app",
    image: "/projects/popcornpicks/home.webp",
    year: "2026",
    role: "Solo project",
    summary:
      "A responsive movie explorer: trending films, search with infinite " +
      "scroll, filters, trailers and favourites, powered by live TMDb data.",
    tech: ["React 19", "TypeScript", "Material UI", "TMDb API", "Vite"],
    live: "https://popcorn-picks-three.vercel.app",
    github: "https://github.com/AshanOdi/PopcornPicks",
    gallery: [
      { src: "/projects/popcornpicks/home.webp", caption: "Home: “#1 Trending” hero banner and trending row" },
    ],
    caseStudy: {
      problem:
        "Build a movie discovery app that feels like a real streaming product: " +
        "fast search, rich movie details and a polished experience on both " +
        "phones and desktops.",
      role:
        "Built it solo with React and TypeScript (strict mode): architecture, " +
        "UI, TMDb integration and Vercel deployment.",
      decisions: [
        "Real TMDb login (request token → session) instead of a mock, plus a guest mode.",
        "Debounced search (500 ms) with infinite scroll; browsing lists use Load More instead.",
        "Discover filters live in the URL, so filtered views can be shared and the Back button works.",
        "One request per details page (details, cast and videos together) instead of three.",
      ],
      challenges: [
        "Clear layers: pages and components never call axios directly; typed API functions and custom hooks sit in between.",
        "Friendly errors for every failure (network, 401, 404, 429) with a Try again button.",
      ],
      results: [
        "Live on Vercel, with light and dark mode that follows the system setting.",
        "Strict TypeScript: the build fails on any type error.",
      ],
    },
  },
  // REAL project (from ~/ash-personal/Jira/jiraclone-*/README.md).
  {
    slug: "forge",
    title: "Forge",
    domain: "forge. · Issue Tracker",
    image: "/projects/forge/board.webp",
    year: "2025",
    role: "Solo project",
    summary:
      "A lightweight, Jira-style issue tracker: a Kanban board, dashboard " +
      "charts and a full status history for every customer issue.",
    tech: ["React 19", "Tailwind CSS", "Spring Boot", "Java", "MySQL"],
    live: null, // TODO: real data - add the live link if it is deployed
    github: "https://github.com/AshanOdi/jiraclone-Frontend",
    gallery: [
      { src: "/projects/forge/board.webp", caption: "Kanban board with a Move menu for the next valid status" },
      { src: "/projects/forge/dashboard.webp", caption: "Dashboard: counts and charts by status and type" },
      { src: "/projects/forge/detail.webp", caption: "Issue detail with the status history timeline" },
      { src: "/projects/forge/create.webp", caption: "Creating a new issue" },
    ],
    caseStudy: {
      problem:
        "Support teams need a simple way to log customer issues and move " +
        "them through a clear workflow, without the weight of a full Jira setup.",
      role:
        "Built both halves solo: the React frontend and the Spring Boot REST " +
        "API, split into two repositories.",
      decisions: [
        "A fixed support workflow (Open → In progress → Waiting on client → Resolved); the board only offers valid next statuses.",
        "Every status change is saved as a history record, so each issue keeps a full audit trail.",
        "Two database setups: MySQL by default, and an H2 dev profile so the API runs with no database install.",
        "Own small UI components (Button, Card, Badge) in a shadcn/ui style, on Tailwind design tokens.",
      ],
      challenges: [
        "Keeping the frontend safe against unexpected API responses, with route guards and empty states.",
        "Cascading history records cleanly when an issue is deleted.",
      ],
      results: [
        "A full-stack app across two repos: a React SPA and a Java 24 / Spring Boot 3.5 API.",
      ],
    },
  },
  // REAL project (from ~/ash-personal/e-commerce/*/README.md).
  {
    slug: "pop-cosmetics",
    title: "POP Cosmetics",
    domain: "POP Cosmetics · store",
    preview: "list", // TODO: real data - add a screenshot (no live demo yet)
    year: "2025",
    role: "Solo project",
    summary:
      "A full MERN e-commerce store: catalog, cart and checkout, orders, " +
      "reviews, wishlists, an admin dashboard and an AI shopping concierge.",
    tech: ["React 19", "Node.js", "Express", "MongoDB", "Gemini API"],
    live: null, // TODO: real data - add the live link if it is deployed
    github: "https://github.com/AshanOdi/E-Commerce-Platform-using-Mern-frontend",
    caseStudy: {
      problem:
        "Build a complete online store end to end, from the product catalog " +
        "to checkout and an admin dashboard, the way a real shop needs it.",
      role:
        "Built the React storefront, the Express + MongoDB API and the admin " +
        "dashboard solo, across two repositories.",
      decisions: [
        "Stateless JWT auth with bcrypt hashing, and rate limits on login, the contact form and AI requests.",
        "Atomic stock updates, so two orders can never oversell the last unit.",
        "The AI concierge only sees in-stock products and must answer with real product IDs, which the server re-checks.",
        "A mock payment gateway with an HMAC-signed webhook, to show a real checkout flow without a payment provider.",
      ],
      challenges: [
        "Keeping the cart honest: it re-validates against the live catalog and flags items that went out of stock.",
        "Re-issuing the login token whenever profile details change, so the UI never shows stale data.",
      ],
      results: [
        "Customer storefront plus a full admin dashboard for products, users and orders.",
        "AI recommendations grounded in the real catalog, using Google Gemini.",
      ],
    },
  },
];
