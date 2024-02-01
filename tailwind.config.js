/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "786px",
      lg: "976px",
      xl: "1280px",
    },
    extend: {},
  },
  plugins: [],
};
