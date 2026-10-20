// Education, newest first. `note` and `coursework` are optional.
// Wording matches my CV.
export const education = [
  {
    degree: "BSc. Engineering (Hons.) in Computer Engineering",
    school: "Department of Computer Engineering, Faculty of Engineering, University of Jaffna",
    period: "2022 — 2026",
    note: "Degree completed; graduation ceremony pending.",
    coursework: [
      "Software Engineering",
      "Database Management Systems",
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks & Security",
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
    ],
  },
];

// Research work (from my CV).
export const research = [
  {
    title: "QoS-Aware Distributed Query Processing System",
    summary:
      "A distributed SQL query optimisation framework using Apache Calcite, " +
      "PostgreSQL and LinUCB, with join-based query decomposition and " +
      "QoS-aware strategy selection.",
    points: [
      "Adaptive cut-point selection using data locality, transfer cost, planner statistics and execution feedback.",
      "Evaluated with TPC-H, showing better execution performance than static QoS-based optimisation.",
    ],
    tech: ["Apache Calcite", "PostgreSQL", "LinUCB", "TPC-H"],
  },
];

// Competitions and awards (from my CV).
export const awards = [
  { name: "UOJ Coders 4.0", result: "Finalist · Sri Lanka Rank 12", team: "Team Code_Mazer" },
  { name: "MoraXtreme 9.0", result: "Sri Lanka Rank 82", team: "Team ViperBytes" },
];

// Certifications appear in their own block as soon as this list has at
// least one entry. Example:
// { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services",
//   year: "2026", link: "https://www.credly.com/badges/..." },
export const certifications = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    year: "In progress · target Dec 2026",
    link: null, // add the Credly link once it is issued
  },
];
