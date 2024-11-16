const Cart = require('../models/Cart');
const ProductItem = require('../models/ProductItem');
const ProductBundle = require('../models/ProductBundle');

const cart = new Cart();

exports.addToCart = (req, res) => {
  const { type, id, name, price, quantity, items } = req.body;

  let cartItem;
  
  if (type === 'product') {
    cartItem = new ProductItem(id, name, price, quantity);
  } else if (type === 'bundle') {
    cartItem = new ProductBundle(name);
    items.forEach((item) => {
      const product = new ProductItem(item.id, item.name, item.price, item.quantity);
      cartItem.addItem(product);
    });
  }

  cart.addItem(cartItem);
  return res.status(201).json({ message: 'Item adicionado ao carrinho', cartSummary: cart.getCartSummary() });
};

exports.getCart = (req, res) => {
  return res.status(200).json({
    total: cart.getTotalPrice(),
    items: cart.getCartSummary(),
  });
};

exports.clearCart = (req, res) => {
  cart.clear();
  return res.status(200).json({ message: 'Carrinho esvaziado' });
};
