import { Skeleton } from "@/components/skeleton";

export default function CaseStudyLoading() {
  return (
    <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-16 lg:grid-cols-[260px_1fr] lg:px-8">
      <aside className="hidden lg:block">
        <div className="sticky top-28 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
          <Skeleton className="h-4 w-28" />
          <div className="mt-6 space-y-3">
            {[0, 1, 2, 3, 4].map((item) => <Skeleton key={item} className="h-9 w-full rounded-xl" />)}
          </div>
        </div>
      </aside>
      <div className="space-y-8">
        <Skeleton className="h-12 w-3/4 rounded-2xl" />
        <Skeleton className="h-64 w-full rounded-[2rem]" />
        <div className="grid gap-5 md:grid-cols-2">
          {[0, 1, 2, 3].map((item) => <Skeleton key={item} className="h-40 rounded-[1.75rem]" />)}
        </div>
      </div>
    </div>
  );
}
