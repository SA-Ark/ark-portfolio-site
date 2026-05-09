import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="text-base font-medium text-white">Built with Next.js, TypeScript, Rust, and Tailwind CSS</p>
          <p className="mt-2 text-sm text-zinc-500">© 2026 Arko. Production AI systems from rescue to revenue.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link aria-label="GitHub" href="https://github.com/SA-Ark" className="rounded-full border border-white/10 p-3 text-zinc-300 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:text-white">
            <Github className="h-5 w-5" />
          </Link>
          <Link aria-label="LinkedIn" href="https://www.linkedin.com/in/arkchakrabarti" className="rounded-full border border-white/10 p-3 text-zinc-300 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:text-white">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link aria-label="Twitter/X" href="https://x.com/arkchakrabarti" className="rounded-full border border-white/10 p-3 text-zinc-300 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:text-white">
            <Twitter className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
