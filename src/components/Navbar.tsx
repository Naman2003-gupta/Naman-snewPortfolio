import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { profile } from "@/data/portfolio";
import { ThemeToggle } from "@/components/ThemeToggle";

const mainSections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
];

const moreSections = [
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "ai-brief", label: "AI Brief" },
];

const allSections = [...mainSections, ...moreSections, { id: "contact", label: "Contact" }];

export const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    allSections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setActive(id),
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
    setDropdownOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-[14px] z-50 flex justify-center px-4"
      >
        <motion.nav
          className={cn(
            "w-full max-w-5xl relative overflow-visible rounded-full border bg-background/80 text-foreground shadow-md transition-all duration-300 backdrop-blur-xl",
            "border-border/70 dark:border-white/10 dark:bg-[#0f172a]/60 dark:text-foreground",
            scrolled && "bg-background/95 shadow-xl backdrop-blur-3xl dark:bg-[#0f172a]/80 dark:border-white/15"
          )}
        >
          <div className="relative flex items-center justify-between px-6 py-3">
            <div className="flex min-w-[140px] items-center">
              <motion.button
                onClick={() => scrollTo("hero")}
                className="flex items-center gap-2 text-left text-sm font-display font-semibold tracking-tight"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-primary text-xs font-bold text-primary-foreground shadow-glow">
                  NG
                </span>
                <span className="hidden sm:flex sm:flex-col">
                  <span>{profile.name}</span>
                  <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                    {profile.shortTitle}
                  </span>
                </span>
              </motion.button>
            </div>

            <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex">
              <ul className="flex items-center gap-8">
                {mainSections.map((section, index) => (
                  <motion.li
                    key={section.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  >
                    <button
                      onClick={() => scrollTo(section.id)}
                      className={cn(
                        "relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ease-out",
                        active === section.id
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-cyan-400",
                      )}
                    >
                      <span className="relative">{section.label}</span>
                      <motion.span
                        className="absolute bottom-1 left-2 h-0.5 bg-gradient-primary origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: active === section.id ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </button>
                  </motion.li>
                ))}

                <motion.li
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-cyan-400"
                  >
                    More
                    <motion.div
                      animate={{ rotate: dropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-3 w-3" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-full mt-2 w-48 rounded-xl border border-border/70 bg-background/95 backdrop-blur-md p-2 shadow-xl dark:border-white/10 dark:bg-[#0f172a]/90"
                      >
                        {moreSections.map((section, index) => (
                          <motion.button
                            key={section.id}
                            onClick={() => scrollTo(section.id)}
                            className="w-full rounded-lg px-3 py-2 text-left text-sm text-muted-foreground transition-colors hover:bg-white/10 hover:text-cyan-400"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05, duration: 0.3 }}
                          >
                            {section.label}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              </ul>
            </div>

            <div className="flex min-w-[140px] items-center justify-end gap-3">
              <motion.a
                href="https://github.com/Naman2003-gupta"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
                className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-cyan-400 hover:ring-2 hover:ring-cyan-400/20"
              >
                <Github className="h-4 w-4" />
              </motion.a>

              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
                className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-cyan-400 hover:ring-2 hover:ring-cyan-400/20"
              >
                <ThemeToggle />
              </motion.div>

              <motion.button
                onClick={() => scrollTo("contact")}
                className="rounded-full bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow transition-all duration-300 hover:scale-103 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:ring-2 hover:ring-cyan-400/30"
                whileHover={{ scale: 1.03 }}
              >
                Contact
              </motion.button>

              <button
                onClick={() => setMobileOpen(true)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-cyan-400 lg:hidden"
              >
                <Menu className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/75 backdrop-blur-md dark:bg-[#0f172a]/60 lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 h-full w-80 bg-background/95 backdrop-blur-lg border-l border-border/70 p-6 dark:bg-[#0f172a]/90 dark:border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-lg font-display font-semibold">Menu</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:text-cyan-400"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <nav className="space-y-2">
                {allSections.map((section, index) => (
                  <motion.button
                    key={section.id}
                    onClick={() => scrollTo(section.id)}
                    className={cn(
                      "w-full rounded-xl px-4 py-3 text-left text-base font-medium transition-colors",
                      active === section.id
                        ? "bg-white/10 text-cyan-400"
                        : "text-muted-foreground hover:bg-white/10 hover:text-cyan-400",
                    )}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    {section.label}
                  </motion.button>
                ))}
              </nav>

              <div className="mt-8 flex items-center gap-4">
                <motion.a
                  href="https://github.com/Naman2003-gupta"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground hover:text-cyan-400 hover:ring-2 hover:ring-cyan-400/20"
                >
                  <Github className="h-5 w-5" />
                </motion.a>

                <motion.div
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground hover:text-cyan-400 hover:ring-2 hover:ring-cyan-400/20"
                >
                  <ThemeToggle />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};