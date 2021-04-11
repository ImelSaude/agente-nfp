const appBarHeight = "3rem";

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('/images/fundo.png')",
        "hero-small": "url('/images/fundo-small.png')",
      }),
      backgroundSize: {
        "fit-height": "auto 100%",
      },
      fontSize: {
        logo: ["1.3rem", "1"],
      },
      colors: {
        lighttransparent: "rgba(255, 255, 255, 0.64)",
        darktransparent: "rgba(0, 0, 0, 0.64)",
        red: "#990000",
        white: "#ffffff",
        lightgray: "#dddddd",
        purple: {
          DEFAULT: "#e6e6ff",
          dark: "#cdcde6",
        },
        yellow: "#ffd900",
      },
      minHeight: {
        "10": "30vh",
        "20": "30vh",
        "30": "30vh",
        "50": "50vh",
        "60": "60vh",
        "3em": "3em",
        "4em": "4em",
        "6em": "6em",
        "8em": "8em",
        "12em": "12em",
        inherit: "inherit",
        appbar: appBarHeight,
      },
      minWidth: { "1/2": "50%", "1/3": "30%", "2/5": "40%" },
      maxWidth: { hero: "35rem", "1/2": "50%" },
      fontFamily: {
        title: ["Cuprum", "sans-serif"],
        compact: ["Barlow Condensed", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
      },
      padding: {
        appbar: appBarHeight,
      },
      margin: {
        "2em": "2em",
        "3em": "3em",
        "4em": "4em",
        "6em": "6em",
        "8em": "8em",
        "12em": "12em",
      },
      zIndex: {
        "0": 0,
        "10": 10,
        "20": 20,
        "30": 30,
        "40": 40,
        "50": 50,
        "25": 25,
        "50": 50,
        "75": 75,
        "100": 100,
        auto: "auto",
      },
    },
  },
  variants: {
    extend: { backgroundColor: ["active"] },
  },
  plugins: [],
};
