/** @type {import("lint-staged").Config} */
module.exports = {
  "*.ts": ["prettier --write", "eslint"],
};
