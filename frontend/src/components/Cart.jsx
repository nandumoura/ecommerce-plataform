import React, { useContext } from 'react';
import { CartContext } from '../context/CartProvider';
import styles from './Cart.module.css';

const Cart = () => {
  const { cart, clearCartItems } = useContext(CartContext);

  return (
    <div className={styles.cartContainer}>
      <h2>Carrinho de Compras</h2>
      {cart.items.length === 0 ? (
        <p>Carrinho vazio</p>
      ) : (
        cart.items.map((item, index) => (
          <div key={index} className={styles.cartItem}>
            <span>{item.name}</span>
            <span>R$ {item.price}</span>
          </div>
        ))
      )}
      <div className={styles.total}>
        Total: R$ {cart.total}
      </div>
      <button
        className={styles.clearCartButton}
        onClick={clearCartItems}
      >
        Esvaziar Carrinho
      </button>
    </div>
  );
};

export default Cart;
