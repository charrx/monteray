/** @type {import('tailwindcss').Config} */
export default {
  ontent: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "mac-bg-pattern": "url('src/assets/images/desktop.jpg')",
      },
    },
  },
  plugins: [],
};
