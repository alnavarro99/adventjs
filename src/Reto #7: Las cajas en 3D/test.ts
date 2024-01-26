/**
 * Santa está experimentando con nuevos diseños de regalos y necesita tu ayuda para visualizarlos en 3D.
 * Tu tarea es escribir una función que, dado un tamaño n (entero), genere un dibujo de un regalo en 3D utilizando caracteres ASCII.
 * Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro:
 *
 * Importante: Nos han dicho que siempre hay que dejar un salto de línea al final del dibujo.
 * Nota: Ten en cuenta que, en los tests, la primera línea se ve empujada por el caracter
 */

import { drawGift } from '.'

describe('TDD: draw gift', () => {
  test('SC1: draw gift with size odd', () => {
    expect(drawGift(10, 'x')).toBe(result5)
    expect(drawGift(4, '+')).toBe(result1)
  })
  test('SC2: draw gift with size even', () => {
    expect(drawGift(3, '*')).toBe(result4)
    expect(drawGift(5, '*')).toBe(result2)
  })
  test('SC3: draw gift with size one', () => {
    expect(drawGift(1, '^')).toBe(result3)
  })
})

const result1 = `   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
`

const result2 = `    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
`

const result3 = `#
`

const result4 = `  ###
 #*##
###*#
#*##
###
`

const result5 = `         ##########
        #xxxxxxxx##
       #xxxxxxxx#x#
      #xxxxxxxx#xx#
     #xxxxxxxx#xxx#
    #xxxxxxxx#xxxx#
   #xxxxxxxx#xxxxx#
  #xxxxxxxx#xxxxxx#
 #xxxxxxxx#xxxxxxx#
##########xxxxxxxx#
#xxxxxxxx#xxxxxxx#
#xxxxxxxx#xxxxxx#
#xxxxxxxx#xxxxx#
#xxxxxxxx#xxxx#
#xxxxxxxx#xxx#
#xxxxxxxx#xx#
#xxxxxxxx#x#
#xxxxxxxx##
##########
`
