/** @type {import("lint-staged").Config} */
const config = {
  '*.ts': ['prettier --write', 'eslint --fix'],
}

export default config
