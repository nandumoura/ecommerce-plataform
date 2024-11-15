const API_URL = "http://localhost:5000/api/products";

export async function fetchProducts() {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
}
