const Product = require("./Product");

class ProductItem extends Product {
  constructor(id, name, price, quantity = 1, type = "product") {
    super(id, name, price, quantity, type);
  }
}

module.exports = ProductItem;
