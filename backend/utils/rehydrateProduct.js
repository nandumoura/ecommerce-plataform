// backend/utils/rehydrateProduct.js
const Product = require("../models/Product");

function rehydrateProduct(productData) {
  const { id, name, price, quantity, type, attribute } = productData;
  return new Product(id, name, price, quantity, type, attribute);
}

module.exports = rehydrateProduct;
