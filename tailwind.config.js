import { default as typography } from "@tailwindcss/typography";
import { default as daisyui } from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["{routes,islands,components}/**/*.{ts,tsx,js,jsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: ["corporate", "sunset"],
    darkTheme: "sunset",
  },
};
