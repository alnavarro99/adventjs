export const calculateTime = (deliveries: string[]): string => {
  const result = deliveries
    .map((time) => {
      const [HH, mm, ss] = time.split(':')
      return parseInt(HH) * 60 * 60 + parseInt(mm) * 60 + parseInt(ss)
    })
    .reduce((acc, time) => (acc += time))

  const date = new Date()
  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(Math.abs(7 * 60 * 60 - result))
  const sign: '+' | '-' = 7 * 60 * 60 - result > 0 ? '-' : '+'

  return (
    (sign === '+' ? '' : sign) +
    `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      .split(':')
      .map((el) => {
        if (el.length < 2) return `0${el}`
        else return el
      })
      .join(':')
  )
}
