import Link from "next/link";
import { profile } from "@/lib/content";
import ThemeToggle from "./ThemeToggle";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Stack" },
  { href: "#infra", label: "This site" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-shell items-center justify-between gap-6 px-6 py-4 md:px-10">
        <Link
          href="#top"
          className="font-mono text-xs uppercase tracking-[0.08em] text-fg transition-colors hover:text-accent"
        >
          {profile.name}
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-4 sm:gap-7">
          <ul className="hidden items-center gap-7 sm:flex">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="font-mono text-[11.5px] uppercase tracking-[0.06em] text-muted transition-colors hover:text-fg"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <a
            href={"mailto:" + profile.email}
            className="rounded-full border border-line px-3.5 py-[7px] font-mono text-[11.5px] uppercase tracking-[0.06em] transition-colors hover:border-fg hover:bg-fg hover:text-bg"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}
