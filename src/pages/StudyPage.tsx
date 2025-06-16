import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { flashcards } from '../data/flashcards';
import Flashcard from '../components/Flashcard';

const StudyPage = () => {
  const { category } = useParams<{ category: string }>();

  const categoryFlashcards = flashcards.filter(
    (card) => card.category === category
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  if (categoryFlashcards.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl font-bold mb-4">
          No flashcards found for category:{' '}
          <span className="capitalize">{category}</span>
        </h1>
        <Link to="/study" className="text-sky-400 hover:text-sky-300">
          Back to categories
        </Link>
      </div>
    );
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % categoryFlashcards.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + categoryFlashcards.length) % categoryFlashcards.length
    );
  };

  const currentCard = categoryFlashcards[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Link
        to="/study"
        className="absolute top-24 left-8 text-sky-400 hover:text-sky-300"
      >
        &larr; Back to Categories
      </Link>
      <h1 className="text-5xl font-bold mb-8 capitalize">{category}</h1>

      <Flashcard card={currentCard} />

      <div className="mt-8 flex items-center space-x-8">
        <button
          onClick={handlePrevious}
          className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition"
        >
          Previous
        </button>
        <p className="text-xl">
          {currentIndex + 1} / {categoryFlashcards.length}
        </p>
        <button
          onClick={handleNext}
          className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StudyPage; 