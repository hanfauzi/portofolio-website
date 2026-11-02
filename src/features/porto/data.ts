// Portfolio content. Facts follow "Muhammad Hanif Fauzi CV - 2026 v3"; the wording is written for the site, not copied from the CV.

export const profile = {
  name: "Muhammad Hanif Fauzi",
  shortName: "Hanif",
  role: "Fullstack Developer",
  company: "Notch",
  location: "South Tangerang, Indonesia",
  email: "muhaniffauzi@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhaniffauzi",
  github: "https://github.com/hanfauzi",
  instagram: "https://www.instagram.com/hnfzii/",
  cv: "/Muhammad Hanif Fauzi CV - 2026.pdf",
  award: "https://drive.google.com/file/d/1DWjDRUceAw04ghVZEJaERn6EqUMCMhE6/view?usp=sharing",
  certificate: "https://drive.google.com/drive/folders/163KDgxbvyvWc-aaIrjhZyoQhSt6b1kjG?usp=sharing",
};

export const facts = [
  { label: "Role", value: "Fullstack Developer" },
  { label: "Based in", value: "South Tangerang, Indonesia" },
  { label: "Status", value: "Open to work (remote, hybrid or on-site)" },
  { label: "Speaks", value: "Indonesian, English, Arabic (basic)" },
];

export type Milestone = {
  period: string;
  title: string;
  place: string;
  summary: string;
  highlights?: { name: string; text: string }[];
  links?: { label: string; href: string }[];
};

export const journey: Milestone[] = [
  {
    period: "Jan 2026 – Present",
    title: "Junior Web Developer",
    place: "Notch Creative Digital Agency, Jakarta",
    summary:
      "I work across the whole stack on client platforms and on Notch's own internal tools, mostly in NestJS, Prisma, PostgreSQL and Next.js.",
    highlights: [
      {
        name: "UNICEF Indonesia donation platform",
        text: "One of three engineers who rebuilt the platform, which went live in October 2026. I owned login and access control for both the admin CMS and the donor portal, wired up one-off and recurring donations through Midtrans, Xendit and DOKU, and shipped the donor portal itself, from donation history to achievements and a leaderboard. I also moved users and media off the old MySQL system without losing data, and built a popup and survey engine so the content team can run campaigns without waiting for a release.",
      },
      {
        name: "Internal ERP",
        text: "Built the timesheet module, with live start, pause and resume tracking plus Excel export, and a three-level overtime approval flow that runs from employee to division head to director.",
      },
    ],
  },
  {
    period: "May – Oct 2025",
    title: "Fullstack Web Development",
    place: "Purwadhika Digital Technology School",
    summary:
      "An intensive bootcamp where I went from the basics to shipping fullstack apps with payments, auth and real databases. I graduated as Best Student of Batch 33.",
    links: [
      { label: "Award", href: profile.award },
      { label: "Certificate", href: profile.certificate },
    ],
  },
  {
    period: "2020 – 2024",
    title: "Bachelor of Islamic Family Law",
    place: "STDI Imam Syafi'i Jember",
    summary: "Graduated with a GPA of 3.73 out of 4.00 before moving into software.",
  },
];

export type Project = {
  name: string;
  tagline: string;
  year: string;
  image?: string;
  /** Project logo shown on its own brand-colored panel when there is no screenshot. */
  logo?: { src: string; bg: string };
  summary: string;
  /** Slug of a long-form story at /projects/[slug], when the project has one. */
  story?: string;
  stack: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    name: "Arunika",
    tagline: "AI finance assistant on Telegram",
    year: "2026",
    logo: { src: "/projects/arunika-mark.svg", bg: "#14213D" },
    story: "arunika",
    summary:
      "A Telegram bot I use every day to log spending and budgets straight into Google Sheets. The AI can only draft entries; every write is signed and checked again by a separate worker before it touches the sheet.",
    stack: ["Python", "SQLite", "Telegram Bot API", "Google Sheets API", "MCP"],
    links: [],
  },
  {
    name: "CoffeBar",
    tagline: "Coffee shop management system",
    year: "2026",
    logo: { src: "/projects/coffebar-mark.svg", bg: "#F3E9DC" },
    story: "coffebar",
    summary:
      "A POS that costs stock first in, first out, so profit comes from the actual ingredient batches used. It also has a Gemini advisor that forecasts restocks for the next 30 days.",
    stack: ["React", "Vite", "NestJS", "Prisma", "PostgreSQL", "Gemini API"],
    links: [{ label: "GitHub", href: "https://github.com/hanfauzi/coffe-bar" }],
  },
  {
    name: "Laundry Web App",
    tagline: "Bootcamp final project",
    year: "2025",
    image: "/logo-laundr.jpg",
    summary:
      "Pickup and delivery laundry ordering with Midtrans payments and order tracking. I designed the PostgreSQL schema and the REST API behind it.",
    stack: ["Next.js", "Express.js", "PostgreSQL", "Prisma", "Midtrans"],
    links: [{ label: "Live site", href: "https://laundr-project.vercel.app/" }],
  },
  {
    name: "Tickly",
    tagline: "Event ticketing platform, bootcamp mini project",
    year: "2025",
    logo: { src: "/projects/tickly-mark.svg", bg: "#E6EDF8" },
    summary:
      "Event ticketing with separate organizer and participant roles, payments, email notifications and a sales dashboard for organizers.",
    stack: ["Next.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
    links: [
      { label: "App code", href: "https://github.com/hanfauzi/mini-project-app" },
      { label: "API code", href: "https://github.com/hanfauzi/mini-project-api" },
    ],
  },
];
