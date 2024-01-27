/**
 * ¡Vaya idea ha tenido Sam Elfman! Quiere ofrecer un servicio que te crea un árbol de Navidad 🎄 personalizado en cuestión de segundos.
 * - Para crearlo nos pasan una cadena de caracteres para formar el árbol y un número que indica la altura del mismo.
 * - Cada carácter de la cadena representa un adorno del árbol, y vamos utilizándolos de forma cíclica hasta llegar a la altura indicada. Como mínimo siempre nos pasarán uno.
 * - Debemos devolver un string multilínea con el árbol de Navidad formado con los adornos, la altura indicada más una última línea con el tronco formado por el carácter | en el centro y, finalmente, un salto de línea \n.
 */

// asdasd
import { createChristmasTree, sum } from '.'

describe('TDD: create christmas tree', () => {
  test('SC1: primary cases', () => {
    expect(createChristmasTree('123', 4)).toBe(result1)
    expect(createChristmasTree('*@o', 3)).toBe(result2)
    expect(createChristmasTree('X', 3)).toBe(result3)
    expect(createChristmasTree('*', 3)).toBe('  *\n * *\n* * *\n  |\n')
    expect(createChristmasTree('ABC123', 9)).toBe(result4)
  })
  test('SC2: especial cases cases', () => {
    expect(createChristmasTree('*', 0)).toBe('|\n')
    expect(createChristmasTree('*', -10)).toBe('|\n')
  })
})

describe('TDD: create generator ornament list', () => {
  const generator = jest.fn((length: number, text: string): string => text.repeat(2 * (length + text.length)).slice(0, sum(length)))
  test('SC1: primary cases -> odd and even ornament and lengths', () => {
    expect(generator(4, '123')).toBe('1231231231')
    expect(generator(4, '1234')).toBe('1234123412')
    expect(generator(4, 'ABC')).toBe('ABCABCABCA')
    expect(generator(4, 'ABCD')).toBe('ABCDABCDAB')
    expect(generator(3, 'ABC')).toBe('ABCABC')
    expect(generator(3, 'ABCD')).toBe('ABCDAB')
    expect(generator(3, '123')).toBe('123123')
    expect(generator(3, '1234')).toBe('123412')
    expect(generator(2, 'ABC')).toBe('ABC')
    expect(generator(2, 'ABCD')).toBe('ABC')
    expect(generator(2, '123')).toBe('123')
    expect(generator(2, '1234')).toBe('123')
  })
  test("SC2: especial cases -> 0, 1, 2 length, '', ' ', $%^ ornament  ", () => {
    expect(generator(0, '')).toBe('')
    expect(generator(0, 'ABC')).toBe('')
    expect(generator(1, 'A')).toBe('A')
    expect(generator(3, 'B')).toBe('BBBBBB')
    expect(generator(1, 'ABCD')).toBe('A')
    expect(generator(2, 'AB')).toBe('ABA')
    expect(generator(2, 'ABCD')).toBe('ABC')
    expect(generator(3, '')).toBe('')
    expect(generator(3, '$%^')).toBe('$%^$%^')
  })
})

describe('TDD: sum', () => {
  test('SC1: primary cases', () => {
    expect(sum(3)).toBe(6)
    expect(sum(4)).toBe(10)
    expect(sum(5)).toBe(15)
  })
  test('SC2: especial cases', () => {
    expect(sum(0)).toBe(0)
    expect(sum(1)).toBe(1)
    expect(sum(-10)).toBe(0)
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

const result3 = `  X
 X X
X X X
  |
`

const result4 = `        A
       B C
      1 2 3
     A B C 1
    2 3 A B C
   1 2 3 A B C
  1 2 3 A B C 1
 2 3 A B C 1 2 3
A B C 1 2 3 A B C
        |
`
