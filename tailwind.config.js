// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "royal-blue": "#1E3A8A",
        "light-blue": "#60A5FA",
        "warm-gray": "#E5E7EB",
        "dark-gray": "#1F2937",
      },
    },
  },
  plugins: [],
};
