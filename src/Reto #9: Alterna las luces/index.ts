type lights = '🔴' | '🟢'
const type: { readonly red: lights; readonly green: lights } = {
  red: '🔴',
  green: '🟢',
} as const

export const adjustLights = (lights: readonly lights[]): number => {
  let gChanges = 0
  let rChanges = 0
  const glist = createLights(type.green, lights.length)
  const rlist = createLights(type.red, lights.length)

  for (let i = 0; i < lights.length; i++) {
    if (lights[i] !== glist[i]) ++gChanges
    if (lights[i] !== rlist[i]) ++rChanges
  }

  return Math.min(...[rChanges, gChanges])
}

export const createLights = (light: lights, length: number): readonly lights[] => {
  if (length > 0) {
    const list: lights[] = Array<lights>(length).fill(light).copyWithin(length, 0)
    return list.map((el, i) => (i % 2 === 0 ? el : light === type.red ? type.green : type.red))
  } else return []
}
