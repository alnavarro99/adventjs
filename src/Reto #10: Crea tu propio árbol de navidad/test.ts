/**
 * ¡Vaya idea ha tenido Sam Elfman! Quiere ofrecer un servicio que te crea un árbol de Navidad 🎄 personalizado en cuestión de segundos.
 * - Para crearlo nos pasan una cadena de caracteres para formar el árbol y un número que indica la altura del mismo.
 * - Cada carácter de la cadena representa un adorno del árbol, y vamos utilizándolos de forma cíclica hasta llegar a la altura indicada. Como mínimo siempre nos pasarán uno.
 * - Debemos devolver un string multilínea con el árbol de Navidad formado con los adornos, la altura indicada más una última línea con el tronco formado por el carácter | en el centro y, finalmente, un salto de línea \n.
 */

import { createChristmasTree } from '.'

describe('First Find Repeat', () => {
  test('SC: primary cases', () => {
    expect(createChristmasTree('123', 4)).toBe(result1)
    expect(createChristmasTree('*@o', 3)).toBe(result2)
  })
})

const result1 = `   1
  2 3
 1 2 3
1 2 3 1
   |
`

const result2 = `  *
 @ o
* @ o
  |
`
