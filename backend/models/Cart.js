class Cart {
    constructor() {
      this.items = [];
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    removeItem(id) {
      this.items = this.items.filter((item) => item.id !== id);
    }
  
    getTotalPrice() {
      return this.items.reduce((total, item) => total + item.getPrice(), 0);
    }
  
    getCartSummary() {
      return this.items.map((item) => item.getDescription());
    }
  
    clear() {
      this.items = [];
    }
  }
  
  module.exports = Cart;
  