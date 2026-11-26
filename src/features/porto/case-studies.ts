// Long-form stories for selected projects, rendered at /projects/[slug].
// Only projects with a real story to tell get one; the rest stay as cards on the home page.
// The Indonesian text lives in ./content/case-studies.id.ts.

import type { Locale } from "@/i18n/routing";
import { caseStudiesId } from "./content/case-studies.id";

export type CaseStudy = {
  slug: string;
  name: string;
  tagline: string;
  logo: { src: string; bg: string };
  intro: string;
  facts: { label: string; value: string }[];
  problem: string[];
  /** Numbered walk-through of how the thing works, in the order it happens. */
  flow: { title: string; steps: string[] };
  /** Feature list, used when the product is a wide app rather than a single flow. */
  features?: { name: string; text: string }[];
  hardParts: { name: string; text: string }[];
  outcome: string[];
  lessons: string[];
  links: { label: string; href: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "hnf-office",
    name: "HNF Office",
    tagline: "Virtual office for my AI agents",
    logo: { src: "/projects/hnf-office-mark.svg", bg: "#EAF4F2" },
    intro:
      "An isometric office in the browser where my personal AI agents work. Every message, transaction and report they handle shows up as a character moving around the office, and the same page is where I chat with them and approve what they want to do.",
    facts: [
      { label: "Period", value: "November 2026" },
      { label: "Role", value: "Solo, from design to deploy" },
      { label: "Agents", value: "Arunika (finance), Swastamita (HR)" },
    ],
    problem: [
      "After Arunika was in daily use I wanted more agents, each with its own job. The problem was visibility: an agent working through Telegram is a black box. I could see its replies, but not what it was reading, waiting on or doing in the background.",
      "I also did not want every new agent to bring its own bot, dashboard and approval flow. So I turned the Arunika repo into a platform: one office where every agent shows up, one place to talk to them, and one approval path that every agent has to go through.",
    ],
    flow: {
      title: "From a real event to a character on screen",
      steps: [
        "An agent does something real: receives a message, reads report data, offers approval buttons or records a transaction.",
        "It appends that as an event, tagged with its agent id, to the platform's event log.",
        "The office server tails the logs and streams new events to the browser over Server-Sent Events.",
        "A \"director\" in the frontend turns each event into movement: the agent walks to the shared memory to read data, to the printer for a PDF report, to the archive cabinet when a transaction is recorded, and to my room to deliver a report.",
        "Approval buttons show up in the chat panel. Pressing one drops a request into that agent's inbox, and the agent checks it exactly like a Telegram button press before anything is written.",
      ],
    },
    features: [
      { name: "Live isometric office", text: "Hand-drawn on a canvas: desks, a boss room, pantry, game room, meeting room and a musholla, with characters that find the shortest route along the walkways." },
      { name: "A day that feels real", text: "Work hours, breaks and prayer times come from the server, so agents leave their desks for lunch and walk to the musholla together at prayer time." },
      { name: "Chat with every agent", text: "One channel per agent plus an \"all agents\" channel. A message there without a name becomes an announcement and every agent answers it." },
      { name: "HR agent with approval", text: "Swastamita lives only in the office and manages work hours and office rules. She can only propose a change; it applies after I press approve, and every version is kept." },
      { name: "Visitor mode", text: "A read-only view for guests: the live office, agent profiles and the office schedule, without chat, amounts or anything private." },
      { name: "Adding an agent is config", text: "A new agent is one entry in agents.json with its name, role, seat and colours. Its character, seat and chat channel appear on their own." },
    ],
    hardParts: [
      {
        name: "The office must never become a back door",
        text: "A web page that can approve financial writes is a new attack surface. The office server has no power of its own: it only drops a request file into the agent's inbox with an atomic write, and the agent runs the same signed Ed25519 approval check it uses for Telegram. The server listens on localhost only and is opened through an authenticated tunnel.",
      },
      {
        name: "Live updates with no database and no Node on the server",
        text: "The server is plain Python standard library. It tails the agents' event logs and streams them with chunked Server-Sent Events, so proxies like Vite and Cloudflare forward each event immediately instead of buffering. The frontend is a static Vite build, so the VPS does not need Node.js.",
      },
      {
        name: "Showing the office without showing my data",
        text: "Visitor access is decided on the server by host name, not by the frontend. Visitor hosts can only load the page and two public endpoints; every POST and the chat, history and stream endpoints are refused, so chat text, amounts and HR proposals never leave the server.",
      },
      {
        name: "Making characters move like people",
        text: "Real events arrive at random moments, often while a character is already walking. The director queues animations per actor and re-routes from the current position instead of teleporting, at a strolling pace, so the office stays calm even when several events land at once.",
      },
    ],
    outcome: [
      "I can now see what my agents are doing at a glance, talk to them from the browser and approve their work in the same place, with the same safety checks as Telegram.",
      "The second agent, Swastamita, was added as a config entry plus her own logic, without touching the office frontend, which was the point of building a platform instead of another bot.",
    ],
    lessons: [
      "A new interface should reuse the existing safety path, not get a shortcut around it.",
      "Privacy rules belong on the server. Hiding something in the frontend is not hiding it.",
      "Building the platform before the second agent made the second agent cheap.",
    ],
    links: [],
  },
  {
    slug: "arunika",
    name: "Arunika",
    tagline: "AI finance assistant on Telegram",
    logo: { src: "/projects/arunika-mark.svg", bg: "#14213D" },
    intro:
      "A Telegram bot that logs my spending and budgets into Google Sheets from a casual chat message. The AI is allowed to draft, never to write: nothing reaches the sheet until I tap a button and a separate worker has checked the approval again.",
    facts: [
      { label: "Period", value: "October to November 2026" },
      { label: "Role", value: "Solo, from design to running it" },
      { label: "Status", value: "In daily use since 31 October 2026" },
      { label: "Runs on", value: "Ubuntu VPS, systemd services" },
    ],
    problem: [
      "I keep my personal finances in a Google Sheet. It works, but opening a spreadsheet for every coffee is exactly the kind of small chore that gets put off, and a finance sheet with gaps is not much use.",
      "Typing \"tadi beli kopi 15rb\" into a chat is much easier. The catch is that letting an AI model write straight into my real money records is risky: it can misread an amount, pick the wrong date, or log the same thing twice. So the goal was the convenience of a chat with the safety of a person checking every entry.",
    ],
    flow: {
      title: "From a chat message to a row in the sheet",
      steps: [
        "I send a normal message, one purchase or several at once.",
        "The AI agent turns it into a draft. It has no permission to write anything, only to prepare.",
        "The bot answers with buttons for each entry: save, edit or cancel. When several entries arrive together, one \"save all\" button covers them.",
        "Tapping save creates an approval that is checked (right owner, right chat, not expired) and signed with an Ed25519 key.",
        "A separate worker verifies the signature, the hash of the planned write and the target workbook, then writes to Google Sheets, reads the row back and records it in a ledger.",
        "The button message updates itself to say the entry is saved. From tap to row takes about five seconds, most of it Google's API.",
      ],
    },
    hardParts: [
      {
        name: "A relay that silently timed out",
        text: "The agent and the Telegram connector talk over a WebSocket relay, and at first every connection timed out after 30 seconds with no error. The cause turned out to be tiny: messages were sent as JSON without a trailing newline, while the other side only processed complete lines. I proved it with a local test on the real transport (old version failed 4 of 4, patched version passed 4 of 4) before switching production over.",
      },
      {
        name: "Hitting Google's rate limit",
        text: "Logging 17 transactions in one go ran into Google Sheets' quota (HTTP 429). Reads now retry with a growing delay, writes are never retried blindly, and a row that was written but could not be confirmed is marked uncertain and checked by reading the cell on the next round. I also cut the API calls per transaction from about 14 to about 5.",
      },
      {
        name: "Never recording anything twice",
        text: "Double taps, service restarts and the AI repeating an old draft are all real. A ledger rejects anything already recorded, budget changes only apply if the old value is still what the worker last saw, and entries that look like a recent one are flagged before I approve them. I tested double taps and restarts mid-flow on purpose.",
      },
      {
        name: "Safe to switch, safe to undo",
        text: "Each part runs as its own user with a sandboxed service. A test and a production workbook are pinned by hash, so an approval made for one is refused by the other. Rolling back is one command, and the server only accepts SSH keys.",
      },
    ],
    outcome: [
      "Arunika has been writing to my real finance workbook since 31 October 2026 and logged 18 transactions on its first full day. Nothing has been recorded twice, including during the two incidents along the way.",
      "One of those incidents is my favourite lesson: a chat session that ran across midnight kept using the previous day's date. The fix was not a stricter instruction to the AI but giving it the real date and the last 36 hours of activity with every message.",
    ],
    lessons: [
      "Rules written for an AI are not a guarantee. Anything that matters has to be enforced in code.",
      "Test a patch through the real service, not by hand, because the sandbox it runs in behaves differently.",
      "Make the safe path the default: if anything is unclear, the system stops and asks instead of writing.",
    ],
    links: [],
  },
  {
    slug: "coffebar",
    name: "CoffeBar",
    tagline: "Coffee shop management system",
    logo: { src: "/projects/coffebar-mark.svg", bg: "#F3E9DC" },
    intro:
      "A management app for my small coffee side business. It runs the cashier, tracks every ingredient batch first in, first out, and closes the books on my own pay cycle, so I know each month whether the business actually made money.",
    facts: [
      { label: "Period", value: "July to August 2026" },
      { label: "Role", value: "Solo, built for my own side business" },
      { label: "Status", value: "In personal use, not commercial" },
      { label: "Users", value: "Me, for friends and colleagues at the office" },
    ],
    problem: [
      "CoffeBar started with a side job: I began selling coffee, mostly to myself and friends at the office. Small scale, but real money going in and out.",
      "Everything lived in the same Google Sheet as my personal money management. Sales, ingredient purchases and my own spending were mixed together, so I could not tell whether the coffee was making a profit, and I kept buying stock by feel. Some months ended with too much left over from the month before.",
    ],
    flow: {
      title: "What happens to one order",
      steps: [
        "An order is created at the cashier as pending.",
        "The ingredients in its recipe are reserved straight away, so the stock I see as available is physical stock minus what other orders already need.",
        "When the order is completed, one database transaction releases the reservation and takes the ingredients from the oldest batches first.",
        "The real cost of those batches is saved with the sale, so profit is based on what the ingredients actually cost, not an average.",
      ],
    },
    features: [
      { name: "Books on my pay cycle", text: "Months run from the 28th to the 27th, matching my payday as the owner, so the business month lines up with how I plan my own money." },
      { name: "Daily cash check", text: "At the end of a shift the cash in the drawer is compared with the recorded sales, and any difference is booked as an adjustment instead of disappearing." },
      { name: "Waste counts as a loss", text: "Spoiled or spilled ingredients are recorded at their FIFO cost and taken off the month's profit." },
      { name: "Portions left", text: "For every menu item the app works out how many cups are still possible from the ingredient that will run out first, and shows it at the cashier." },
      { name: "Bulk order estimator", text: "Before accepting a large order, I can check whether the stock covers it and what it will cost to make." },
      { name: "AI advisor", text: "Gemini reads the real sales and stock data to explain the month's profit and forecast what to buy for the next 30 days. Prompts are scanned for injection, locked to coffee-shop topics, and answers are sanitised. It only runs on demand and is cached for an hour to save quota." },
    ],
    hardParts: [
      {
        name: "Numbers that have to be exact",
        text: "FIFO costing and stock reservation feed every report in the app, so a small error spreads everywhere. Each completed order is handled in a single Prisma transaction: either the stock, the cost and the sale are all saved, or none of them are.",
      },
      {
        name: "Real use never matches the recipe",
        text: "Actual usage is sometimes a little less than the recipe and sometimes more. Stock adjustments are split into corrections and real waste, so the records follow reality without hiding losses inside a correction.",
      },
      {
        name: "Growing with the business",
        text: "There was never a big failure, mostly gaps: a moment where I needed something the app could not do yet. I added features when a real need showed up, which is how the estimator and the staff consumption tracker came in. Along the way I moved the frontend to TanStack Query and Formik with a feature-based folder structure to keep it manageable.",
      },
    ],
    outcome: [
      "I now know, every month, whether the coffee business made or lost money, separately from my personal finances.",
      "Stock is bought from actual usage instead of guesses, so the amount left over from the previous month stays small instead of piling up.",
    ],
    lessons: [
      "Build for the need you have now and let the product grow when a new one appears.",
      "When money is involved, the database transaction is the feature: all or nothing.",
    ],
    links: [{ label: "GitHub", href: "https://github.com/hanfauzi/coffe-bar" }],
  },
];

export const getCaseStudies = (locale: Locale) => (locale === "id" ? caseStudiesId : caseStudies);

export const getCaseStudy = (slug: string, locale: Locale) => getCaseStudies(locale).find((c) => c.slug === slug);
