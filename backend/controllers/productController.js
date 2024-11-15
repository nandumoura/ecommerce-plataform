// backend/controllers/productController.js
const ProductCache = require("../utils/patterns/ProductCache");

const products = [
  { id: 1, name: "Produto A", price: 100 },
  { id: 2, name: "Produto B", price: 150 },
  { id: 3, name: "Produto C", price: 200 },
];

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
