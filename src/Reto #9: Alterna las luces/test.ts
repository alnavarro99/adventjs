/**
 * Están encendiendo las luces de Navidad 🎄 en la ciudad y, como cada año, ¡hay que arreglarlas!
 * Las luces son de dos colores: 🔴 y 🟢 . Para que el efecto sea el adecuado, siempre deben estar alternadas. Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.
 * Nos han pedido que escribamos una función adjustLights que, dado un array de strings con el color de cada luz (representados con los emojis 🔴 para el rojo y 🟢 para el verde), devuelva el número mínimo de luces que hay que cambiar para que estén los colores alternos.
 */

import { adjustLights, changeLights } from '.'

describe('TDD: adjust the lights', () => {
  test('SC1: lights changes', () => {
    expect(changeLights(['🟢', '🔴', '🟢', '🟢', '🟢'])).toStrictEqual(['🟢', '🔴', '🟢', '🔴', '🟢'])
    expect(changeLights(['🔴', '🔴', '🟢', '🔴', '🟢'])).toStrictEqual(['🔴', '🟢', '🔴', '🟢', '🔴'])
    expect(changeLights(['🔴', '🔴', '🟢', '🟢', '🔴'])).toStrictEqual(['🔴', '🟢', '🔴', '🟢', '🔴'])
    expect(changeLights(['🟢', '🔴', '🟢', '🔴', '🟢'])).toStrictEqual(['🟢', '🔴', '🟢', '🔴', '🟢'])
    expect(changeLights(['🔴', '🔴', '🔴'])).toBe(['🔴', '🟢', '🔴'])
  })
  test('SC2: number of changes', () => {
    expect(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])).toBe(1)
    expect(adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢'])).toBe(1)
    expect(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])).toBe(2)
    expect(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])).toBe(0)
    expect(adjustLights(['🔴', '🔴', '🔴'])).toBe(1)
  })
})
