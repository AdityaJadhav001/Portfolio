import { pipeline } from "@/lib/content";
import { Shell, Label } from "./Shell";

const facts = [
  ["iac", "terraform · s3 + cloudfront + oac + acm"],
  ["auth", "github oidc role — no long-lived keys"],
  ["cache", "immutable assets 1y · html no-cache"],
];

export default function SiteArchitecture() {
  return (
    <section id="infra" aria-labelledby="infra-title" className="border-t border-line bg-surface">
      <Shell className="grid grid-cols-1 gap-10 pb-20 pt-[72px] md:grid-cols-[1fr_1.1fr] md:gap-14">
        <div>
          <Label accent>This site is the proof</Label>
          <h2 id="infra-title" className="mt-4 text-balance font-display text-d3 font-light">
            Built, tested and deployed by the same pipeline I&rsquo;d give a client.
          </h2>
          <p className="mt-5 max-w-[52ch] text-pretty text-[16.5px] leading-relaxed text-muted">
            Next.js static export, pushed to S3 and served from CloudFront. Infrastructure is
            Terraform — bucket, distribution, OAC, certificate, DNS. Every push to{" "}
            <code className="font-mono text-[14.5px]">main</code> runs typecheck, lint and build,
            syncs the artefact, then invalidates the edge cache. No console clicking.
          </p>
          <p className="mt-4 max-w-[52ch] text-pretty text-[15px] leading-relaxed text-faint">
            Free-tier friendly: S3 storage and CloudFront&rsquo;s always-free tier cover a
            portfolio&rsquo;s traffic; Route 53 is the only line item.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-line bg-bg">
          <p className="flex items-center gap-2.5 border-b border-line px-4 py-3 font-mono text-[11.5px] text-faint">
            <span aria-hidden="true" className="h-[7px] w-[7px] rounded-full bg-[oklch(0.7_0.13_145)]" />
            .github/workflows/deploy.yml
          </p>
          <ol className="grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
            {pipeline.map((s) => (
              <li key={s.name} className="bg-bg px-3.5 py-4">
                <span className="block font-mono text-[11px] text-faint">{s.index}</span>
                <span className="mt-1.5 block font-mono text-[12.5px] text-fg/85">{s.name}</span>
                <span className="mt-1 block font-mono text-[11px] text-faint">{s.detail}</span>
              </li>
            ))}
          </ol>
          <dl className="border-t border-line px-4 py-4 font-mono text-xs leading-loose text-muted">
            {facts.map(([k, v]) => (
              <div key={k} className="flex gap-3">
                <dt className="w-16 shrink-0 text-faint">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
            <p className="text-faint">lighthouse — publish the real score after first deploy</p>
          </dl>
        </div>
      </Shell>
    </section>
  );
}
