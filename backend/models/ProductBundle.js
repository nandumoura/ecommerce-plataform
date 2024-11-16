const CartItem = require('./CartItem');

class ProductBundle extends CartItem {
  constructor(name) {
    super();
    this.name = name;
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  getPrice() {
    return this.items.reduce((total, item) => total + item.getPrice(), 0);
  }

  getDescription() {
    const itemDescriptions = this.items.map((item) => item.getDescription()).join(', ');
    return `Combo ${this.name}: [${itemDescriptions}]`;
  }
}

module.exports = ProductBundle;
