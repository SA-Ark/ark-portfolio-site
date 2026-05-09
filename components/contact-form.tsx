"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { Check, Loader2, Send, XCircle } from "lucide-react";
import { FormEvent, MouseEvent, useState } from "react";

const projectTypes = ["Build SaaS", "Rescue & Optimize", "Add AI", "AI Orchestration", "Workflow Automation", "Other"];
const budgetRanges = ["$1K-$5K", "$5K-$10K", "$10K-$100K", "$100K+", "Not Sure"];
const fieldClass = "w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-base text-white outline-none backdrop-blur-xl transition placeholder:text-zinc-600 focus:border-cyan-400 focus:shadow-[0_0_24px_rgba(0,212,255,0.18)]";
const formAction = "https://formspree.io/f/xpweqjro";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.35 });

  function handleMagnet(event: MouseEvent<HTMLButtonElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    x.set(Math.max(-4, Math.min(4, offsetX * 0.08)));
    y.set(Math.max(-4, Math.min(4, offsetY * 0.08)));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch(formAction, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Form submission failed");
      setStatus("success");
      setMessage("Thanks — your message was sent. I’ll respond with next steps shortly.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong sending the form. Please email ark@ark.chakrakali.com directly.");
    }
  }

  return (
    <>
    <form className="glass-card gradient-border rounded-[2rem] p-6 shadow-2xl shadow-cyan-950/20 md:p-8" onSubmit={handleSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-base font-medium text-zinc-200">Name</span>
          <input required name="name" className={fieldClass} placeholder="Your name" />
        </label>
        <label className="space-y-2">
          <span className="text-base font-medium text-zinc-200">Email</span>
          <input required type="email" name="email" className={fieldClass} placeholder="you@company.com" />
        </label>
        <label className="space-y-2">
          <span className="text-base font-medium text-zinc-200">Company</span>
          <input name="company" className={fieldClass} placeholder="Company name" />
        </label>
        <label className="space-y-2">
          <span className="text-base font-medium text-zinc-200">Project Type</span>
          <select name="projectType" className={fieldClass} defaultValue="">
            <option value="" disabled>Select a project type</option>
            {projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
          </select>
        </label>
        <label className="space-y-2 md:col-span-2">
          <span className="text-base font-medium text-zinc-200">Budget Range</span>
          <select name="budget" className={fieldClass} defaultValue="">
            <option value="" disabled>Select a range</option>
            {budgetRanges.map((range) => <option key={range} value={range}>{range}</option>)}
          </select>
        </label>
        <label className="space-y-2 md:col-span-2">
          <span className="text-base font-medium text-zinc-200">Message</span>
          <textarea required name="message" rows={7} className={`${fieldClass} resize-none`} placeholder="Tell me about what you want to build, rescue, automate, or add AI to." />
        </label>
      </div>
      <motion.button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-base font-semibold text-white shadow-xl shadow-cyan-500/20 transition disabled:cursor-wait disabled:opacity-70 hover:shadow-violet-500/25 md:w-auto"
        style={{ x: springX, y: springY }}
        onMouseMove={handleMagnet}
        onMouseLeave={() => { x.set(0); y.set(0); }}
      >
        {status === "submitting" ? <Loader2 className="h-5 w-5 animate-spin" /> : status === "success" ? <Check className="h-5 w-5" /> : <Send className="h-5 w-5" />}
        {status === "submitting" ? "Sending..." : status === "success" ? "Sent" : "Send Message"}
      </motion.button>
      <AnimatePresence>
        {message ? (
          <motion.div
            role="status"
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            className={`mt-5 flex items-center gap-3 rounded-2xl border px-4 py-3 text-base ${status === "success" ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-100" : "border-red-400/30 bg-red-400/10 text-red-100"}`}
          >
            {status === "success" ? (
              <motion.span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400 text-[#050510]" initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 260, damping: 18 }}>
                <Check className="h-5 w-5" />
              </motion.span>
            ) : (
              <XCircle className="h-6 w-6 flex-none" />
            )}
            <span>{message}</span>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </form>
    <AnimatePresence>
      {message ? (
        <motion.div
          role="status"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          className={`fixed bottom-5 right-5 z-[80] max-w-sm rounded-2xl border px-4 py-3 text-base shadow-2xl backdrop-blur-xl ${status === "success" ? "border-emerald-400/30 bg-emerald-500/15 text-emerald-50 shadow-emerald-950/40" : "border-red-400/30 bg-red-500/15 text-red-50 shadow-red-950/40"}`}
        >
          {message}
        </motion.div>
      ) : null}
    </AnimatePresence>
    </>
  );
}
