import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  ClipboardCopy,
  FileText,
  MessageSquareText,
  ScanSearch,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import {
  achievements,
  education,
  experience,
  profile,
  skills,
} from "@/data/portfolio";
import { projects } from "@/data/projects";

const recruiterBenefits = [
  {
    title: "Fast screening",
    description: "Hiring teams can scan your strongest signals in under a minute.",
    Icon: ScanSearch,
  },
  {
    title: "Easy sharing",
    description: "The markdown brief can be pasted into docs, ATS notes, and internal chats.",
    Icon: FileText,
  },
  {
    title: "AI friendly",
    description: "Recruiters can drop the structured brief into their own AI workflow for quick evaluation.",
    Icon: Bot,
  },
];

const recruiterPrompts = [
  "Summarize Naman Gupta for a MERN stack role.",
  "Which projects best prove frontend animation and backend API depth?",
  "Why is Naman a good fit for a full stack product engineering team?",
];

const copyToClipboard = async (value: string, successMessage: string) => {
  try {
    await navigator.clipboard.writeText(value);
    toast.success(successMessage);
  } catch {
    toast.error("Copy failed. Clipboard access is not available here.");
  }
};

export const RecruiterBrief = () => {
  const recruiterMarkdown = useMemo(() => {
    return [
      `# ${profile.name}`,
      ``,
      `**Title:** ${profile.title}`,
      `**Location:** ${profile.location}`,
      `**Availability:** ${profile.availability}`,
      `**Email:** ${profile.email}`,
      ``,
      `## About`,
      ...profile.summary.map((item) => `- ${item}`),
      ``,
      `## Education`,
      `- ${education.degree}, ${education.university}`,
      `- Status: ${education.status}`,
      `- Focus: ${education.focus.join(", ")}`,
      ``,
      `## Experience`,
      ...experience.map(
        (item) =>
          `- ${item.role} at ${item.company} (${item.period}): ${item.description}`,
      ),
      ``,
      `## Skills`,
      `### Frontend`,
      `- ${skills.frontend.map((item) => item.name).join(", ")}`,
      `### Backend`,
      `- ${skills.backend.map((item) => item.name).join(", ")}`,
      `### Database`,
      `- ${skills.database.map((item) => item.name).join(", ")}`,
      `### Tools`,
      `- ${skills.tools.map((item) => item.name).join(", ")}`,
      `### Programming Languages`,
      `- ${skills.languages.map((item) => item.name).join(", ")}`,
      ``,
      `## Projects`,
      ...projects.map(
        (item) =>
          `- ${item.title} [${item.categories.join(" / ")}]: ${item.description}`,
      ),
      ``,
      `## Achievements`,
      ...achievements.map((item) => `- ${item.value} ${item.title}`),
    ].join("\n");
  }, []);

  const recruiterPrompt = useMemo(
    () =>
      [
        "You are reviewing a developer profile for hiring.",
        "Use the markdown below to evaluate fit for full stack, MERN stack, and frontend-focused roles.",
        "",
        recruiterMarkdown,
      ].join("\n"),
    [recruiterMarkdown],
  );

  return (
    <section id="ai-brief" className="scroll-mt-nav py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">AI Hiring Add-on</p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Recruiter-friendly <span className="text-gradient">markdown brief</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            This gives hiring teams a structured, chatbot-ready summary of your portfolio so they
            can review your profile faster and share it internally with less friction.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass glow-border rounded-[2rem] p-6"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
                <Bot className="h-5 w-5 text-primary-foreground" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-accent">Why it works</p>
                <h3 className="font-display text-2xl font-semibold tracking-tight">
                  A themed recruiter copilot layer
                </h3>
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              {recruiterBenefits.map(({ title, description, Icon }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  className="glass rounded-2xl p-4"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary/80">
                      <Icon className="h-4 w-4 text-accent" />
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold">{title}</h4>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{description}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-secondary/40 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-accent">Suggested recruiter prompts</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {recruiterPrompts.map((prompt, index) => (
                  <motion.button
                    key={prompt}
                    type="button"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                    onClick={() => copyToClipboard(prompt, "Prompt copied for recruiter use.")}
                    className="rounded-full border border-border bg-background/60 px-4 py-2 text-left text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {prompt}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass glow-border overflow-hidden rounded-[2rem]"
          >
            <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">
                  naman-gupta-hiring-brief.md
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    copyToClipboard(recruiterMarkdown, "Markdown brief copied successfully.")
                  }
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/70 px-3 py-1.5 text-xs text-foreground transition-colors hover:bg-secondary"
                >
                  <ClipboardCopy className="h-3.5 w-3.5" />
                  Copy Markdown
                </button>
                <button
                  type="button"
                  onClick={() =>
                    copyToClipboard(recruiterPrompt, "AI recruiter prompt copied successfully.")
                  }
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-3 py-1.5 text-xs text-primary-foreground shadow-glow transition-transform hover:scale-105"
                >
                  <MessageSquareText className="h-3.5 w-3.5" />
                  Copy AI Prompt
                </button>
              </div>
            </div>

            <div className="relative">
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-24 bg-gradient-primary opacity-10 blur-2xl"
              />
              <pre className="relative max-h-[42rem] overflow-auto p-5 font-mono text-[12px] leading-7 text-foreground/90 sm:text-[13px]">
                <code>{recruiterMarkdown}</code>
              </pre>
            </div>

            <div className="border-t border-border/60 px-5 py-4">
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                This brief is generated from the same portfolio data powering the site, so it stays
                consistent with your live profile.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
