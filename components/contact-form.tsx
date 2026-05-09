"use client";

import { Send } from "lucide-react";
import { MouseEvent, useState } from "react";

const projectTypes = ["Build SaaS", "Rescue & Optimize", "Add AI", "AI Orchestration", "Workflow Automation", "Other"];
const budgetRanges = ["$1K-$5K", "$5K-$10K", "$10K-$100K", "$100K+", "Not Sure"];
const fieldClass = "w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-base text-white outline-none backdrop-blur-xl transition placeholder:text-zinc-600 focus:border-cyan-400 focus:shadow-[0_0_24px_rgba(0,212,255,0.18)]";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [buttonOffset, setButtonOffset] = useState({ x: 0, y: 0 });

  function handleMagnet(event: MouseEvent<HTMLButtonElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    setButtonOffset({ x: x * 0.18, y: y * 0.28 });
  }

  return (
    <form
      className="glass-card gradient-border rounded-[2rem] p-6 shadow-2xl shadow-cyan-950/20 md:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
        event.currentTarget.reset();
      }}
    >
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
      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 font-semibold text-white shadow-xl shadow-cyan-500/20 transition-transform duration-150 ease-out hover:shadow-violet-500/25 md:w-auto"
        style={{ transform: `translate(${buttonOffset.x}px, ${buttonOffset.y}px)` }}
        onMouseMove={handleMagnet}
        onMouseLeave={() => setButtonOffset({ x: 0, y: 0 })}
      >
        <Send className="h-5 w-5" /> Send Message
      </button>
      {sent ? (
        <div role="status" className="mt-5 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-base text-emerald-100">
          Thanks — your message is ready for follow-up. For urgent projects, email ark@arkdev.io directly.
        </div>
      ) : null}
    </form>
  );
}
