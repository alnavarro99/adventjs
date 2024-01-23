import { findFirstRepeated } from './findFirstRepeated'

/*
 * En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.
 * Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.
 * ```ts
    const giftIds = [2, 1, 3, 5, 3, 2]
    const firstRepeatedId = findFirstRepeated(giftIds)
    console.log(firstRepeatedId) // 3
    // Aunque el 2 y el 3 se repiten
    // el 3 aparece primero por segunda vez

    const giftIds2 = [1, 2, 3, 4]
    const firstRepeatedId2 = findFirstRepeated(giftIds2)
    console.log(firstRepeatedId2) // -1
    // Es -1 ya que no se repite ningún número

    const giftIds3 = [5, 1, 5, 1]
    const firstRepeatedId3 = findFirstRepeated(giftIds3)
    console.log(firstRepeatedId3) // 5
 * ```
 */

describe('First Find Repeat', () => {
  test('Scenario 1: find the first repeat id', () => {
    expect(findFirstRepeated([2, 1, 3, 5, 3, 2])).toBe(3)
    expect(findFirstRepeated([5, 1, 5, 1])).toBe(5)
  })
  test('Scenario 2: not found any repeat id', () => {
    expect(findFirstRepeated([1, 2, 3, 4])).toBe(-1)
  })
})
