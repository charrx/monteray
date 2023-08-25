/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        whiteish: "rgb(var(--color-whiteish) / <alpha-value>)",
      },
      padding: {
        2.2: "0.2rem",
      },
      backgroundImage: {
        "mac-desktop": "url('./src/assets/images/desktop.jpg')",
        "mac-lockscreen": "url('./src/assets/images/lockscreen.jpg')",
      },
    },
  },
  plugins: [],
};
