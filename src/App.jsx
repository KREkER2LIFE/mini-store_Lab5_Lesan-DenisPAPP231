import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import DashboardHome from './pages/dashboard/DashboardHome.jsx';
import Profile from './pages/dashboard/Profile.jsx';
import Settings from './pages/dashboard/Settings.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* 2. Rute */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />

        {/* 9. Challenge: nested routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* 7. 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
