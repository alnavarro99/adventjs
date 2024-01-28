/** @type {import("lint-staged").Config} */
const config = {
  '*.ts': ['prettier --write', 'eslint'],
}

export default config
