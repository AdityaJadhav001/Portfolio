import type { Config } from "tailwindcss";

/**
 * Colour is driven entirely by CSS custom properties (see app/globals.css) so
 * light and dark are one token set with two values, not two Tailwind palettes.
 */
export default {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        fg: "var(--fg)",
        muted: "var(--muted)",
        faint: "var(--faint)",
        line: "var(--line)",
        accent: "var(--accent)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Fluid editorial scale: three display steps, everything else fixed.
        d1: ["clamp(2.875rem, 7.4vw, 6.5rem)", { lineHeight: "0.98", letterSpacing: "-0.025em" }],
        d2: ["clamp(2.125rem, 4.6vw, 3.875rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        d3: ["clamp(1.875rem, 3.4vw, 2.875rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        label: ["0.6875rem", { lineHeight: "1.2", letterSpacing: "0.1em" }],
      },
      maxWidth: { shell: "1240px" },
    },
  },
  plugins: [],
} satisfies Config;
