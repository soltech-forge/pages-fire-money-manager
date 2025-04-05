import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        black: "#262626",
        primary: "#ff9800", 
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(-0.125turn, #ff9800,#FCE597 60%, #FDC36F 65%, #ff9800)',
      },
      zIndex: {
        99999: "99999",
        999: "999",
        10: "10",
        1: "1",
      },
      maxWidth: {
        "c-1390": "86.875rem",
        "c-1315": "82.188rem",
        "c-1280": "80rem",
        "c-1235": "77.188rem",
        "c-1154": "72.125rem",
        "c-1016": "63.5rem",
      },
      boxShadow: {
        "solid-l": "0px 10px 120px 0px rgba(45, 74, 170, 0.1)",
        "solid-2": "0px 2px 10px rgba(122, 135, 167, 0.05)",
        "solid-3": "0px 6px 90px rgba(8, 14, 40, 0.04)",
        "solid-4": "0px 6px 90px rgba(8, 14, 40, 0.1)",
        "solid-5": "0px 8px 24px rgba(45, 74, 170, 0.08)",
        "solid-6": "0px 8px 24px rgba(10, 16, 35, 0.08)",
        "solid-7": "0px 30px 50px rgba(45, 74, 170, 0.1)",
        "solid-8": "0px 12px 120px rgba(45, 74, 170, 0.06)",
        "solid-9": "0px 12px 30px rgba(45, 74, 170, 0.06)",
        "solid-10": "0px 8px 30px rgba(45, 74, 170, 0.06)",
        "solid-11": "0px 6px 20px rgba(45, 74, 170, 0.05)",
        "solid-12": "0px 2px 10px rgba(0, 0, 0, 0.05)",
        "solid-13": "0px 2px 19px rgba(0, 0, 0, 0.05)",
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
