/** @type {import('tailwindcss').Config} */
export default {
  // Files Tailwind should scan for class names
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Custom font family used as default sans-serif
      fontFamily: {
        sans: ['"SN Pro"', "sans-serif"],
      },
    },
  },
  // No additional plugins used at the moment
  plugins: [],
};
