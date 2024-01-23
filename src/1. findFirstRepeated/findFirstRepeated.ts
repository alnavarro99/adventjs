export const findFirstRepeated = (gifts: number[]): number => {
  const set = new Set(gifts)
  if (set.size === gifts.length) return -1
  else {
    return gifts.find((el, i) => el !== Array.from(set.values())?.[i]) ?? -1
  }
}
