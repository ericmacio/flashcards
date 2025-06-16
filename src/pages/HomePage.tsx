import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-8">Spanish Flashcards</h1>
      <div className="space-x-4">
        <Link to="/study" className="px-6 py-3 bg-sky-500 hover:bg-sky-600 rounded-lg text-lg font-semibold transition">
          Study Mode
        </Link>
        <Link to="/quiz" className="px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded-lg text-lg font-semibold transition">
          Quiz Mode
        </Link>
        <Link to="/stats" className="px-6 py-3 bg-violet-500 hover:bg-violet-600 rounded-lg text-lg font-semibold transition">
          Stats Page
        </Link>
      </div>
    </div>
  );
};

export default HomePage; 