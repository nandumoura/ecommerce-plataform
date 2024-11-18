// middlewares/validateProduct.js
const { body, validationResult } = require("express-validator");

const validateProduct = [
  body("name").isString().withMessage("O nome deve ser uma string."),
  body("price")
    .isFloat({ gt: 0 })
    .withMessage("O preço deve ser um número maior que zero."),
  body("description")
    .optional()
    .isString()
    .withMessage("A descrição deve ser uma string."),
  body("type")
    .isIn(["product", "bundle"])
    .withMessage("O tipo deve ser 'product' ou 'bundle'."),
  body("quantity")
    .isInt({ min: 0 })
    .withMessage("A quantidade deve ser um número inteiro não negativo."),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateProduct;
