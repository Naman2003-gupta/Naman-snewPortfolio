import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import {
  projects,
  projectCategories,
  type Project,
  type ProjectCategory,
} from "@/data/projects";
import { cn } from "@/lib/utils";

type Filter = "All" | ProjectCategory;

const filters: Filter[] = ["All", ...projectCategories];

const ProjectMonogram = ({ value, label }: { value: string; label?: string }) => {
  const isImage = /\.(png|jpe?g|svg|webp)$/i.test(value);

  return (
    <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/10 text-3xl font-display font-bold tracking-[0.2em] text-white shadow-2xl backdrop-blur-sm">
      <div className="absolute inset-2 rounded-[1.2rem] border border-white/15" />
      {isImage ? (
        <img
          src={value}
          alt={label ?? "Project image"}
          className="relative h-full w-full rounded-[1.2rem] object-cover"
        />
      ) : (
        <span className="relative">{value}</span>
      )}
    </div>
  );
};

const FrontendCard = ({ project }: { project: Project }) => {
  const isImage = /\.(png|jpe?g|svg|webp)$/i.test(project.image);

  return (
    <motion.div className="group relative h-full overflow-hidden rounded-2xl glass glow-border">
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-primary rounded-t-2xl">
        {isImage ? (
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <ProjectMonogram value={project.image} label={project.title} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
      <CardBody project={project} />
    </motion.div>
  );
};

const BackendCard = ({ project }: { project: Project }) => {
  const isImage = /\.(png|jpe?g|svg|webp)$/i.test(project.image);

  return (
    <div className="h-full overflow-hidden rounded-2xl glass">
      {isImage && (
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-primary rounded-t-2xl">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      )}
      <div className="border-b border-border/50 bg-background/40 px-4 py-2 font-mono text-[11px] text-muted-foreground">
        <span className="mr-2 inline-flex gap-1">
          <span className="h-2 w-2 rounded-full bg-destructive/70" />
          <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
          <span className="h-2 w-2 rounded-full bg-accent/70" />
        </span>
        ~/{project.id}
      </div>
      <div className="px-5 pt-4 font-mono text-xs text-accent">
        <TypingLine text={`$ launch ${project.title.toLowerCase().replace(/\s+/g, "-")}`} />
      </div>
      <CardBody project={project} />
    </div>
  );
};

const TypingLine = ({ text }: { text: string }) => (
  <motion.span
    initial={{ width: 0 }}
    whileInView={{ width: "100%" }}
    viewport={{ once: true }}
    transition={{ duration: 1.1, ease: "linear" }}
    className="inline-block overflow-hidden whitespace-nowrap align-bottom"
  >
    {text}
  </motion.span>
);

const DatabaseCard = ({ project }: { project: Project }) => {
  const [flip, setFlip] = useState(false);
  const isImage = /\.(png|jpe?g|svg|webp)$/i.test(project.image);

  return (
    <div
      className="group h-full [perspective:1200px]"
      onMouseEnter={() => setFlip(true)}
      onMouseLeave={() => setFlip(false)}
    >
      <motion.div
        animate={{ rotateY: flip ? 180 : 0 }}
        transition={{ duration: 0.7 }}
        className="relative h-full min-h-[340px] [transform-style:preserve-3d]"
      >
        <div className="absolute inset-0 overflow-hidden rounded-2xl glass [backface-visibility:hidden]">
          <div className="relative aspect-[16/10] bg-gradient-primary rounded-t-2xl overflow-hidden">
            {isImage ? (
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <ProjectMonogram value={project.image} label={project.title} />
              </div>
            )}
          </div>
          <CardBody project={project} compact />
        </div>
        <div className="absolute inset-0 flex flex-col justify-between rounded-2xl glass p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div>
            <p className="mb-2 text-xs uppercase tracking-widest text-accent">Data layer</p>
            <h4 className="font-display text-xl font-semibold">{project.title}</h4>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">{project.description}</p>
          </div>
          <CardActions project={project} />
        </div>
      </motion.div>
    </div>
  );
};

const LanguageCard = ({ project }: { project: Project }) => (
  <div className="group relative h-full overflow-hidden rounded-2xl glass">
    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-primary opacity-10 blur-2xl" />
    <div className="relative flex h-full flex-col p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            {project.language ?? "language based"}
          </p>
          <h4 className="mt-2 font-display text-xl font-semibold">{project.title}</h4>
        </div>
        <ProjectMonogram value={project.image} label={project.title} />
      </div>
      <p className="mt-5 text-sm leading-7 text-muted-foreground">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border bg-secondary/60 px-2 py-0.5 text-[10px] text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-auto pt-6">
        <CardActions project={project} />
      </div>
    </div>
  </div>
);

const DefaultCard = ({ project }: { project: Project }) => {
  const isImage = /\.(png|jpe?g|svg|webp)$/i.test(project.image);

  return (
    <div className="group h-full overflow-hidden rounded-2xl glass">
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-primary rounded-t-2xl">
        {isImage ? (
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <ProjectMonogram value={project.image} label={project.title} />
          </div>
        )}
      </div>
      <CardBody project={project} />
    </div>
  );
};

const CardBody = ({ project, compact = false }: { project: Project; compact?: boolean }) => (
  <div className={cn("flex flex-col gap-4 p-5", compact && "p-4")}>
    <div>
      <div className="mb-3 flex flex-wrap gap-1.5">
        {project.categories.map((category) => (
          <span
            key={`${project.id}-${category}`}
            className="rounded-full border border-border bg-secondary/60 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
          >
            {category}
          </span>
        ))}
      </div>
      <h4 className="font-display text-lg font-semibold">{project.title}</h4>
      <p className="mt-2 text-sm leading-7 text-muted-foreground">{project.description}</p>
    </div>
    <div className="flex flex-wrap gap-1.5">
      {project.tech.map((item) => (
        <span
          key={item}
          className="rounded-full border border-border bg-secondary/60 px-2 py-0.5 text-[10px] text-muted-foreground"
        >
          {item}
        </span>
      ))}
    </div>
    {!compact && (
      <div className="mt-4 opacity-0 translate-y-2 transition-all duration-400 ease-out group-hover:opacity-100 group-hover:translate-y-0">
        <button className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full hover:bg-accent/30 transition-colors">
          Explore Project
        </button>
      </div>
    )}
    <p className="text-xs uppercase tracking-[0.25em] text-accent">{project.status}</p>
    {!compact && <CardActions project={project} />}
  </div>
);

const CardActions = ({ project }: { project: Project }) => {
  if (!project.codeUrl && !project.demoUrl) {
    return (
      <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
        <FolderGit2 className="h-3.5 w-3.5" />
        Details available on request
      </div>
    );
  }

  return (
    <div className="mt-2 flex items-center gap-2">
      {project.codeUrl && (
        <a
          href={project.codeUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Code for ${project.title}`}
          className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs hover:bg-secondary"
        >
          <FolderGit2 className="h-3.5 w-3.5" />
          Code
        </a>
      )}
      {project.demoUrl && (
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Live demo for ${project.title}`}
          className="inline-flex items-center gap-1 rounded-full bg-gradient-primary px-3 py-1 text-xs text-primary-foreground transition-transform hover:scale-105"
        >
          <ArrowUpRight className="h-3.5 w-3.5" />
          Demo
        </a>
      )}
    </div>
  );
};

const renderCard = (project: Project) => {
  switch (project.primaryCategory) {
    case "Frontend":
      return <FrontendCard project={project} />;
    case "Backend":
      return <BackendCard project={project} />;
    case "Database":
      return <DatabaseCard project={project} />;
    case "Language Based":
      return <LanguageCard project={project} />;
    default:
      return <DefaultCard project={project} />;
  }
};

export const Projects = () => {
  const [filter, setFilter] = useState<Filter>("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((project) => project.categories.includes(filter)),
    [filter],
  );

  const visibleProjects = useMemo(
    () => (showAll ? filteredProjects : filteredProjects.slice(0, 6)),
    [filteredProjects, showAll],
  );

  return (
    <section id="projects" className="scroll-mt-nav py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">Selected work</p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="text-gradient">Projects</span>
          </h2>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => {
                setFilter(item);
                setShowAll(false);
              }}
              className={cn(
                "relative rounded-full px-4 py-1.5 text-sm transition-colors",
                filter === item
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {filter === item && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-gradient-primary shadow-glow"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{item}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={`${project.id}-${filter}`}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{
                  scale: 1.06,
                  y: -12,
                  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
                }}
                transition={{ delay: index * 0.05, duration: 0.45 }}
                className="relative z-10 hover:z-50 hover:shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
              >
                {renderCard(project)}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length > 6 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="rounded-full border border-border bg-secondary/70 px-6 py-3 text-sm font-medium text-muted-foreground transition hover:border-white hover:text-foreground"
            >
              {showAll ? "Show less" : "View more"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
