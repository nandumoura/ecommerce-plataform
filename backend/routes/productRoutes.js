const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const validateProduct = require("../middlewares/validateProduct");


router.get("/:id", productController.getProduct);
router.get("/test-cache/:id", productController.testCache);
// Rota para criar um produto
router.post("/",validateProduct, productController.createProduct);
router.put("/:id",validateProduct, productController.updateProduct);
router.delete("/:id", productController.deleteProduct);
router.post("/update-stock", productController.updateStock);
router.post("/get-price", productController.getPrice);


module.exports = router;
