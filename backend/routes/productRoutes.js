const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/:id", productController.getProduct);

// Rota para criar um produto
router.post("/", productController.createProduct);

module.exports = router;
