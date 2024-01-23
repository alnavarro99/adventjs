export const findFirstRepeated = (gifts: number[]): number => {
  const set = new Set(gifts)
  return gifts.find((el, i) => el !== Array.from(set.values())?.[i]) ?? -1
}
