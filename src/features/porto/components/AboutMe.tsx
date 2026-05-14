"use client";
import { motion } from "framer-motion";

export const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-16 lg:px-24 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black tracking-tight text-foreground"
            >
              Background <br />
              <span className="text-primary italic">& Philosophy</span>
            </motion.h2>

            <div className="space-y-6">
              {[
                {
                  label: "Role",
                  value: "Full-Stack Developer",
                  color:
                    "bg-blue-200/50 dark:bg-white/5 text-blue-900 dark:text-foreground/70",
                },
                {
                  label: "Status",
                  value: "Open to Work",
                  color:
                    "bg-blue-200/50 dark:bg-white/5 text-blue-900 dark:text-foreground/70",
                },
                {
                  label: "Location",
                  value: "South Tangerang, ID",
                  color:
                    "bg-blue-200/50 dark:bg-white/5 text-blue-900 dark:text-foreground/70",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-5 rounded-md border border-foreground/10 shadow-sm ${item.color}`}
                >
                  <p className="text-[10px] uppercase tracking-[0.3em] font-black opacity-60 mb-2">
                    {item.label}
                  </p>
                  <p className="text-base font-black">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 text-base md:text-lg text-foreground/70 font-medium leading-snug"
            >
              <p>
                Hello! I&apos;m{" "}
                <span className="text-foreground font-black border-b-4 border-primary/20">
                  Muhammad Hanif Fauzi
                </span>
                , a Full-stack Web Developer currently working at NOTCH Creative Digital Agency,
                contributing to client projects and internal system development.
              </p>

              <p>
                My development journey began at Purwadhika Digital Technology
                School, where I built a strong foundation in full-stack web
                development. Today, I work on maintaining legacy systems,
                developing modern applications, and delivering reliable
                solutions for real business needs.
              </p>

              <p>
                I have hands-on experience with{" "}
                <span className="text-foreground font-black italic">
                  Next.js, TypeScript, NestJS, Express.js, Prisma, and PostgreSQL
                </span>
                , with a focus on building scalable, maintainable, and
                user-centered web applications.
              </p>

              <p className="text-xl font-black text-foreground italic pt-8 border-t border-foreground/10">
                &ldquo;I build reliable web solutions that balance clean
                engineering, scalability, and real user needs.&rdquo;
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
