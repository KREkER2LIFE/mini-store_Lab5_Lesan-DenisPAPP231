import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="hero">
      <h1>404</h1>
      <p>Pagina căutată nu există.</p>
      <Link to="/" className="btn">Home</Link>
    </section>
  );
}
