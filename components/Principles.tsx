import { principles } from "@/lib/content";

export default function Principles() {
  return (
    <section aria-label="How I work" className="border-y border-line">
      <div className="mx-auto grid max-w-shell grid-cols-1 px-6 md:grid-cols-3 md:px-10">
        {principles.map((p, i) => (
          <div
            key={p.id}
            className={
              "border-line py-9 md:py-11 " +
              (i < principles.length - 1 ? "border-b md:border-b-0 md:border-r " : "") +
              (i === 0 ? "md:pr-10" : i === principles.length - 1 ? "md:pl-10" : "md:px-10")
            }
          >
            <p className="font-mono text-label uppercase text-faint">
              {p.id} — {p.title}
            </p>
            <p className="mt-3.5 text-pretty text-[17px] leading-relaxed text-fg/90">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
