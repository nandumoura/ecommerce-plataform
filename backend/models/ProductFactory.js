// backend/models/ProductFactory.js
const PhysicalProduct = require("./PhysicalProduct");
const DigitalProduct = require("./DigitalProduct");

class ProductFactory {
  static createProduct(type, id, name, price, attribute) {
    if (type === "physical") {
      return new PhysicalProduct(id, name, price, attribute); // attribute é o peso
    }
    if (type === "digital") {
      return new DigitalProduct(id, name, price, attribute); // attribute é o tamanho do arquivo
    }

    throw new Error("Tipo de produto não suportado.");
  }
}

module.exports = ProductFactory;
