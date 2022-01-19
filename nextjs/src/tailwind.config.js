module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "clr-section": "hsl(217, 54%, 11%)",
      "clr-card": "hsl(216, 50%, 16%)",
      "clr-primary": "hsl(215, 51%, 70%)",
      "clr-secondary": "hsl(178, 100%, 50%)",
      "clr-line": "hsl(215, 32%, 27%)",
      "clr-white": "hsl(0, 0%, 100%)",
    },
    screens: {
      xs: "18rem",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    backgroundImage: { eye: "url('../public/images/icon-view.svg')" },
    extend: {
      fontFamily: {
        heading: ["Outfit", "sans-serif"],
        body: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
