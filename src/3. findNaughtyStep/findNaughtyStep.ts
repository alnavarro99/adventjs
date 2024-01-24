export const findNaughtyStep = (original: string, modified: string): string => {
  const symetricDifference = (setA: Set<string>, setB: Set<string>) => {
    const _difference = new Set(setA)
    for (const elem of setB) {
      if (_difference.has(elem)) {
        _difference.delete(elem)
      } else {
        _difference.add(elem)
      }
    }
    return _difference
  }
  return Array.from(
    symetricDifference(new Set(original), new Set(modified))
  ).join('')
}
