export const profile = {
  name: "Aditya Jadhav",
  role: "Senior Full-Stack Engineer",
  location: "Hyderabad, IN",
  availability: "Available for contract & full-time — remote",
  headline: "Hand me the ambiguous half. It comes back deployed.",
  intro:
    "Senior full-stack engineer in Hyderabad, remote and EU-friendly hours. Requirements, architecture, build, pipeline, production — one person, and whatever stack the problem turns out to need.",
  email: "mr.jadhav.aditya@gmail.com",
  github: "https://github.com/AdityaJadhav001",
  linkedin: "https://www.linkedin.com/in/aditya-jadhav-8500/",
  resume:
    "https://drive.google.com/file/d/1w95DmuFSsYX9OAYz7vXnHEKE2Br3apk3/view?usp=sharing",
  siteUrl: "https://adityajadhav.dev",
} as const;

export const principles = [
  {
    id: "01",
    title: "Ownership",
    body: "I scope the requirement myself, write the architecture down before the first commit, and stay on it until it's live and monitored.",
  },
  {
    id: "02",
    title: "Range",
    body: "Angular and React on the front, Node and Express behind them, Mongo underneath, Docker and Actions around all of it. New tech is a Tuesday, not a blocker.",
  },
  {
    id: "03",
    title: "Judgement",
    body: "Three years spent on legacy-modernisation tooling, where the cost of a wrong assumption is a mis-priced contract. I write down the trade-off, not just the choice.",
  },
] as const;

export type Stage = {
  key: string;
  index: string;
  name: string;
  sub: string;
  title: string;
  body: string;
  tradeoff: string;
};

/** The reusable case-study shape. Duplicate this type for every new project. */
export type CaseStudy = {
  slug: string;
  eyebrow: string;
  period: string;
  title: string;
  problem: string[];
  role: string;
  facts: { label: string; value: string }[];
  stack: string[];
  /** Leave empty until you have numbers you can defend. The UI hides the block. */
  metrics: { label: string; value: string; note?: string }[];
  stages: Stage[];
  /** Reconstructed diagrams get a visible caveat until verified. */
  diagramNote?: string;
  links: { label: string; href: string }[];
};

export const landmine: CaseStudy = {
  slug: "landmine",
  eyebrow: "Selected work — 01 / 01",
  period: "2023 — present",
  title:
    "Static analysis that prices the risk in a mainframe before anyone signs for it.",
  problem: [
    "Migration bids for legacy estates are priced on a sample and a hope. Dead code, undocumented copybook reuse, JCL that only one person understands — none of it shows up until the project is already sold, and then it shows up as overrun.",
    "The platform parses the whole estate — COBOL, JCL, PL/I, BMS, copybooks, RPG, ADABAS/Natural — and turns it into a dependency graph a delivery lead can actually interrogate. Risk surfaces before the contract, not after.",
  ],
  role:
    "End-to-end: parser pipeline, API, the analyst-facing UI, and the container/CI setup that ships it.",
  facts: [
    {
      label: "Dialects covered",
      value: "COBOL · JCL · PL/I\nBMS · Copybooks\nRPG · ADABAS/Natural",
    },
  ],
  stack: ["Angular", "Node / Express", "MongoDB", "Docker", "Jenkins", "GitHub Actions"],
  metrics: [],
  stages: [
    {
      key: "intake",
      index: "01",
      name: "Intake",
      sub: "Source drop\n+ checksum",
      title: "Take the estate whole, never a sample",
      body: "Source drops land as an immutable, checksummed snapshot before anything reads them. Sampling is what mis-prices these bids in the first place, so intake refuses partial estates rather than analysing them.",
      tradeoff:
        "trade-off — slower first run, but every later result is reproducible against a known snapshot",
    },
    {
      key: "parse",
      index: "02",
      name: "Dialect parsers",
      sub: "Containerised\nworkers",
      title: "One container per dialect, not one parser to rule them all",
      body: "COBOL, JCL, PL/I, BMS, RPG and Natural have nothing in common but the mainframe they run on. Each gets its own worker image with its own grammar, so a broken RPG parse never blocks the COBOL run.",
      tradeoff:
        "trade-off — more images to maintain; bought isolation, parallelism and a safe place to add the next dialect",
    },
    {
      key: "graph",
      index: "03",
      name: "Dependency graph",
      sub: "MongoDB\ndocument store",
      title: "Store the relationships, not the files",
      body: "The valuable artefact is the edge list: which program calls which, which copybook is shared, what nothing references any more. Documents keep the per-dialect shape flexible while the graph stays queryable.",
      tradeoff:
        "trade-off — chose schema flexibility over relational joins; deep traversals need care at estate scale",
    },
    {
      key: "rules",
      index: "04",
      name: "Risk rules",
      sub: "Dead code, orphan\ncopybooks, cycles",
      title: "Risk rules are data, not code",
      body: "Dead code, orphaned copybooks, circular JCL dependencies, single-owner modules — each is a declarative rule over the graph. An analyst can add or tune one without a release.",
      tradeoff:
        "trade-off — a rule DSL to own; the alternative was a deploy every time a client's definition of risk shifted",
    },
    {
      key: "ui",
      index: "05",
      name: "Analyst console",
      sub: "Angular +\nreport export",
      title: "Built for the person writing the estimate",
      body: "The console is Angular because the audience is a delivery lead interrogating a graph, not a marketing visitor: dense tables, saved filters, and an export that goes straight into the bid document.",
      tradeoff:
        "trade-off — optimised for depth over first-load polish; the users open it every day for a month",
    },
  ],
  links: [
    { label: "Live demo", href: "#" },
    { label: "Source / GitHub", href: profile.github },
  ],
};

export const layers = [
  { name: "Frontend", items: ["Angular", "React", "Next.js", "TypeScript"] },
  { name: "Backend", items: ["Node.js", "Express", "REST / API Gateway"] },
  { name: "Data", items: ["MongoDB", "Schema & index design"] },
  { name: "Delivery", items: ["Docker", "GitHub Actions", "Jenkins"] },
] as const;

export const pipeline = [
  { index: "01", name: "verify", detail: "tsc · eslint · a11y" },
  { index: "02", name: "build", detail: "next build → out/" },
  { index: "03", name: "deploy", detail: "OIDC → s3 sync" },
  { index: "04", name: "invalidate", detail: "cloudfront /*" },
] as const;
