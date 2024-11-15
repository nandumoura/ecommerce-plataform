const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = require("./app");

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
