/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-color": "#706BCF",
        "base-bg": "#f5f5f5",
      },
      boxShadow: {
        "out-shadow": "0 4px 4px 0px rgba(0, 0, 0, 0.25)",
        "inner-shadow": "inset 0 5px 4px 0 rgba(0, 0, 0, 0.25)",
      },
      borderRadius: {
        "base-radius": "10px",
      },
    },
  },
  plugins: [],
};
