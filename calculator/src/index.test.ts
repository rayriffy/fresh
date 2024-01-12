import { expect, describe, it, vi } from 'vitest'

import { Calculator } from './index'
import { Item } from './item'

describe('new Calculator()', () => {
  it('should return an instance of Calculator', () => {
    expect(new Calculator()).toBeInstanceOf(Calculator)
  })

  it('should add cart item correctly', () => {
    const calculator = new Calculator()

    calculator.addItem('blue', 2)
    calculator.addItem('red', 3)

    expect(calculator.getCart()).toEqual({
      blue: 2,
      red: 3,
    })

    calculator.addItem('blue', 1)
    expect(calculator.getCart()).toEqual({
      blue: 3,
      red: 3,
    })
  })

  it('should be able to update member status', () => {
    const calculator = new Calculator()

    calculator.setMember(true)
    expect(calculator.getMember()).toBe(true)

    calculator.setMember(false)
    expect(calculator.getMember()).toBe(false)
  })

  it('should be able to call calculate() on items instance', () => {
    const calculator = new Calculator()
    const itemCalculateSpy = vi.spyOn(Item.prototype, 'calculate')

    calculator.addItem('blue', 2)
    calculator.addItem('red', 3)
    calculator.setMember(true)

    expect(itemCalculateSpy).not.toBeCalled()

    calculator.calculate()

    expect(itemCalculateSpy).toBeCalledTimes(2)
  })
})
