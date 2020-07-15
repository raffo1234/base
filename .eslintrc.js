module.exports = {
  root: true,
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
      },
    },
  },
  parser: "babel-eslint",
  extends: ["@ableco"],
};
