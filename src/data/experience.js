// Work history, newest first. Write achievements as impact, not duties:
// "what changed because of your work", with numbers where possible.
// `link` (optional) links the company name to its website.
export const experience = [
  {
    role: "Software Engineering Intern",
    company: "WealthOS Asia Pacific (Private) Limited",
    link: null,
    period: "Nov 2025 — Present",
    location: "Sri Lanka",
    current: true,
    // From the Wellness Allowance Portal README ("My Role").
    achievements: [
      "Top contributor to the Wellness Allowance Portal (~600 of ~1,160 commits): a serverless platform where employees claim their wellness allowance and HR and Finance approve and pay it.",
      "Built serverless Node.js Lambdas, the DynamoDB data model and the transactional balance logic that keeps balances correct when people act on the same claim at once.",
      "Wrote Terraform modules for dev and production, and a Bitbucket CI/CD pipeline with OIDC, automatic database backups and post-deploy smoke tests.",
      "Integrated Cognito with Google Workspace SSO, and built React features and the mobile-friendly UI.",
      "Wrote unit tests and OpenAPI docs; the project's 169 tests run on every pipeline.",
    ],
    tech: ["React", "TypeScript", "Node.js", "AWS Lambda", "DynamoDB", "Terraform"],
  },
];
