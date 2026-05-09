"use client";

import { Send } from "lucide-react";
import { useState } from "react";

const projectTypes = ["Build SaaS", "Rescue & Optimize", "Add AI", "AI Orchestration", "Workflow Automation", "Other"];
const budgetRanges = ["$1K-$5K", "$5K-$10K", "$10K-$100K", "$100K+", "Not Sure"];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-blue-950/20 md:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
        event.currentTarget.reset();
      }}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-base font-medium text-zinc-200">Name</span>
          <input required name="name" className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400" placeholder="Your name" />
        </label>
        <label className="space-y-2">
          <span className="text-base font-medium text-zinc-200">Email</span>
          <input required type="email" name="email" className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400" placeholder="you@company.com" />
        </label>
        <label className="space-y-2">
          <span className="text-base font-medium text-zinc-200">Company</span>
          <input name="company" className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400" placeholder="Company name" />
        </label>
        <label className="space-y-2">
          <span className="text-base font-medium text-zinc-200">Project Type</span>
          <select name="projectType" className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white outline-none transition focus:border-blue-400" defaultValue="">
            <option value="" disabled>Select a project type</option>
            {projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
          </select>
        </label>
        <label className="space-y-2 md:col-span-2">
          <span className="text-base font-medium text-zinc-200">Budget Range</span>
          <select name="budget" className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white outline-none transition focus:border-blue-400" defaultValue="">
            <option value="" disabled>Select a range</option>
            {budgetRanges.map((range) => <option key={range} value={range}>{range}</option>)}
          </select>
        </label>
        <label className="space-y-2 md:col-span-2">
          <span className="text-base font-medium text-zinc-200">Message</span>
          <textarea required name="message" rows={7} className="w-full resize-none rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400" placeholder="Tell me about what you want to build, rescue, automate, or add AI to." />
        </label>
      </div>
      <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 font-semibold text-white shadow-xl shadow-blue-500/20 transition hover:-translate-y-1 md:w-auto">
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
