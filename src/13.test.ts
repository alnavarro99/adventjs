/**
 * Los elfos están preparando la víspera de Navidad y necesitan tu ayuda para calcular si van sobrados o no de tiempo ⏳.
 * Para ello te pasan un array con la duración de cada entrega.
 * - El formato de la duración es HH:mm:ss,
 * - las entregas empiezan a las 00:00:00 y el límite de tiempo es 07:00:00.
 * Tu función debe devolver el tiempo que les faltará o el tiempo que les sobrará para terminar las entregas.
 * - El formato de la duración devuelta debe ser HH:mm:ss.
 * - Si terminan antes de las 07:00:00, el tiempo restante hasta las 07:00:00 debe ser mostrado con un signo negativo.
 * Por ejemplo, si sobran 1 hora y 30 minutos, devuelve -01:30:00
 */

export const calculateTime = jest.fn((deliveries: string[]): string => {
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
})

describe('TDD: calculate time functions', () => {
  test('SC: primary cases', () => {
    expect(calculateTime(['00:10:00', '01:00:00', '03:30:00'])).toBe('-02:20:00')
    expect(calculateTime(['02:00:00', '05:00:00', '00:30:00'])).toBe('00:30:00')
    expect(calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30'])).toBe('-05:29:00')
  })
})
