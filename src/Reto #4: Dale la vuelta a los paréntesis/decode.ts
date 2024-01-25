// TODO: #fail #adventjs
export const revertInner = (message: string): string => {
  if (!message.match(/(\(.*\))/g)) {
    return message
  } else {
    const match = message.match(/\([^()]+\)/g)
    const res = message.split(match?.join('') ?? '').copyWithin(0, 0)
    if (match && (match?.length ?? 0) > 1) {
      return revertInner(
        res[0] +
          match.map((el) => revertInner(el)).join('') +
          res[res.length - 1]
      )
    } else {
      const textInner = message.match(/\(.*\)/g)?.join('')
      const res = message.split(textInner ?? '').copyWithin(0, 0)
      return (
        res[0] +
        revertInner(textInner?.slice(1, textInner.length - 1) ?? '')
          .split('')
          .reverse()
          .join('') +
        res[res.length - 1]
      )
    }
  }
}

export const decode = (message: string): string => {
  const spaceSeparator = message.split(' ')
  const res: string[] = []
  for (const val of spaceSeparator) {
    res.push(revertInner(val))
  }
  return res.join(' ')
}
