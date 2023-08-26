/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        windowBtnClose: "rgba(255,94,87,255)",
        windowBtnMinimize: "rgba(255,188,46,255)",
        windowBtnMaximize: "rgba(40,200,64,255)",
        windowBackground: "rgb(225,225,225)",
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
