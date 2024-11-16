// backend/utils/patterns/Inventory.js
class Inventory {
    constructor() {
      this.observers = [];
      this.stock = {}; // Armazena o estoque dos produtos
    }
  
    // Adiciona um observador
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    // Remove um observador
    removeObserver(observer) {
      this.observers = this.observers.filter((obs) => obs !== observer);
    }
  
    // Notifica todos os observadores sobre uma mudança
    notifyObservers(productId, stock) {
      this.observers.forEach((observer) => observer.update(productId, stock));
    }
  
    // Atualiza o estoque de um produto
    updateStock(productId, quantity) {
      this.stock[productId] = (this.stock[productId] || 0) + quantity;
      console.log(`Estoque do produto ${productId} atualizado para ${this.stock[productId]}`);
  
      // Notificar observadores se o estoque estiver baixo
      if (this.stock[productId] < 5) {
        this.notifyObservers(productId, this.stock[productId]);
      }
    }
  
    // Obtém o estoque de um produto
    getStock(productId) {
      return this.stock[productId] || 0;
    }
  }
  
  module.exports = Inventory;
  