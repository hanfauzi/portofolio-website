import type { IconType } from "react-icons";
import {
  SiCloudflare,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiReact,
  SiReactquery,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

// brand: the logo's own color. null = monochrome logo, drawn in the text color so it flips with the theme.
const stack: { name: string; href: string; icon: IconType; brand: string | null }[] = [
  { name: "TypeScript", href: "https://www.typescriptlang.org/", icon: SiTypescript, brand: "#3178C6" },
  { name: "JavaScript", href: "https://developer.mozilla.org/docs/Web/JavaScript", icon: SiJavascript, brand: "#E5C100" },
  { name: "React", href: "https://react.dev/", icon: SiReact, brand: "#22B8DA" },
  { name: "Next.js", href: "https://nextjs.org/", icon: SiNextdotjs, brand: null },
  { name: "NestJS", href: "https://nestjs.com/", icon: SiNestjs, brand: "#E0234E" },
  { name: "Node.js", href: "https://nodejs.org/", icon: SiNodedotjs, brand: "#5FA04E" },
  { name: "Express", href: "https://expressjs.com/", icon: SiExpress, brand: null },
  { name: "PostgreSQL", href: "https://www.postgresql.org/", icon: SiPostgresql, brand: "#4169E1" },
  { name: "MySQL", href: "https://www.mysql.com/", icon: SiMysql, brand: "#4479A1" },
  { name: "Prisma", href: "https://www.prisma.io/", icon: SiPrisma, brand: null },
  { name: "Redis", href: "https://redis.io/", icon: SiRedis, brand: "#FF4438" },
  { name: "TanStack Query", href: "https://tanstack.com/query", icon: SiReactquery, brand: "#FF4154" },
  { name: "Tailwind CSS", href: "https://tailwindcss.com/", icon: SiTailwindcss, brand: "#06B6D4" },
  { name: "Python", href: "https://www.python.org/", icon: SiPython, brand: "#3776AB" },
  { name: "Docker", href: "https://www.docker.com/", icon: SiDocker, brand: "#2496ED" },
  { name: "Cloudflare R2", href: "https://www.cloudflare.com/developer-platform/products/r2/", icon: SiCloudflare, brand: "#F38020" },
  { name: "Git", href: "https://git-scm.com/", icon: SiGit, brand: "#F05032" },
  { name: "GitHub", href: "https://github.com/", icon: SiGithub, brand: null },
  { name: "Vercel", href: "https://vercel.com/", icon: SiVercel, brand: null },
  { name: "Postman", href: "https://www.postman.com/", icon: SiPostman, brand: "#FF6C37" },
];

const Skills = () => {
  return (
    <section id="skills" className="border-t">
      <div className="mx-auto grid max-w-[1240px] gap-14 px-4 py-24 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:py-32">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <h2 className="text-5xl leading-[1.02] font-semibold tracking-[-0.04em] text-ink-strong md:text-6xl">
              Tech
              <br />
              <span className="text-ink-2">I work with</span>
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-ink-2">
              The languages, frameworks and tools I use every day to build, ship and look after web applications.
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 lg:col-span-8 lg:grid-cols-5">
          {stack.map(({ name, href, icon: Icon, brand }) => (
            <li key={name}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={brand ? ({ "--brand": brand } as React.CSSProperties) : undefined}
                className="group flex aspect-square flex-col items-center justify-center gap-3 rounded-lg border bg-surface p-3 transition-[transform,border-color,background-color] duration-300 ease-out-soft hover:-translate-y-1 hover:border-ink-2/40 hover:bg-surface-hover"
              >
                <Icon
                  aria-hidden="true"
                  className={`size-9 transition-transform duration-300 ease-out-soft group-hover:scale-110 sm:size-11 ${
                    brand ? "text-(--brand)" : "text-ink-strong"
                  }`}
                />
                <span className="text-center text-[11px] leading-tight font-semibold text-ink-2 sm:text-xs">
                  {name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
