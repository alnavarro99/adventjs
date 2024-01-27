export const createChristmasTree = (ornaments: string, height: number): string => {
  if (height > 0) {
    const tree = Array(height).fill('')
    const list = ornaments.repeat(2 * (height + ornaments.length)).slice(0, sum(height))
    return (
      [
        ...tree.map(
          (_, i, array) =>
            ' '.repeat(array.length - 1 - i) +
            list
              .slice(sum(i), sum(i + 1))
              .replace(/./g, '$& ')
              .trim()
        ),
        ' '.repeat(tree.length - 1) + '|',
      ].join('\n') + '\n'
    )
  } else return '|\n'
}

export const sum = (n: number): number => {
  if (n === 1) return 1
  if (n <= 0) return 0
  return n + sum(n - 1)
}
