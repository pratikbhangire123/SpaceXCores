/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkSpace: "#0F0F0F",
        space: "#232D3F",
      },
    },
  },
  plugins: [],
};
