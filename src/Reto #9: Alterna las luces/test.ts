/**
 * Están encendiendo las luces de Navidad 🎄 en la ciudad y, como cada año, ¡hay que arreglarlas!
 * Las luces son de dos colores: 🔴 y 🟢 . Para que el efecto sea el adecuado, siempre deben estar alternadas. Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.
 * Nos han pedido que escribamos una función adjustLights que, dado un array de strings con el color de cada luz (representados con los emojis 🔴 para el rojo y 🟢 para el verde), devuelva el número mínimo de luces que hay que cambiar para que estén los colores alternos.
 */

import { adjustLights, createLights } from '.'

describe('TDD: primary functions', () => {
  test('SC1: number of changes -> primary cases', () => {
    expect(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])).toBe(1)
    expect(adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢'])).toBe(1)
    expect(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])).toBe(2)
    expect(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])).toBe(0)
    expect(adjustLights(['🔴', '🔴', '🔴'])).toBe(1)
  })
  test('SC2: number of changes -> especial cases', () => {
    expect(adjustLights([])).toBe(0)
    expect(adjustLights(['🟢'])).toBe(0)
    expect(adjustLights(['🔴'])).toBe(0)
    expect(adjustLights(['🔴', '🟢'])).toBe(0)
    expect(adjustLights(['🟢', '🔴'])).toBe(0)
    expect(adjustLights(['🔴', '🔴'])).toBe(1)
    expect(adjustLights(['🟢', '🟢'])).toBe(1)
  })
})

describe('TDD: secondary functions', () => {
  test('SC1: create list of lights -> odd cases', () => {
    expect(createLights('🟢', 5)).toStrictEqual(['🟢', '🔴', '🟢', '🔴', '🟢'])
    expect(createLights('🔴', 5)).toStrictEqual(['🔴', '🟢', '🔴', '🟢', '🔴'])
  })
  test('SC2: create list of lights -> eveen cases', () => {
    expect(createLights('🟢', 8)).toStrictEqual(['🟢', '🔴', '🟢', '🔴', '🟢', '🔴', '🟢', '🔴'])
    expect(createLights('🔴', 8)).toStrictEqual(['🔴', '🟢', '🔴', '🟢', '🔴', '🟢', '🔴', '🟢'])
  })
  test('SC3: create list of lights -> especial cases', () => {
    expect(createLights('🟢', 1)).toStrictEqual(['🟢'])
    expect(createLights('🔴', 1)).toStrictEqual(['🔴'])
    expect(createLights('🟢', 2)).toStrictEqual(['🟢', '🔴'])
    expect(createLights('🔴', 2)).toStrictEqual(['🔴', '🟢'])
    expect(createLights('🟢', 0)).toStrictEqual([])
    expect(createLights('🔴', 0)).toStrictEqual([])
  })
})
