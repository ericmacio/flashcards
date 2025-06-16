import { Outlet } from 'react-router-dom';
import Header from './Header';

/**
 * A layout component that provides a consistent structure for all pages.
 * It includes a persistent header and a main content area for nested routes.
 */
const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout; 