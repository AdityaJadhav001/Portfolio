"use client";

import { useState } from "react";
import type { Stage } from "@/lib/content";

const fallback = {
  title: "Five stages, from raw estate to a priced risk report",
  body: "Hover or focus any stage above to read the decision behind it and what it cost. Each note is the reasoning, not the résumé line.",
  tradeoff: "",
};

export default function ArchitectureDiagram({
  stages,
  note,
}: {
  stages: readonly Stage[];
  note?: string;
}) {
  const [active, setActive] = useState<string | null>(null);
  const current = stages.find((s) => s.key === active) ?? fallback;

  return (
    <div>
      <div className="mb-2 flex flex-wrap items-baseline justify-between gap-4">
        <p className="font-mono text-label uppercase text-accent">
          Architecture — hover a stage for the decision behind it
        </p>
        {note ? <p className="font-mono text-[11px] text-faint">{note}</p> : null}
      </div>

      <div className="overflow-hidden rounded-2xl border border-line bg-surface">
        <ul className="grid grid-cols-2 gap-px bg-line sm:grid-cols-3 lg:grid-cols-5">
          {stages.map((s) => (
            <li key={s.key} className="bg-bg">
              <button
                type="button"
                onMouseEnter={() => setActive(s.key)}
                onFocus={() => setActive(s.key)}
                onClick={() => setActive(s.key)}
                aria-pressed={active === s.key}
                className="h-full w-full px-5 pb-7 pt-6 text-left transition-colors hover:bg-surface focus-visible:bg-surface"
              >
                <span className="block font-mono text-[10.5px] tracking-[0.1em] text-faint">
                  {s.index}
                </span>
                <span className="mt-2.5 block text-base">{s.name}</span>
                <span className="mt-1.5 block whitespace-pre-line font-mono text-[11.5px] leading-relaxed text-faint">
                  {s.sub}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div
          aria-live="polite"
          className="grid min-h-[104px] grid-cols-1 items-start gap-4 border-t border-line px-7 pb-7 pt-7 md:grid-cols-[104px_1fr] md:gap-8"
        >
          <p className="pt-1 font-mono text-label uppercase text-faint">Decision</p>
          <div>
            <p className="text-pretty font-display text-2xl leading-snug">{current.title}</p>
            <p className="mt-2.5 max-w-[78ch] text-pretty text-base leading-relaxed text-muted">
              {current.body}
            </p>
            {current.tradeoff ? (
              <p className="mt-3 font-mono text-xs leading-relaxed text-accent">{current.tradeoff}</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
