// backend/utils/patterns/ProductCache.js

class ProductCache {
    constructor() {
      if (ProductCache.instance) {
        return ProductCache.instance; // Retorna a instância única
      }
  
      this.cache = {}; // Cache de produtos
      ProductCache.instance = this; // Armazena a instância única
    }
  
    // Método para obter um produto do cache
    getProduct(productId) {
      return this.cache[productId];
    }
  
    // Método para armazenar um produto no cache
    setProduct(productId, productData) {
      this.cache[productId] = productData;
    }
  
    // Método para limpar o cache
    clearCache() {
      this.cache = {};
    }
  
    // Método para verificar se o produto está no cache
    isProductCached(productId) {
      return this.cache.hasOwnProperty(productId);
    }
  }
  
  module.exports = new ProductCache(); // Exporta a instância única
  