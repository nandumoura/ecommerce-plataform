import React, { useContext } from 'react';
import { CartContext } from '../context/CartProvider';
import styles from './ProductList.module.css';

const products = [
  { id: 1, name: 'Produto A', price: 100, type: 'product', quantity: 1 },
  { id: 2, name: 'Produto B', price: 150, type: 'product', quantity: 1 },
  { id: 3, name: 'Combo de Verão',price: 400, type: 'bundle', items: [
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
    <div className={styles.container}>
      {products.map((product) => (
        <div key={product.id} className={styles.productCard}>
          <h3 className={styles.productTitle}>{product.name}</h3>
          <p className={styles.productPrice}>R$ {product.price}</p>
          <button
            className={styles.addToCartButton}
            onClick={() => handleAddToCart(product)}
          >
            Adicionar ao Carrinho
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
