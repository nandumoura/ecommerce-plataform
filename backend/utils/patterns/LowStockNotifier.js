// backend/utils/patterns/LowStockNotifier.js
class LowStockNotifier {
    update(productId, stock) {
      console.log(`⚠️ Alerta: O estoque do produto ${productId} está baixo: apenas ${stock} unidades restantes.`);
    }
  }
  
  module.exports = LowStockNotifier;
  