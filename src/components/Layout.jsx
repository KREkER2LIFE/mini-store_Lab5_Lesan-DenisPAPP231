import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  const linkClass = ({ isActive }) => (isActive ? 'active' : undefined);

  return (
    <>
      <header className="header">
        <NavLink to="/" className="brand">🛍️ Mini Store</NavLink>
        <nav>
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/products" className={linkClass}>Products</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
        </nav>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="footer">Mini Store — laborator Frontend Routing</footer>
    </>
  );
}
