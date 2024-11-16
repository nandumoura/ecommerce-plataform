// backend/utils/patterns/ProductCache.js
class ProductCache {
  constructor() {
    if (!ProductCache.instance) {
      this.cache = new Map();
      this.ttlMap = new Map(); // Mapa para armazenar o tempo de expiração (TTL)
      ProductCache.instance = this;
    }
    return ProductCache.instance;
  }

  // Adiciona um produto ao cache com um TTL (tempo de vida em milissegundos)
  setProduct(id, product, ttl = 60000) { // TTL padrão de 60 segundos
    const expireAt = Date.now() + ttl;
    this.cache.set(id, product);
    this.ttlMap.set(id, expireAt);
    console.log(`Produto ${id} adicionado ao cache com TTL de ${ttl / 1000} segundos.`);
  }

  // Verifica se o produto está no cache e se ainda não expirou
  isProductCached(id) {
    if (!this.cache.has(id)) return false;

    const expireAt = this.ttlMap.get(id);
    if (Date.now() > expireAt) {
      this.removeProduct(id); // Remove o produto do cache se expirou
      console.log(`Produto ${id} expirou no cache.`);
      return false;
    }

    return true;
  }

  // Obtém um produto do cache
  getProduct(id) {
    return this.cache.get(id);
  }

  // Remove um produto do cache
  removeProduct(id) {
    this.cache.delete(id);
    this.ttlMap.delete(id);
    console.log(`Produto ${id} removido do cache.`);
  }

  // Limpa o cache manualmente
  clearCache() {
    this.cache.clear();
    this.ttlMap.clear();
    console.log("Cache limpo manualmente.");
  }
}

const instance = new ProductCache();
Object.freeze(instance);

module.exports = instance;
