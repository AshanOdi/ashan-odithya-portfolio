// Work history, newest first. Write achievements as impact, not duties:
// "what changed because of your work", with numbers where possible.
// `link` (optional) links the company name to its website; `tech` is optional.
export const experience = [
  {
    role: "Software Engineer Intern",
    company: "WealthOS (a JPMorgan Company)",
    link: null,
    period: "Nov 2025 — Present",
    location: "Colombo, Sri Lanka",
    current: true,
    // From my CV and the Wellness Allowance Portal README.
    achievements: [
      "Built and deployed a serverless employee wellness benefits platform for submitting, reviewing, approving and tracking healthcare and wellness expense claims, serving 75 employees and ~300 claims per month.",
      "Developed full-stack features in React and Node.js (TypeScript) on AWS Lambda for claim submission, validation, balance tracking and multi-stage HR/Finance approvals.",
      "Designed and built 18 RESTful API endpoints on AWS Lambda and API Gateway with DynamoDB, documented in OpenAPI/Swagger.",
      "Implemented authentication and authorization with Amazon Cognito (OAuth 2.0, JWT) and role-based access control, and secured document uploads with S3 presigned URLs.",
      "Automated deployments with CI/CD and Terraform across environments, and supported production through debugging, root cause analysis, testing and fixes.",
      "Top contributor to the codebase (~600 of ~1,160 commits); worked with senior engineers, QA, DevOps and Product Owners through Bitbucket pull-request reviews.",
    ],
    tech: ["TypeScript", "Node.js", "React", "AWS Lambda", "API Gateway", "DynamoDB", "Cognito", "Terraform"],
  },
  {
    role: "Computer Engineering Student",
    company: "University of Jaffna",
    link: null,
    period: "2022 — 2026",
    location: "Sri Lanka",
    achievements: [
      "BSc Engineering (Hons) in Computer Engineering, Faculty of Engineering. Degree completed; graduation ceremony pending.",
      "Built full-stack side projects alongside my studies: Kaalagune, Forge, POP Cosmetics and PopcornPicks.",
    ],
  },
];
