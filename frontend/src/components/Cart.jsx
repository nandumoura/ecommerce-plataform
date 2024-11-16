import React, { useContext } from 'react';
import { CartContext } from '../context/CartProvider';

const Cart = () => {
  const { cart, clearCartItems } = useContext(CartContext);

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      <ul>
        {cart.items.length === 0 ? (
          <p>Carrinho vazio</p>
        ) : (
          cart.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        )}
      </ul>
      <h3>Total: R$ {cart.total}</h3>
      <button onClick={clearCartItems}>Esvaziar Carrinho</button>
    </div>
  );
};

export default Cart;
