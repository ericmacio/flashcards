import { Link } from 'react-router-dom';
import { flashcards } from '../data/flashcards';
import { getStudyCategoryRoute } from '../constants';

// Get unique categories from the flashcards data
const categories = [...new Set(flashcards.map((card) => card.category))];

const CategorySelectionPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-5xl font-bold mb-8">Select a Category</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link
            key={category}
            to={getStudyCategoryRoute(category)}
            className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg text-2xl font-semibold transition text-center capitalize"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySelectionPage; 