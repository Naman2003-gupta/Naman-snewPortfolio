import { motion } from "framer-motion";
import { BookOpen, BrainCircuit, GraduationCap, School } from "lucide-react";
import { education } from "@/data/portfolio";

const infoCards = [
  { label: "Degree", value: education.degree, Icon: GraduationCap },
  { label: "University", value: education.university, Icon: School },
  { label: "Status", value: education.status, Icon: BookOpen },
];

export const Education = () => {
  return (
    <section id="education" className="scroll-mt-nav py-24">
      <div className="container max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">Education</p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Academic <span className="text-gradient">foundation</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass glow-border relative overflow-hidden rounded-[2rem] p-8"
        >
          <div
            aria-hidden
            className="absolute -right-10 top-0 h-44 w-44 rounded-full bg-primary/10 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl"
          />

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent">Current academic track</p>
              <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {education.degree}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                {education.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {education.focus.map((item, index) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="rounded-full border border-border bg-secondary/70 px-4 py-2 text-sm text-foreground/90"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {infoCards.map(({ label, value, Icon }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, duration: 0.5 }}
                  className="glass rounded-2xl p-5"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{label}</p>
                      <p className="mt-2 text-sm font-medium leading-6 text-foreground">{value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.36, duration: 0.5 }}
                className="glass rounded-2xl p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
                    <BrainCircuit className="h-5 w-5 text-primary-foreground" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Focus areas</p>
                    <p className="mt-2 text-sm font-medium leading-6 text-foreground">
                      Full stack development, MERN stack, and system design.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
