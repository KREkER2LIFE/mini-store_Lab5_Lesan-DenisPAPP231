import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getProducts } from '../api.js';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 8. Bonus: query parameters (?category=...&sort=price&search=...)
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') || '';
  const sort = searchParams.get('sort') || '';
  const search = searchParams.get('search') || '';

  // GET /products
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    getProducts()
      .then((data) => !cancelled && setProducts(data || []))
      .catch(() => !cancelled && setError('Unable to load products.'))
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, []);

  const categories = useMemo(
    () => [...new Set(products.map((p) => p.category))],
    [products]
  );

  const visible = useMemo(() => {
    let list = [...products];
    if (category) list = list.filter((p) => p.category === category);
    if (search) {
      const q = search.toLowerCase();
      list = list.filter((p) => p.title.toLowerCase().includes(q));
    }
    if (sort === 'price') list.sort((a, b) => a.price - b.price);
    return list;
  }, [products, category, sort, search]);

  function updateParam(key, value) {
    const next = new URLSearchParams(searchParams);
    if (value) next.set(key, value);
    else next.delete(key);
    setSearchParams(next);
  }

  // 6. Stări
  if (loading) return <p className="state">Loading...</p>;
  if (error) return <p className="state error">{error}</p>;

  return (
    <section>
      <h1>Products</h1>

      <div className="filters">
        <input
          type="search"
          placeholder="Search (ex: phone)"
          value={search}
          onChange={(e) => updateParam('search', e.target.value)}
        />
        <select value={category} onChange={(e) => updateParam('category', e.target.value)}>
          <option value="">All categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <select value={sort} onChange={(e) => updateParam('sort', e.target.value)}>
          <option value="">Default order</option>
          <option value="price">Sort by price</option>
        </select>
        <button className="btn secondary" onClick={() => setSearchParams({})}>Reset</button>
      </div>

      {visible.length === 0 ? (
        <p className="state">No products found.</p>
      ) : (
        <div className="grid">
          {visible.map((p) => (
            <article key={p.id} className="card">
              <img src={p.image} alt={p.title} />
              <h3>{p.title}</h3>
              <p className="price">${p.price.toFixed(2)}</p>
              {/* navigare către /products/:id */}
              <Link to={`/products/${p.id}`} className="btn">View details</Link>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
