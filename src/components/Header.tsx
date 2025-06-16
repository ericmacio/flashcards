import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();

  const isActive = (path: string) => pathname.startsWith(path);

  const Badge = () => (
    <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-pink-500"></span>
  );

  return (
    <header className="bg-gray-800 p-4 text-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between">
        <NavLink to="/" className="text-2xl font-bold">
          Flashcards
        </NavLink>
        <div className="flex items-center space-x-4">
          <NavLink
            to="/study"
            className="relative rounded-lg bg-sky-500 px-5 py-2 text-lg font-semibold transition hover:bg-sky-600"
          >
            Study
            {isActive('/study') && <Badge />}
          </NavLink>
          <NavLink
            to="/quiz"
            className="relative rounded-lg bg-teal-500 px-5 py-2 text-lg font-semibold transition hover:bg-teal-600"
          >
            Quiz
            {isActive('/quiz') && <Badge />}
          </NavLink>
          <NavLink
            to="/stats"
            className="relative rounded-lg bg-violet-500 px-5 py-2 text-lg font-semibold transition hover:bg-violet-600"
          >
            Stats
            {isActive('/stats') && <Badge />}
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header; 