// backend/models/DigitalProduct.js
const Product = require("./Product");

class DigitalProduct extends Product {
  constructor(id, name, price, fileSize) {
    super(id, name, price);
    this.fileSize = fileSize; // Adiciona a característica de tamanho de arquivo ao produto digital
  }

  getProductInfo() {
    return `${this.name} custa ${this.price} reais e tem o tamanho de ${this.fileSize} MB.`;
  }
}

module.exports = DigitalProduct;
