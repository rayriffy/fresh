// class for item set
export class Item {
  private name: string
  private price: number

  constructor(name: string, price: number) {
    this.name = name
    this.price = price
  }

  // generic function to get values
  public getName() {
    return this.name
  }

  public getPrice() {
    return this.price
  }

  // function to calculate total price
  public calculate(quantity: number, member: boolean) {
    // calculate how many pair of items eligible for 5% discount
    let pairs = Math.floor(quantity / 2)
    let leftover = quantity % 2

    // calculate total price
    let price =
      // pairs get 5% discount
      this.price * pairs * 0.95 +
      // left over get no discount
      this.price * leftover

    // if member, get additional 10% discount
    if (member) price *= 0.9

    return price
  }
}
