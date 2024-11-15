import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/productService";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div>
      <h1>Produtos</h1>
      {products.message ? (
        <p>{products.message}</p>
      ) : (
        products.map((product, index) => <p key={index}>{product.name}</p>)
      )}
    </div>
  );
};

export default Products;
