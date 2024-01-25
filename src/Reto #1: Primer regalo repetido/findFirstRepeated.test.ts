/**
 * En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.
 * Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.
 */

import { findFirstRepeated } from './findFirstRepeated'
describe('First Find Repeat', () => {
  test('Scenario 1: find the first repeat id', () => {
    expect(findFirstRepeated([2, 1, 3, 5, 3, 2])).toBe(3)
    expect(findFirstRepeated([5, 1, 5, 1])).toBe(5)
  })
  test('Scenario 2: not found any repeat id', () => {
    expect(findFirstRepeated([1, 2, 3, 4])).toBe(-1)
  })
})
