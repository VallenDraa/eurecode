/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  arrowParens: "avoid",
  trailingComma: "all",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  endOfLine: "auto",
};

module.exports = config;
