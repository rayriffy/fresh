import { expect, describe, it } from 'vitest'

import { Item } from './item'

describe('new Item()', () => {
  it('should return an instance of Item', () => {
    expect(new Item('a', 1)).toBeInstanceOf(Item)
  })

  it('should set the name and price correctly', () => {
    const item = new Item('Apple', 2)
    expect(item.getName()).toBe('Apple')
    expect(item.getPrice()).toBe(2)
  })

  it('should get 5% discount when order on pairs', () => {
    const item = new Item('Banana', 1)

    expect(item.calculate(2, false)).toBe(0.95)
    expect(item.calculate(3, false)).toBe(1.95)
  })

  it('should get 10% discount when order with member card', () => {
    const item = new Item('Banana', 1)

    expect(item.calculate(2, true)).toBe(0.855)
    expect(item.calculate(3, true)).toBe(1.755)
  })

  it('should get both 5% and 10% discount when order on pairs with member card', () => {
    const item = new Item('Banana', 1)

    expect(item.calculate(4, true)).toBe(1.71)
    expect(item.calculate(5, true)).toBe(2.61)
  })
})
