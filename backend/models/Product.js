// backend/models/Product.js

class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  
    getProductInfo() {
      return `${this.name} custa ${this.price} reais.`;
    }
  }
  
  module.exports = Product;
  