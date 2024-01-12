import { Item } from './item'
import { priceMap } from './constants'

import type { Menu } from './types'

// class for calculator entry point
export class Calculator {
  private cart: Partial<Record<Menu, number>> = {}
  private member: boolean = false

  // generic function to get values
  public getCart() {
    return this.cart
  }

  public getMember() {
    return this.member
  }

  // add item into a cart
  public addItem(item: Menu, quantity: number) {
    // if item does not yet exist in cart, then add it
    if (this.cart[item] === undefined) this.cart[item] = quantity
    else this.cart[item]! += quantity
  }

  // set member status
  public setMember(member: boolean) {
    this.member = member
  }

  // calculate total price
  public calculate() {
    let price = 0

    // loop each item in cart
    for (const item in Object.keys(this.cart)) {
      // get quantity of item in the cart
      const quantity = this.cart[item as Menu]!

      // calculate price of item, then add into total price
      price += new Item(item, priceMap[item as Menu]).calculate(
        quantity,
        this.member
      )
    }

    return price
  }
}
