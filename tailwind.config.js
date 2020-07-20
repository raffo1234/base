module.exports = {
  purge: ["./node_modules/@ableco/baseline/dist/baseline.esm.js"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#fff",
      black: "#000",
      background: "#191E33",
      primary: {
        base: "#5A67ED",
        dark: "#0b3054",
        light: "#c1dbf4",
      },
      secondary: {
        base: "#70ba86",
        dark: "#517e75",
        light: "#d8eed6",
      },
      tertiary: {
        base: "#e48b38",
        dark: "#be620d",
        light: "#fbd6b4",
      },
      neutral: {
        100: "#f6f8f9",
        200: "#e5e9ec",
        300: "#3C3F53",
        400: "#909ca3",
        500: "#61676c",
        600: "#414a51",
        700: "#333333",
        800: "#111111",
      },
      system: {
        success: "#59cd64",
        alert: "#d2240b",
        warning: "#ffcd5f",
        info: "#c7e4ff",
      },
      icon: {
        size: "16px",
        color: "green",
      },
    },
    height: {
      header: "56px",
      body: "calc(100vh - 56px)",
    },
  },
  variants: [
    "responsive",
    "group-hover",
    "focus-within",
    "first",
    "last",
    "odd",
    "even",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled",
  ],
};
