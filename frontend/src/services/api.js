const API_URL = 'http://localhost:5000/api';

export const fetchCart = async () => {
  const response = await fetch(`${API_URL}/cart`);
  return response.json();
};

export const addToCart = async (item) => {
  const response = await fetch(`${API_URL}/cart/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  });
  return response.json();
};

export const clearCart = async () => {
  const response = await fetch(`${API_URL}/cart/clear`, { method: 'DELETE' });
  return response.json();
};
