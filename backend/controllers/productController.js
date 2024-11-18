// backend/controllers/productController.js
const ProductCache = require("../utils/patterns/ProductCache");
const ProductFactory = require("../models/ProductFactory");

const rehydrateProduct = require("../utils/rehydrateProduct");
const Inventory = require("../utils/patterns/Inventory");
const LowStockNotifier = require("../utils/patterns/LowStockNotifier");

const inventory = new Inventory();
const lowStockNotifier = new LowStockNotifier();
inventory.addObserver(lowStockNotifier);

let products = [
  { id: 1, name: "Produto A", price: 100, type: "product" },
  { id: 2, name: "Produto B", price: 150, type: "product" },
  { id: 3, name: "Produto C", price: 200, type: "product" },
];

exports.updateStock = (req, res) => {
  const { id, quantity } = req.body;

  // Verifica se o produto existe
  const productExists = products.find((p) => p.id === parseInt(id));
  if (!productExists) {
    return res.status(404).json({ message: "Produto não encontrado." });
  }

  // Atualiza o estoque do produto
  inventory.updateStock(id, quantity);

  return res.status(200).json({
    message: "Estoque atualizado com sucesso!",
    currentStock: inventory.getStock(id),
  });
};

// Função para verificar se o produto já existe (no cache ou na lista de produtos)
const productExists = (id, name) => {
  // Verifica no cache
  if (ProductCache.isProductCached(id)) {
    console.log("Produto encontrado no cache.");
    return true;
  }

  // Verifica na lista de produtos
  const productInList = products.find(
    (p) => p.id === id || p.name.toLowerCase() === name.toLowerCase()
  );
  if (productInList) {
    console.log("Produto encontrado na lista.");
    return true;
  }

  return false; // Produto não encontrado
};

exports.createProduct = (req, res) => {
  const { type, id, name, price, attribute, quantity = 1 } = req.body;

  // Verifica se o produto já existe
  if (productExists(id, name)) {
    return res.status(400).json({ message: "Produto já existe." });
  }

  try {
    const product = ProductFactory.createProduct(
      type,
      id,
      name,
      price,
      attribute,
      quantity
    );

    products.push(product);
    ProductCache.setProduct(id, product);

    return res.status(201).json({
      message: "Produto criado com sucesso!",
      product: product.getProductInfo(),
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.getProduct = (req, res) => {
  const { id } = req.params;

  // Verifica se o produto está no cache
  if (ProductCache.isProductCached(id)) {
    console.log("Produto encontrado no cache.");
    const cachedProduct = ProductCache.getProduct(id);

    // Reidratar o produto para uma instância de Product
    const product = rehydrateProduct(cachedProduct);

    return res.status(200).json(product.getProductInfo());
  }

  // Se não estiver no cache, encontra o produto no "banco de dados" (aqui, simulado)
  const productData = products.find((p) => p.id === parseInt(id));
  if (productData) {
    const product = rehydrateProduct(productData);

    // Armazena o produto no cache
    ProductCache.setProduct(id, product);
    console.log("Produto adicionado ao cache.");
    return res.status(200).json(product.getProductInfo());
  }

  return res.status(404).json({ message: "Produto não encontrado." });
};

exports.testCache = (req, res) => {
  const { id } = req.params;

  if (ProductCache.isProductCached(id)) {
    const product = ProductCache.getProduct(id);
    return res
      .status(200)
      .json({ message: "Produto encontrado no cache", product });
  } else {
    return res.status(404).json({ message: "Produto não encontrado no cache" });
  }
};

exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, price, attribute } = req.body;

  const productIndex = products.findIndex((p) => p.id === parseInt(id));
  if (productIndex === -1) {
    return res.status(404).json({ message: "Produto não encontrado." });
  }

  // Atualizar o produto
  const product = products[productIndex];
  product.name = name || product.name;
  product.price = price || product.price;
  product.attribute = attribute || product.attribute;

  // Atualizar no cache
  ProductCache.setProduct(id, product);

  return res.status(200).json({
    message: "Produto atualizado com sucesso!",
    product,
  });
};

exports.deleteProduct = (req, res) => {
  const { id } = req.params;

  const productIndex = products.findIndex((p) => p.id === parseInt(id));
  if (productIndex === -1) {
    return res.status(404).json({ message: "Produto não encontrado." });
  }

  // Remover o produto
  products.splice(productIndex, 1);

  // Remover do cache
  ProductCache.removeProduct(id);

  return res.status(200).json({ message: "Produto deletado com sucesso." });
};

const {
  FixedPriceStrategy,
  DiscountStrategy,
  PromotionStrategy,
} = require("../utils/patterns/PricingStrategy");

exports.getPrice = (req, res) => {
  const { id, strategyType, discountPercentage, buy, getFree } = req.body;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return res.status(404).json({ message: "Produto não encontrado." });
  }

  let strategy;
  if (strategyType === "fixed") {
    strategy = new FixedPriceStrategy();
  } else if (strategyType === "discount") {
    strategy = new DiscountStrategy(discountPercentage);
  } else if (strategyType === "promotion") {
    strategy = new PromotionStrategy(buy, getFree);
  }

  const finalPrice = strategy.calculate(product.price);
  return res.status(200).json({
    message: `Preço final calculado com a estratégia ${strategyType}: ${finalPrice} reais.`,
  });
};
