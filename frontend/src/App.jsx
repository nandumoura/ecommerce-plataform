import React from 'react';
import { CartProvider } from './context/CartProvider';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <CartProvider>
      <div>
        <h1>Plataforma de E-commerce</h1>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
