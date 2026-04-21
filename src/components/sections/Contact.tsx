import { motion } from "framer-motion";
import { useState } from "react";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Loader2,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { profile } from "@/data/portfolio";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const contactCards = [
  { label: "Name", value: profile.name, Icon: BadgeCheck },
  { label: "Role", value: profile.shortTitle, Icon: BriefcaseBusiness },
  { label: "Availability", value: profile.availability, Icon: Send },
  { label: "Location", value: profile.location, Icon: MapPin },
];

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill out every field.");
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("contact_messages").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    });
    setLoading(false);

    if (error) {
      toast.error("Could not send your message. Please try again.");
      return;
    }

    toast.success("Message sent successfully.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="scroll-mt-nav py-24">
      <div className="container max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">Let us build something</p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="text-gradient">Get in touch</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass glow-border rounded-[2rem] p-6"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Contact details</p>
            <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight">
              {profile.name}
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {profile.tagline}
            </p>

            <div className="mt-6 grid gap-4">
              {contactCards.map(({ label, value, Icon }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  className="glass rounded-2xl p-4"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
                      <Icon className="h-4 w-4 text-primary-foreground" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                        {label}
                      </p>
                      <p className="mt-2 text-sm font-medium leading-6 text-foreground">
                        {value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass glow-border space-y-5 rounded-[2rem] p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <FloatingInput
                label="Your name"
                value={form.name}
                onChange={(value) => setForm({ ...form, name: value })}
              />
              <FloatingInput
                label="Your email"
                type="email"
                value={form.email}
                onChange={(value) => setForm({ ...form, email: value })}
              />
            </div>
            <FloatingInput
              label="Tell Naman about your project"
              textarea
              value={form.message}
              onChange={(value) => setForm({ ...form, message: value })}
            />

            <button
              type="submit"
              disabled={loading}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105 disabled:opacity-60"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              )}
              {loading ? "Sending..." : "Send message"}
            </button>
          </motion.form>
        </div>

        <p className="mt-12 text-center text-xs text-muted-foreground">
          Copyright {new Date().getFullYear()} {profile.name}. Built with React, Tailwind CSS, and Framer Motion.
        </p>
      </div>
    </section>
  );
};

const FloatingInput = ({
  label,
  value,
  onChange,
  type = "text",
  textarea = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  textarea?: boolean;
}) => {
  const id = label.replace(/\s+/g, "-").toLowerCase();
  const sharedClassName =
    "peer w-full rounded-xl border border-border bg-background/40 px-4 pb-2 pt-5 text-sm outline-none transition-all focus:border-primary focus:shadow-glow placeholder-transparent";

  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={id}
          placeholder={label}
          value={value}
          rows={5}
          onChange={(event) => onChange(event.target.value)}
          className={sharedClassName}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={label}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={sharedClassName}
        />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-2 text-[11px] uppercase tracking-widest text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[11px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-accent"
      >
        {label}
      </label>
    </div>
  );
};
