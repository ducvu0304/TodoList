/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 0px 2px 4px rgba(51, 51, 51, 0.3)',
      }
    },
  },
  plugins: [],
};
