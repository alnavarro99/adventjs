/**
 * Están encendiendo las luces de Navidad 🎄 en la ciudad y, como cada año, ¡hay que arreglarlas!
 * Las luces son de dos colores: 🔴 y 🟢 . Para que el efecto sea el adecuado, siempre deben estar alternadas. Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.
 * Nos han pedido que escribamos una función adjustLights que, dado un array de strings con el color de cada luz (representados con los emojis 🔴 para el rojo y 🟢 para el verde), devuelva el número mínimo de luces que hay que cambiar para que estén los colores alternos.
 */

type lights = '🔴' | '🟢'
const type: { readonly red: lights; readonly green: lights } = {
  red: '🔴',
  green: '🟢',
} as const

export const adjustLights = jest.fn((lights: readonly lights[]): number => {
  let gChanges = 0
  let rChanges = 0
  const glist = createLights(type.green, lights.length)
  const rlist = createLights(type.red, lights.length)

  for (let i = 0; i < lights.length; i++) {
    if (lights[i] !== glist[i]) ++gChanges
    if (lights[i] !== rlist[i]) ++rChanges
  }

  return Math.min(...[rChanges, gChanges])
})

export const createLights = jest.fn((light: lights, length: number): readonly lights[] => {
  if (length > 0) {
    const list: lights[] = Array<lights>(length).fill(light).copyWithin(length, 0)
    return list.map((el, i) => (i % 2 === 0 ? el : light === type.red ? type.green : type.red))
  } else return []
})

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
