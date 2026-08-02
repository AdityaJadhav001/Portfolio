"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    setDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={dark === true}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="rounded-full border border-line px-3 py-[7px] font-mono text-[11px] uppercase tracking-[0.06em] text-muted transition-colors hover:border-fg hover:text-fg"
    >
      {dark === null ? "theme" : dark ? "light" : "dark"}
    </button>
  );
}
