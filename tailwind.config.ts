import type { Config } from "tailwindcss";

export default {

  safelist: [
    { pattern: /^gap-/},
    { pattern: /^w-/},
    { pattern: /^h-/},
    { pattern: /^text-/},
    { pattern: /^bg-/},
  ],

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
} satisfies Config;
