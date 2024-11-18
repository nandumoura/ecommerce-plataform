// backend/models/Product.js
class Product {
  constructor(id, name, price, quantity = 1, type, attribute = null) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity; // Adicionando quantity
    this.type = type;
    this.attribute = attribute; // Para atributos adicionais (peso ou tamanho de arquivo)
  }

  getProductInfo() {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      quantity: this.quantity,
      type: this.type,
      attribute: this.attribute,
    };
  }

  getPrice() {
    return this.price * this.quantity;
  }

  getDescription() {
    return `${this.name} (x${this.quantity})`;
  }
}

module.exports = Product;
