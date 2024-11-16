// backend/controllers/productController.js
const ProductCache = require("../utils/patterns/ProductCache");
const ProductFactory = require("../models/ProductFactory");

let products = [
  { id: 1, name: "Produto A", price: 100 },
  { id: 2, name: "Produto B", price: 150 },
  { id: 3, name: "Produto C", price: 200 },
];

// Função para verificar se o produto já existe (no cache ou na lista de produtos)
const productExists = (id, name) => {
  // Verifica no cache
  if (ProductCache.isProductCached(id)) {
    console.log("Produto encontrado no cache.");
    return true;
  }

  // Verifica na lista de produtos
  const productInList = products.find((p) => p.id === id || p.name.toLowerCase() === name.toLowerCase());
  if (productInList) {
    console.log("Produto encontrado na lista.");
    return true;
  }

  return false; // Produto não encontrado
};

exports.createProduct = (req, res) => {
  const { type, id, name, price, attribute } = req.body;

  // Verifica se o produto já existe
  if (productExists(id, name)) {
    return res.status(400).json({ message: "Produto já existe." });
  }

  try {
    // Cria o produto usando a fábrica
    const product = ProductFactory.createProduct(type, id, name, price, attribute);
    
    // Adiciona o produto ao array 'products' (simulando banco de dados)
    products.push(product);

    // Armazena o produto no cache
    ProductCache.setProduct(id, product);

    // Retorna sucesso
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
    return res.status(200).json(ProductCache.getProduct(id));
  }

  // Se não estiver no cache, encontra o produto no "banco de dados" (aqui, simulado)
  const product = products.find((p) => p.id === parseInt(id));

  if (product) {
    // Armazena o produto no cache
    ProductCache.setProduct(id, product);
    console.log("Produto adicionado ao cache.");
    return res.status(200).json(product);
  }

  return res.status(404).json({ message: "Produto não encontrado." });
};

exports.testCache = (req, res) => {
  const { id } = req.params;
  
  if (ProductCache.isProductCached(id)) {
    const product = ProductCache.getProduct(id);
    return res.status(200).json({ message: "Produto encontrado no cache", product });
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
