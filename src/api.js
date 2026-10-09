
const BASE_URL = 'https://fakestoreapi.com';

async function request(path) {
  const res = await fetch(`${BASE_URL}${path}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const text = await res.text();

  if (!text) return null;
  return JSON.parse(text);
}

// GET /products
export function getProducts() {
  return request('/products');
}

// GET /products/{id}
export function getProduct(id) {
  return request(`/products/${id}`);
}
