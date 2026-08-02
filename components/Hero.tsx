import { profile } from "@/lib/content";
import { Shell } from "./Shell";

const links = [
  { href: profile.resume, label: "Résumé", external: true },
  { href: profile.github, label: "GitHub", external: true },
  { href: profile.linkedin, label: "LinkedIn", external: true },
];

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title">
      <Shell className="pb-16 pt-20 md:pb-[72px] md:pt-24">
        <p className="flex items-center gap-2.5 font-mono text-label uppercase text-accent">
          <span
            aria-hidden="true"
            className="h-[7px] w-[7px] rounded-full bg-accent shadow-[0_0_0_4px_color-mix(in_oklab,var(--accent)_18%,transparent)]"
          />
          {profile.availability}
        </p>

        <h1 id="hero-title" className="mt-6 max-w-[19ch] text-balance font-display text-d1 font-light">
          {profile.headline}
        </h1>

        <p className="mt-8 max-w-[58ch] text-pretty text-lg leading-relaxed text-muted md:text-[19px]">
          {profile.intro}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="rounded-full bg-fg px-[22px] py-3.5 text-sm text-bg transition-colors hover:bg-accent"
          >
            Read the case study
          </a>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-[22px] py-3.5 text-sm transition-colors hover:border-fg"
            >
              {l.label}
            </a>
          ))}
        </div>
      </Shell>
    </section>
  );
}
