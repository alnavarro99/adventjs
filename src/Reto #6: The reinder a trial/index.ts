const type = {
  left: '<',
  right: '>',
  both: '*',
} as const

export const maxDistance = (movements: string): number => {
  return Math.max(
    ...[
      Math.abs(count(movements, type.right) - count(movements, type.left)) + count(movements, type.both),
      Math.abs(count(movements, type.right) - count(movements, type.left)) - count(movements, type.both),
    ]
  )
}

export const count = (text: string, char: string): number => {
  let count = 0
  for (const val of text) {
    if (val === char) count++
  }
  return count
}
