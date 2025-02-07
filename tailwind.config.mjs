/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "paynes-gray": "#576a7c",
        "english-violet": "#433556",
        "harvest-gold": "#de930c",
        "picton-blue": "#4ca9e4",
        maize: "#f8e23d",
        "raw-umber": "#965936",
      },
    },
  },
  plugins: [],
};
