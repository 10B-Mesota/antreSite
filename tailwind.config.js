module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        test: "url('/test.jpg')",
      },
      colors: {
        portocaliu: "#ffa31a",
        gri: "#808080",
        accent: "#292929",
        negru: "#1b1b1b",
      },
    },
  },
  plugins: [],
};
