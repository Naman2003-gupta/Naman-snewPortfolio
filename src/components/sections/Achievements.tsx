import { motion } from "framer-motion";
import {
  Binary,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Mic,
  Rocket,
  Trophy,
} from "lucide-react";
import { achievements } from "@/data/portfolio";

const icons = {
  leetcode: Binary,
  delivery: Trophy,
  seminar: Mic,
  university: GraduationCap,
  freelance: BriefcaseBusiness,
  startup: Rocket,
} as const;

export const Achievements = () => {
  return (
    <section id="achievements" className="scroll-mt-nav py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">Achievements</p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Momentum in <span className="text-gradient">numbers and outcomes</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {achievements.map((achievement, index) => {
            const Icon = icons[achievement.id as keyof typeof icons] ?? Code2;
            return (
              <motion.article
                key={achievement.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="glass glow-border relative overflow-hidden rounded-3xl p-6"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-24 bg-gradient-primary opacity-10 blur-2xl"
                />
                <div className="relative">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </span>
                  <p className="mt-6 font-display text-4xl font-bold tracking-tight text-gradient">
                    {achievement.value}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold">{achievement.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
