// backend/models/ProductFactory.js
const Product = require("./Product");
const PhysicalProduct = require("./PhysicalProduct");
const DigitalProduct = require("./DigitalProduct");

class ProductFactory {
  static createProduct(type, id, name, price, attribute, quantity = 1) {
    if (type === "physical") {
      return new PhysicalProduct(id, name, price, quantity, attribute);
    }
    if (type === "digital") {
      return new DigitalProduct(id, name, price, quantity, attribute);
    }
    // Caso seja um produto genérico
    return new Product(id, name, price, quantity, type, attribute);
  }
}

module.exports = ProductFactory;
