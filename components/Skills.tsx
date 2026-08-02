import { layers } from "@/lib/content";
import { Shell, Label } from "./Shell";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="border-t border-line">
      <Shell className="pb-20 pt-[72px]">
        <h2 id="skills-title" className="sr-only">
          Stack by layer
        </h2>
        <Label>Stack, by layer — production only</Label>

        <div className="mt-7 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {layers.map((l) => (
            <div key={l.name} className="bg-bg px-6 pb-8 pt-7">
              <h3 className="font-display text-[22px]">{l.name}</h3>
              <ul className="mt-4 flex flex-col gap-2.5 font-mono text-[13.5px] text-muted">
                {l.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-5 max-w-[70ch] text-pretty text-[15px] leading-relaxed text-faint">
          Listed only where I&rsquo;ve shipped to production. Terraform, ECS and Lambda are on the
          learning list, not on this page — they go up the day something of mine runs on them.
        </p>
      </Shell>
    </section>
  );
}
