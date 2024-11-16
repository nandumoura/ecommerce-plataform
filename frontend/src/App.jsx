import React from 'react';
import { CartProvider } from './context/CartProvider';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './index.css';

function App() {
  return (
    <CartProvider>
      <div className="container">
        <h1>Minha Loja</h1>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
