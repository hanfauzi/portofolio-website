"use client";

export const AboutMe = () => {
  return (
<section
  id="about"
  className="py-16 px-4 text-black border-t border-white/40"
>

      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            About Me
          </h2>
          <p className="text-xs md:text-sm text-gray-500">
            A quick snapshot of who I am and what I do.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.7fr_1.3fr] items-start">
          <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-700">
            <p className="text-justify">
              Hello! I&apos;m{" "}
              <span className="font-semibold">Muhammad Hanif Fauzi</span>, a{" "}
              <span className="font-semibold">Full-Stack Web Developer</span>{" "}
              based in South Tangerang, Indonesia. I enjoy building clean,
              efficient, and modern web applications using{" "}
              <span className="font-medium">Next.js</span>,{" "}
              <span className="font-medium">Express.js</span>,{" "}
              <span className="font-medium">TypeScript</span>, and{" "}
              <span className="font-medium">PostgreSQL</span>.
            </p>

            <p className="text-justify">
              I transitioned into the tech industry from a background in Islamic
              Family Law, bringing analytical thinking and adaptability into my
              development workflow. My full-stack journey began at{" "}
              <span className="font-medium">
                Purwadhika Digital Technology School
              </span>
              , where I built real-world applications through hands-on projects
              and Agile collaboration.
            </p>

            <p className="text-justify">
              Since then, I’ve continued sharpening my skills through
              self-learning, documentation deep-dives, and personal projects.
              My experience includes authentication systems, RESTful APIs,
              payment integrations (Midtrans), deployment pipelines, and
              building scalable web architectures.
            </p>

            <p className="text-justify">
              I’m passionate about writing maintainable code, learning new
              technologies, and building products that create meaningful impact
              for users and businesses. This website is a space for me to share
              my work, my growth, and the things I’m building along the way.
            </p>
          </div>

          <div className="space-y-3 text-sm md:text-base">
            <div className="rounded-2xl border border-gray-200 bg-gray-50/60 p-4">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Role
              </p>
              <p className="mt-1 font-medium">
                Full-Stack Web Developer / Software Engineer
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50/60 p-4">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Currently focusing on
              </p>
              <p className="mt-1">
                Next.js, Express.js, PostgreSQL, Prisma ORM, clean architecture,
                scalable APIs.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50/60 p-4">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Status
              </p>
              <p className="mt-1 font-medium text-blue-600">
                Open to Full-time · Freelance · Intern Opportunities
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50/60 p-4">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Based in
              </p>
              <p className="mt-1">South Tangerang, Banten, Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
