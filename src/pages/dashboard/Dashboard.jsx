import { NavLink, Outlet } from 'react-router-dom';

export default function Dashboard() {
  const linkClass = ({ isActive }) => (isActive ? 'active' : undefined);

  return (
    <section>
      <h1>Dashboard</h1>
      <nav className="subnav">
        <NavLink to="/dashboard" end className={linkClass}>Overview</NavLink>
        <NavLink to="/dashboard/profile" className={linkClass}>Profile</NavLink>
        <NavLink to="/dashboard/settings" className={linkClass}>Settings</NavLink>
      </nav>
      {/* aici se randează ruta imbricată */}
      <Outlet />
    </section>
  );
}
