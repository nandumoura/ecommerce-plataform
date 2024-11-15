// backend/models/PhysicalProduct.js
const Product = require("./Product");

class PhysicalProduct extends Product {
  constructor(id, name, price, weight) {
    super(id, name, price);
    this.weight = weight; // Adiciona a característica de peso ao produto físico
  }

  getProductInfo() {
    return `${this.name} custa ${this.price} reais e pesa ${this.weight} kg.`;
  }
}

module.exports = PhysicalProduct;
