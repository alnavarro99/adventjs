/*
 * En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.
 * Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.
 * Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.
 */

/*
```ts
const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]

const gifts = ['libro', 'ps5']
const materials = 'psli'

manufacture(gifts, materials) // []
```
  */

import { manufacture } from './manufacture'

describe('Manufacture TDD', () => {
  test('Scenario 1:', () => {
    expect(manufacture(['tren', 'oso', 'pelota'], 'tronesa')).toStrictEqual([
      'tren',
      'oso',
    ])
    expect(manufacture(['juego', 'puzzle'], 'jlepuz')).toStrictEqual(['puzzle'])
    expect(manufacture(['libro', 'ps5'], 'psli')).toStrictEqual([])
  })
})
