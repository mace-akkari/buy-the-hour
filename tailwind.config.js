/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1A1A1A",
        accent: "#3B82F6",
        primary: "#3B82F6",
        text: "#F5F5F5",
        muted: "#9CA3AF",
        "muted-foreground": "#9CA3AF",
      },
    },
  },
  plugins: [],
};
