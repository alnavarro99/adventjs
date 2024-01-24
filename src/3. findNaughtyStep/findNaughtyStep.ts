export const findNaughtyStep = (original: string, modified: string): string => {
  const cond = original.length > modified.length
  const major: string = cond ? original : modified
  const minor: string = !cond ? original : modified
  return major
    .split('')
    .filter((el) => !minor.includes(el))
    .join('')
}
