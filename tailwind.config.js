module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      custom: [
        "Calibre",
        "San Francisco",
        "SF Pro Text",
        "-apple-system",
        "system-ui",
        "sans-serif",
      ],
    },
    filter: {
      // defaults to {}
      none: "none",
      grayscale: "grayscale(1)",
      invert: "invert(1)",
      sepia: "sepia(1)",
    },
    backdropFilter: {
      // defaults to {}
      none: "none",
      blur: "blur(20px)",
    },
    extend: {
      colors: {
        navy: "#0A192F",
        navy100: "#0E192D",
        navy200: "#15223E",
        navy300: "#0D192E",
      },
    },
  },
  variants: {
    extend: {
      filter: ["responsive"], // defaults to ['responsive']
      backdropFilter: ["responsive"], // defaults to ['responsive']
      animation: ["motion-safe", "hover", "group-hover"],
    },
  },
  plugins: [require("tailwindcss-filters")],
};
