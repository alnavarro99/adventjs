/**
 * En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.
 * Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.
 * Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.
 */

/**
```ts
const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

const original = 'stepfor'
const modified = 'stepor'
findNaughtyStep(original, modified) // 'f'

const original = 'abcde'
const modified = 'abcde'
findNaughtyStep(original, modified) // ''
```
**/

import { findNaughtyStep } from './findNaughtyStep'

describe('TDD: Find Naughty Step', () => {
  test('Scenary 1: original is grether length than modified', () => {
    expect(findNaughtyStep('abcd', 'abcde')).toBe('e')
  })
  test('Scenary 1: original is lessy length than modified', () => {
    expect(findNaughtyStep('stepfor', 'stepor')).toBe('f')
  })
  test('Scenary 1: original is equal length than modified', () => {
    expect(findNaughtyStep('abcde', 'abcde')).toBe('')
  })
})
