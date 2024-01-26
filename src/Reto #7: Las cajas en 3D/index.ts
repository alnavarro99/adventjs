export const drawGift = (size: number, symbol: string): string => {
  const type = {
    symbol,
    edge: '#',
    void: ' ',
  } as const

  const matrix: string[][] = Array(2 * size).fill(Array(2 * size).fill(type.void))

  let res = ''
  for (let y = 0; y < matrix.length - 1; y++) {
    for (let x = 0; x < matrix[y].length - 1; x++) {
      if (x + y >= size - 1 && x + y <= 2 * size + (size - 3)) {
        if (
          ((y >= size - 1 || x === 2 * (size - 1)) && (x === 0 || x === size - 1 || x === 2 * (size - 1))) || // horizontal
          ((x < size - 1 || y === 0) && (y === 0 || y === size - 1 || y === 2 * (size - 1))) || // vertical
          x + y === size - 1 ||
          x + y === 2 * size + (size - 3) || // diagonales esquinas
          (x >= size - 1 && x + y === size + (size - 2)) // diagonales intermedia
        ) {
          res += type.edge
        } else {
          res += type.symbol
        }
      } else {
        res += matrix[y][x]
      }
    }
    res = res.trimEnd() + '\n'
  }
  return res
}
