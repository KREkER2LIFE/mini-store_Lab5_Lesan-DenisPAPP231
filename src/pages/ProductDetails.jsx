import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProduct } from '../api.js';

export default function ProductDetails() {
  // 5. Extrage id din URL: /products/25 → id = "25"
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // GET /products/{id}
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    setProduct(null);
    getProduct(id)
      .then((data) => {
        if (cancelled) return;
        if (!data) setError('Unable to load product.');
        else setProduct(data);
      })
      .catch(() => !cancelled && setError('Unable to load product.'))
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, [id]);

  // 6. Stări
  if (loading) return <p className="state">Loading...</p>;
  if (error)
    return (
      <div className="state error">
        <p>{error}</p>
        <Link to="/products" className="btn secondary">← Back to products</Link>
      </div>
    );

  return (
    <section className="details">
      <Link to="/products" className="back">← Back to products</Link>
      <p className="muted">Product details...</p>
      <div className="details-body">
        <img src={product.image} alt={product.title} />
        <div>
          <h1>{product.title}</h1>
          <p className="badge">{product.category}</p>
          <p className="price big">${product.price.toFixed(2)}</p>
          <p>{product.description}</p>
          {product.rating && (
            <p className="muted">
              ⭐ {product.rating.rate} ({product.rating.count} reviews)
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
