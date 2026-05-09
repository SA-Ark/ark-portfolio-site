"use client";

import { motion } from "framer-motion";
import { GitBranch, Github, Loader2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type GitHubEvent = {
  id: string;
  type: string;
  repo?: { name: string };
  created_at: string;
};

function relativeTime(date: string) {
  const diff = Date.now() - new Date(date).getTime();
  const minutes = Math.max(1, Math.round(diff / 60000));
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.round(hours / 24)}d ago`;
}

function label(type: string) {
  return type.replace(/Event$/, "").replace(/([a-z])([A-Z])/g, "$1 $2");
}

export function GitHubActivity() {
  const [events, setEvents] = useState<GitHubEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    fetch("https://api.github.com/users/SA-Ark/events?per_page=5", { headers: { Accept: "application/vnd.github+json" } })
      .then((response) => {
        if (!response.ok) throw new Error("GitHub API failed");
        return response.json() as Promise<GitHubEvent[]>;
      })
      .then((data) => {
        if (!active) return;
        setEvents(data.slice(0, 5));
        setFailed(false);
      })
      .catch(() => {
        if (!active) return;
        setFailed(true);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-card gradient-border h-full rounded-[1.75rem] p-6"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">GitHub</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Recent Activity</h2>
        </div>
        <Github className="h-7 w-7 text-zinc-400" />
      </div>

      {loading ? (
        <div className="mt-6 flex items-center gap-3 text-base text-zinc-300"><Loader2 className="h-5 w-5 animate-spin text-cyan-300" /> Loading activity…</div>
      ) : failed || events.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-base font-semibold text-emerald-100">
          Active contributor — recent work available on GitHub.
        </div>
      ) : (
        <div className="mt-6 space-y-3">
          {events.map((event) => (
            <div key={event.id} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
              <GitBranch className="mt-1 h-4 w-4 flex-none text-cyan-300" />
              <div className="min-w-0">
                <p className="text-base font-semibold text-white">{label(event.type)}</p>
                <p className="truncate text-sm text-zinc-400">{event.repo?.name ?? "SA-Ark"} · {relativeTime(event.created_at)}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <Link href="https://github.com/SA-Ark" className="mt-6 inline-flex text-base font-semibold text-cyan-300 hover:text-cyan-100">
        View profile →
      </Link>
    </motion.div>
  );
}
