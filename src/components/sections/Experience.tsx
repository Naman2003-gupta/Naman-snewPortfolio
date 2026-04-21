import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";

export const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-nav py-24">
      <div className="container max-w-4xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">Career</p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="text-gradient">Experience</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent md:left-1/2" />
          <ul className="space-y-10">
            {experience.map((e, i) => {
              const left = i % 2 === 0;
              return (
                <li key={e.role + e.company} className="relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="absolute left-4 top-3 -translate-x-1/2 md:left-1/2"
                  >
                    <span className="block h-3 w-3 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: left ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${left ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
                  >
                    <div className="glass glow-border rounded-2xl p-6">
                      <p className="mb-1 text-xs text-accent">{e.period}</p>
                      <h3 className="font-display text-lg font-semibold">{e.role}</h3>
                      <p className="text-sm text-muted-foreground">{e.company}</p>
                      <p className="mt-3 text-sm text-foreground/80">{e.description}</p>
                    </div>
                  </motion.div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
