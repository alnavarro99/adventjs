import { drawGift } from '.'

describe('TDD: draw gift', () => {
  test('SC1: draw gift with size 4', () => {
    expect(drawGift(4, '+')).toBe(result1)
  })
  test('SC2: draw gift with size 5', () => {
    expect(drawGift(5, '*')).toBe(result2)
  })
  test('SC3: draw gift with size 1', () => {
    expect(drawGift(1, '^')).toBe(result3)
  })
})

const result1 = `
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
`

const result2 = `
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
`

const result3 = `
#
`
