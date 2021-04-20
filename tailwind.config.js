const appBarHeight = "3rem";

module.exports = {
  purge: [],
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
        red: {
          DEFAULT: "#990000",
          light: "#ffe6e6",
        },
        white: "#ffffff",
        gray: {
          DEFAULT: "#aaaaaa",
          light: "#dddddd",
          lighter: "#fafafa",
          dark: "#777777",
          darker: "#333333",
        },
        purple: {
          DEFAULT: "#e6e6ff",
          dark: "#cdcde6",
          darker: "#650131",
        },
        yellow: {
          DEFAULT: "#ffd900",
          light: "#FFFCE8",
        },
      },
      minHeight: {
        "10": "10vh",
        "20": "20vh",
        "30": "30vh",
        "40": "40vh",
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
      maxHeight: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      minWidth: { "1/2": "50%", "1/3": "30%", "2/5": "40%", "50": "50vw" },
      maxWidth: {
        hero: "35rem",
        "1/2": "50%",
        "1/3": "33.33333%",
        "1/4": "25%",
        "3/4": "75%",
      },
      fontFamily: {
        title: ["Cuprum", "sans-serif"],
        compact: ["Barlow Condensed", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
      },
      padding: {
        appbar: appBarHeight,
        full: "100%",
        pc: "53.9562924%",
        phone: "163.474026%",
        quadro: "76.57082%",
        video: "56.25%",
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
    extend: { backgroundColor: ["active"], opacity: ["disabled"] },
  },
  plugins: [],
};
