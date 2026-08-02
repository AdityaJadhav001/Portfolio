import { profile } from "@/lib/content";
import { Shell } from "./Shell";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <Shell className="pb-10 pt-20">
        <h2 className="max-w-[16ch] text-balance font-display text-d1 font-light">
          Have something ambiguous that needs shipping?
        </h2>
        <ul className="mt-9 flex flex-wrap gap-3">
          <li>
            <a
              href={"mailto:" + profile.email}
              className="inline-block rounded-full bg-fg px-6 py-3.5 text-[15px] text-bg transition-colors hover:bg-accent"
            >
              {profile.email}
            </a>
          </li>
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border border-line px-6 py-3.5 text-[15px] transition-colors hover:border-fg"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border border-line px-6 py-3.5 text-[15px] transition-colors hover:border-fg"
            >
              GitHub
            </a>
          </li>
        </ul>
        <div className="mt-16 flex flex-wrap justify-between gap-5 border-t border-line pt-5 font-mono text-[11.5px] text-faint">
          <p>{profile.name} — {profile.location} · remote &amp; EU hours</p>
          <p>Next.js static export · S3 + CloudFront · Terraform · GitHub Actions OIDC</p>
        </div>
      </Shell>
    </footer>
  );
}
