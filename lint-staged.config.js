/** @type {import("lint-staged").Config} */
const config = {
  "*.ts": ["prettier --writte", "eslint --fix"],
};

export default config;
