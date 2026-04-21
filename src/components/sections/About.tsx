import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { BriefcaseBusiness, MapPin, Rocket, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import { profile, quickFacts, stats } from "@/data/portfolio";

const factIcons = [MapPin, BriefcaseBusiness, Rocket, Sparkles];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const display = useTransform(motionValue, (latest) => latest.toFixed(0));

  useEffect(() => {
    if (!inView) {
      return;
    }

    const controls = animate(motionValue, value, { duration: 1.5, ease: "easeOut" });
    return controls.stop;
  }, [inView, motionValue, value]);

  return (
    <span className="font-display text-4xl font-bold sm:text-5xl">
      <motion.span ref={ref}>{display}</motion.span>
      <span className="text-gradient">{suffix}</span>
    </span>
  );
};

export const About = () => {
  return (
    <section id="about" className="scroll-mt-nav py-24">
      <div className="container max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">About me</p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Building polished products with <span className="text-gradient">frontend precision</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass glow-border rounded-[2rem] p-8"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Profile summary</p>
            <div className="mt-6 space-y-4 text-sm leading-8 text-muted-foreground sm:text-base">
              {profile.summary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4">
            {quickFacts.map((fact, index) => {
              const Icon = factIcons[index % factIcons.length];
              return (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="glass rounded-2xl p-5"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                        {fact.label}
                      </p>
                      <p className="mt-2 text-sm font-medium leading-6 text-foreground">
                        {fact.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
