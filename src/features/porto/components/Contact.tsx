import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { profile } from "../data";

const channels = [
  { label: "LinkedIn", value: "in/muhaniffauzi", href: profile.linkedin, icon: FaLinkedin },
  { label: "GitHub", value: "hanfauzi", href: profile.github, icon: FaGithub },
  { label: "Instagram", value: "@hnfzii", href: profile.instagram, icon: FaInstagram },
];

export default function ContactSection() {
  return (
    <section id="contact" data-backdrop="contact" className="border-t">
      <div className="mx-auto grid max-w-[1240px] gap-14 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:py-32">
        <div>
          <h2 className="text-5xl leading-[1.02] font-semibold tracking-[-0.04em] text-ink-strong md:text-6xl">
            Let&apos;s
            <br />
            <span className="text-accent-text">talk</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-2">
            Open to fullstack roles, whether remote, hybrid or on-site, and to collaborations. Email reaches me fastest.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex h-11 items-center rounded-full bg-[#09090b] px-6 text-[0.85rem] font-semibold text-white transition-[background-color,transform] duration-300 hover:-translate-y-px hover:bg-[#27272a] dark:bg-white dark:text-[#09090b] dark:hover:bg-slate-200"
          >
            {profile.email}
          </a>
        </div>

        <ul className="divide-y self-end border-y">
          {channels.map(({ label, value, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 py-6"
              >
                <span className="inline-flex items-center gap-3 text-base font-semibold text-ink-strong">
                  <Icon className="size-5" aria-hidden="true" />
                  {label}
                </span>
                <span className="inline-flex items-center gap-1 text-sm text-ink-2 transition-colors group-hover:text-ink-strong">
                  {value}
                  <FiArrowUpRight
                    className="size-4 text-highlight transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
