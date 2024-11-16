const CartItem = require('./CartItem');

class ProductItem extends CartItem {
  constructor(id, name, price, quantity = 1) {
    super();
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getPrice() {
    return this.price * this.quantity;
  }

  getDescription() {
    return `${this.name} (x${this.quantity})`;
  }
}

module.exports = ProductItem;
