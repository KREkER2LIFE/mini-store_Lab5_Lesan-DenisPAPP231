import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="hero">
      <h1>Welcome to Mini Store</h1>
      <p>Aplicație SPA cu routing și API: URL → Router → Componentă → Parametru → API → UI.</p>
      <Link to="/products" className="btn">Vezi produsele</Link>
    </section>
  );
}
