export const manufacture = (gifts: string[], materials: string): string[] => {
  const res: boolean[] = []
  for (const val of gifts) {
    const exp = val
      .split('')
      .map((el) => `(?=.*${el})`)
      .join('')
    const regex = new RegExp(exp)
    res.push(regex.test(materials))
  }
  return gifts.filter((_, i) => res[i])
}
