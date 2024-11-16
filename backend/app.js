const express = require("express");
const cors = require("cors");
// import routes
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require('./routes/cartRoutes');
// initialize app
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use('/api/cart', cartRoutes);

module.exports = app;
