import { motion } from "framer-motion";
import { useState, type ComponentType, type CSSProperties } from "react";
import {
  Binary,
  Blocks,
  Code2,
  Coffee,
  Database,
  Layers3,
  Network,
  Server,
  ShieldCheck,
  Waypoints,
  Wrench,
} from "lucide-react";
import {
  SiBootstrap,
  SiDocker,
  SiExpress,
  SiFramer,
  SiGithub,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiPython,
  SiReact,
  SiRender,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { skills, type SkillItem } from "@/data/portfolio";

type IconComponent = ComponentType<{
  className?: string;
  size?: number;
  style?: CSSProperties;
}>;

type VisualSkill = SkillItem & {
  Icon: IconComponent;
  color: string;
};

const skillVisuals: Record<string, Omit<VisualSkill, "name" | "level">> = {
  "React.js": { Icon: SiReact, color: "#61dafb" },
  "Next.js": { Icon: SiNextdotjs, color: "hsl(var(--foreground))" },
  JavaScript: { Icon: SiJavascript, color: "#f7df1e" },
  TypeScript: { Icon: SiTypescript, color: "#3178c6" },
  HTML5: { Icon: SiHtml5, color: "#e34f26" },
  CSS3: { Icon: Layers3, color: "#1572b6" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#38bdf8" },
  Bootstrap: { Icon: SiBootstrap, color: "#7f4dd4" },
  "Framer Motion": { Icon: SiFramer, color: "#ff5ea0" },
  "Node.js": { Icon: SiNodedotjs, color: "#3c873a" },
  "Express.js": { Icon: SiExpress, color: "hsl(var(--foreground))" },
  "REST API Development": { Icon: Waypoints, color: "#22c55e" },
  "JWT Authentication": { Icon: ShieldCheck, color: "#06b6d4" },
  "MVC Architecture": { Icon: Blocks, color: "#8b5cf6" },
  MongoDB: { Icon: SiMongodb, color: "#47a248" },
  MySQL: { Icon: SiMysql, color: "#4479a1" },
  Mongoose: { Icon: SiMongoose, color: "#880000" },
  "Database Schema Design": { Icon: Network, color: "#f97316" },
  Git: { Icon: SiGit, color: "#f1502f" },
  GitHub: { Icon: SiGithub, color: "hsl(var(--foreground))" },
  Postman: { Icon: SiPostman, color: "#ff6c37" },
  "Docker (Basics)": { Icon: SiDocker, color: "#2496ed" },
  "Vercel Deployment": { Icon: SiVercel, color: "hsl(var(--foreground))" },
  "Render Deployment": { Icon: SiRender, color: "#7c3aed" },
  Python: { Icon: SiPython, color: "#ffd43b" },
  Java: { Icon: Coffee, color: "#f97316" },
  "C++": { Icon: Binary, color: "#2563eb" },
  SQL: { Icon: Database, color: "#06b6d4" },
};

const enhanceSkills = (items: SkillItem[]) =>
  items.map((item) => ({
    ...item,
    ...(skillVisuals[item.name] ?? { Icon: Code2, color: "hsl(var(--foreground))" }),
  })) satisfies VisualSkill[];

const frontendSkills = enhanceSkills(skills.frontend);
const backendSkills = enhanceSkills(skills.backend);
const databaseSkills = enhanceSkills(skills.database);
const toolSkills = enhanceSkills(skills.tools);
const languageSkills = enhanceSkills(skills.languages);

const SectionTitle = ({ eyebrow, title }: { eyebrow: string; title: string }) => (
  <div className="mb-12 text-center">
    <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
    <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
      <span className="text-gradient">{title}</span>
    </h2>
  </div>
);

const CategoryHeading = ({
  Icon,
  title,
  count,
}: {
  Icon: typeof Code2;
  title: string;
  count: number;
}) => (
  <div className="mb-5 flex items-center gap-3">
    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
      <Icon className="h-4 w-4 text-primary-foreground" />
    </span>
    <h3 className="font-display text-lg font-semibold">{title}</h3>
    <span className="rounded-full border border-border bg-secondary/60 px-2 py-0.5 text-[10px] text-muted-foreground">
      {count}
    </span>
  </div>
);

const FrontendTile = ({ skill, index }: { skill: VisualSkill; index: number }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, type: "spring", stiffness: 220, damping: 18 }}
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const px = (event.clientX - bounds.left) / bounds.width - 0.5;
        const py = (event.clientY - bounds.top) / bounds.height - 0.5;
        setTilt({ x: -py * 14, y: px * 14 });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ transform: `perspective(700px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      className="glass glow-border group relative flex aspect-square flex-col items-center justify-center gap-2 rounded-xl p-3"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 rounded-xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70"
        style={{ background: `radial-gradient(circle at center, ${skill.color}, transparent 65%)` }}
      />
      <skill.Icon
        size={28}
        style={{ color: skill.color }}
        className="transition-transform duration-300 group-hover:scale-110"
      />
      <span className="text-center text-[11px] font-medium leading-tight text-muted-foreground group-hover:text-foreground">
        {skill.name}
      </span>
      <span className="text-[10px] uppercase tracking-[0.2em] text-accent">{skill.level}%</span>
    </motion.div>
  );
};

const BackendTile = ({ skill, index }: { skill: VisualSkill; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -4 }}
    transition={{ delay: index * 0.08, duration: 0.5 }}
    className="glass relative flex aspect-square flex-col items-center justify-center gap-2 overflow-hidden rounded-xl p-3"
  >
    <skill.Icon size={30} style={{ color: skill.color }} />
    <span className="text-center text-xs font-medium">{skill.name}</span>
    <span className="font-mono text-[9px] text-accent">$ {skill.level}% stable</span>
    <motion.div
      aria-hidden
      className="absolute -bottom-px left-0 h-px w-full bg-gradient-to-r from-transparent via-accent to-transparent"
      animate={{ x: ["-100%", "100%"] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: index * 0.15 }}
    />
  </motion.div>
);

const DatabaseTile = ({ skill, index }: { skill: VisualSkill; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.85, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.06, y: -4 }}
    transition={{ delay: index * 0.06, type: "spring", stiffness: 220 }}
    className="relative aspect-square"
  >
    <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-xl bg-primary/20 blur-sm" />
    <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-xl bg-accent/10" />
    <div className="glass relative flex h-full w-full flex-col items-center justify-center gap-2 rounded-xl p-3">
      <skill.Icon size={28} style={{ color: skill.color }} />
      <span className="text-center text-[11px] font-medium leading-tight">{skill.name}</span>
      <div className="h-1.5 w-16 overflow-hidden rounded-full bg-secondary/80">
        <motion.div
          className="h-full rounded-full bg-gradient-primary"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08, duration: 0.7 }}
        />
      </div>
    </div>
  </motion.div>
);

const LanguageTile = ({ skill, index }: { skill: VisualSkill; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -6 }}
    transition={{ delay: index * 0.08, duration: 0.45 }}
    className="glass glow-border group relative overflow-hidden rounded-2xl p-5"
  >
    <motion.div
      aria-hidden
      className="absolute inset-x-0 top-0 h-16 bg-gradient-primary opacity-10"
      animate={{ x: ["-10%", "10%", "-10%"] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    />
    <div className="relative flex items-start justify-between gap-3">
      <div>
        <p className="font-display text-lg font-semibold">{skill.name}</p>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
          language stack
        </p>
      </div>
      <skill.Icon size={22} style={{ color: skill.color }} />
    </div>

    <div className="relative mt-6 h-2 overflow-hidden rounded-full bg-secondary/80">
      <motion.div
        className="h-full rounded-full bg-gradient-primary"
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.8 }}
      />
    </div>

    <div className="relative mt-4 flex items-center justify-between text-[11px] text-muted-foreground">
      <span>Comfort</span>
      <span>{skill.level}%</span>
    </div>
  </motion.div>
);

export const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-nav py-24">
      <div className="container">
        <SectionTitle eyebrow="What I work with" title="Skills and Stack" />

        <div className="mb-14">
          <CategoryHeading Icon={Code2} title="Frontend" count={frontendSkills.length} />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9">
            {frontendSkills.map((skill, index) => (
              <FrontendTile key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        <div className="mb-14">
          <CategoryHeading Icon={Server} title="Backend" count={backendSkills.length} />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {backendSkills.map((skill, index) => (
              <BackendTile key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        <div className="mb-14">
          <CategoryHeading Icon={Database} title="Database" count={databaseSkills.length} />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-4">
            {databaseSkills.map((skill, index) => (
              <DatabaseTile key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        <div className="mb-14">
          <CategoryHeading Icon={Wrench} title="Tools and Technologies" count={toolSkills.length} />
          <div className="glass relative h-44 overflow-hidden rounded-2xl">
            <div className="absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
            <div className="absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />
            <motion.div
              className="flex h-full items-center gap-12 px-12"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[...toolSkills, ...toolSkills].map((skill, index) => (
                <div key={`${skill.name}-${index}`} className="flex shrink-0 flex-col items-center gap-2">
                  <skill.Icon size={40} style={{ color: skill.color }} />
                  <span className="text-center text-xs text-muted-foreground">{skill.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div>
          <CategoryHeading Icon={Code2} title="Programming Languages" count={languageSkills.length} />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {languageSkills.map((skill, index) => (
              <LanguageTile key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
