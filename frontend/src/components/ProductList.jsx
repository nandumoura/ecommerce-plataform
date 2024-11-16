import React, { useContext } from 'react';
import { CartContext } from '../context/CartProvider';

const products = [
  { id: 1, name: 'Produto A', price: 100, type: 'product', quantity: 1 },
  { id: 2, name: 'Produto B', price: 150, type: 'product', quantity: 1 },
  { id: 3, name: 'Combo de Verão', type: 'bundle', items: [
    { id: 4, name: 'Produto C', price: 200, quantity: 1 },
    { id: 5, name: 'Produto D', price: 250, quantity: 1 }
  ]}
];

const ProductList = () => {
  const { addItemToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addItemToCart(product);
  };

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h4>{product.name}</h4>
            <button onClick={() => handleAddToCart(product)}>Adicionar ao Carrinho</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
