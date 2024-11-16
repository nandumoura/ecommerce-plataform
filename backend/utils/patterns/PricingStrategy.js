// backend/utils/patterns/PricingStrategy.js
class FixedPriceStrategy {
    calculate(price) {
      return price;
    }
  }
  
  class DiscountStrategy {
    constructor(discountPercentage) {
      this.discountPercentage = discountPercentage;
    }
  
    calculate(price) {
      return price - (price * this.discountPercentage) / 100;
    }
  }
  
  class PromotionStrategy {
    constructor(buy, getFree) {
      this.buy = buy;
      this.getFree = getFree;
    }
  
    calculate(price, quantity) {
      const totalItems = quantity + Math.floor(quantity / this.buy) * this.getFree;
      return (price * quantity) / totalItems;
    }
  }
  
  module.exports = {
    FixedPriceStrategy,
    DiscountStrategy,
    PromotionStrategy,
  };
  