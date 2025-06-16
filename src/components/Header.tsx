import { NavLink, useLocation } from 'react-router-dom';
import { ROUTES } from '../constants';

const Header = () => {
  const { pathname } = useLocation();

  const isActive = (path: string) => pathname.startsWith(path);

  const Badge = () => (
    <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-pink-500"></span>
  );

  return (
    <header className="bg-gray-800 p-4 text-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between">
        <NavLink to={ROUTES.HOME} className="text-2xl font-bold">
          Flashcards
        </NavLink>
        <div className="flex items-center space-x-4">
          <NavLink
            to={ROUTES.STUDY}
            className="relative rounded-lg bg-sky-500 px-5 py-2 text-lg font-semibold transition hover:bg-sky-600"
          >
            Study
            {isActive(ROUTES.STUDY) && <Badge />}
          </NavLink>
          <NavLink
            to={ROUTES.QUIZ}
            className="relative rounded-lg bg-teal-500 px-5 py-2 text-lg font-semibold transition hover:bg-teal-600"
          >
            Quiz
            {isActive(ROUTES.QUIZ) && <Badge />}
          </NavLink>
          <NavLink
            to={ROUTES.STATS}
            className="relative rounded-lg bg-violet-500 px-5 py-2 text-lg font-semibold transition hover:bg-violet-600"
          >
            Stats
            {isActive(ROUTES.STATS) && <Badge />}
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header; 