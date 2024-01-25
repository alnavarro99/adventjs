/**
 * En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: las letras dentro de los paréntesis deben ser leídas al revés
 * Santa necesita que estos mensajes estén correctamente formateados. Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres
 * dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes
 * invertir los caracteres en el orden correcto.
 *
 * Notas:
 * - Las cadenas de entrada siempre estarán bien formadas con paréntesis que coinciden correctamente, no necesitas validarlos.
 * - En el mensaje final no deben quedar paréntesis.
 * - El nivel máximo de anidamiento es 2.
 */

import { decode, revertInner } from '.'

describe('TDD: revertInner test', () => {
  test('Scenario 1: Sin Anidacion', () => {
    expect(revertInner('(odnum)')).toBe('mundo')
  })
  test('Scenario 2: Anidacion profunda', () => {
    expect(revertInner('sa(u(cla)atn)s')).toBe('santaclaus')
  })
  test('Scenario 3: Anidacion profunda conjunta', () => {
    expect(revertInner('((nta)(sa))')).toBe('santa')
  })
})

describe('TDD: decode test', () => {
  test('Scenario 1', () => {
    expect(decode('hola (odnum)')).toBe('hola mundo')
  })
  test('Scenario 2', () => {
    expect(decode('(olleh) (dlrow)!')).toBe('hello world!')
  })
  test('Scenario 3', () => {
    expect(decode('sa(u(cla)atn)s')).toBe('santaclaus')
    expect(decode('sa(u(cla)atn)s (apap)')).toBe('santaclaus papa')
  })
})
