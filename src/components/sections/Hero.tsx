import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { profile, heroHighlights, heroPhrases } from "@/data/portfolio";
import {
  SiExpress,
  SiFramer,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const techIcons = [
  { Icon: SiReact, color: "#61dafb", x: "8%", y: "22%", delay: 0 },
  { Icon: SiNextdotjs, color: "hsl(var(--foreground))", x: "84%", y: "18%", delay: 0.4 },
  { Icon: SiNodedotjs, color: "#3c873a", x: "12%", y: "76%", delay: 0.9 },
  { Icon: SiMongodb, color: "#47a248", x: "83%", y: "72%", delay: 0.2 },
  { Icon: SiTailwindcss, color: "#38bdf8", x: "6%", y: "50%", delay: 0.6 },
  { Icon: SiFramer, color: "#ff5ea0", x: "90%", y: "45%", delay: 1.1 },
  { Icon: SiTypescript, color: "#3178c6", x: "22%", y: "10%", delay: 0.3 },
  { Icon: SiExpress, color: "hsl(var(--foreground))", x: "74%", y: "84%", delay: 0.7 },
  { Icon: SiJavascript, color: "#f7df1e", x: "30%", y: "84%", delay: 0.5 },
  { Icon: SiGit, color: "#f1502f", x: "65%", y: "10%", delay: 1.4 },
];

const Typed = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = heroPhrases[index % heroPhrases.length];
    const completedTyping = !deleting && text === phrase;
    const completedDeleting = deleting && text === "";
    const speed = completedTyping ? 1200 : deleting ? 38 : 72;

    const timeout = window.setTimeout(() => {
      if (completedTyping) {
        setDeleting(true);
        return;
      }

      if (completedDeleting) {
        setDeleting(false);
        setIndex((value) => value + 1);
        return;
      }

      setText(
        deleting
          ? phrase.slice(0, text.length - 1)
          : phrase.slice(0, text.length + 1),
      );
    }, speed);

    return () => window.clearTimeout(timeout);
  }, [deleting, index, text]);

  return (
    <span className="text-gradient">
      {text}
      <span className="animate-blink">|</span>
    </span>
  );
};

export const Hero = () => {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-[15%] h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-float" />
        <div className="absolute right-[8%] top-[40%] h-80 w-80 rounded-full bg-accent/20 blur-3xl animate-float-slow" />
        <div className="absolute left-[40%] bottom-[5%] h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-float" />
      </div>

      <div aria-hidden className="absolute inset-0 -z-10 hidden md:block">
        {techIcons.map(({ Icon, color, x, y, delay }, index) => (
          <motion.div
            key={`${x}-${y}-${index}`}
            className="absolute"
            style={{ left: x, top: y, color }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.88, y: 0 }}
            transition={{ delay: 0.3 + delay, duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, 4, 0] }}
              transition={{ duration: 5.4 + delay, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-2xl glass p-3 shadow-elegant"
            >
              <Icon size={24} />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-glow-accent" />
            {profile.availability}
          </span>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-accent" />
            <span>{profile.location}</span>
          </div>

          <h1 className="mt-4 font-display text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            {profile.name}
          </h1>

          <p className="mt-4 text-base font-medium text-foreground/80 sm:text-lg">
            {profile.title}
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-6 text-sm text-foreground/80 sm:text-base">
            <span className="text-muted-foreground">Currently building as a </span>
            <Typed />
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              onClick={(event) => {
                event.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-secondary"
            >
              Contact Naman
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {heroHighlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="glass rounded-2xl p-5 text-left sm:text-center"
              >
                <div className="mb-3 inline-flex rounded-full bg-secondary/70 p-2">
                  <Sparkles className="h-4 w-4 text-accent" />
                </div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-medium text-foreground">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
