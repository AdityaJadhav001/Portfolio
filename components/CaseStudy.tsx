import type { CaseStudy as CaseStudyType } from "@/lib/content";
import ArchitectureDiagram from "./ArchitectureDiagram";
import { Shell, Label } from "./Shell";

export default function CaseStudy({ study }: { study: CaseStudyType }) {
  return (
    <section id="work" aria-labelledby={study.slug + "-title"}>
      <Shell className="pb-10 pt-20 md:pt-[88px]">
        <div className="flex flex-wrap items-baseline justify-between gap-6">
          <Label>{study.eyebrow}</Label>
          <p className="font-mono text-[11px] tracking-[0.06em] text-faint">{study.period}</p>
        </div>

        <h2
          id={study.slug + "-title"}
          className="mt-5 max-w-[22ch] text-balance font-display text-d2 font-light"
        >
          {study.title}
        </h2>

        <div className="mt-11 grid grid-cols-1 gap-10 md:grid-cols-[1.15fr_1fr] md:gap-14">
          <div>
            <Label accent>Problem</Label>
            {study.problem.map((p) => (
              <p key={p.slice(0, 24)} className="mt-3 text-pretty text-[17.5px] leading-relaxed text-fg/85">
                {p}
              </p>
            ))}
            <ul className="mt-6 flex flex-wrap gap-2">
              {study.stack.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-line px-3 py-1.5 font-mono text-[11.5px] text-muted"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:border-l md:border-line md:pl-8">
            <Label>My role</Label>
            <p className="mt-3 text-pretty leading-relaxed text-muted">{study.role}</p>

            {study.facts.map((fct) => (
              <div key={fct.label} className="mt-6">
                <Label>{fct.label}</Label>
                <p className="mt-3 whitespace-pre-line font-mono text-[13px] leading-loose text-muted">
                  {fct.value}
                </p>
              </div>
            ))}

            {study.metrics.length > 0 ? (
              <dl className="mt-6 grid grid-cols-2 gap-4">
                {study.metrics.map((m) => (
                  <div key={m.label}>
                    <dt className="font-mono text-label uppercase text-faint">{m.label}</dt>
                    <dd className="mt-1 font-display text-3xl">{m.value}</dd>
                    {m.note ? <p className="font-mono text-[11px] text-faint">{m.note}</p> : null}
                  </div>
                ))}
              </dl>
            ) : null}
          </div>
        </div>
      </Shell>

      <Shell className="pb-20 pt-6 md:pb-[88px]">
        <ArchitectureDiagram stages={study.stages} note={study.diagramNote} />
        <ul className="mt-6 flex flex-wrap gap-3">
          {study.links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-block rounded-full border border-line px-5 py-3 text-sm transition-colors hover:border-fg"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </Shell>
    </section>
  );
}
