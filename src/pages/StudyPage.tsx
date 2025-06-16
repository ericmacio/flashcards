import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Flashcard from '../components/Flashcard';
import { ROUTES } from '../constants';
import { useFlashcardDeck } from '../hooks/useFlashcardDeck';

const StudyPage = () => {
  const { category } = useParams<{ category: string }>();
  const [isFlipped, setIsFlipped] = useState(false);
  const {
    currentCard,
    currentIndex,
    deckSize,
    goToNextCard,
    goToPreviousCard,
    hasCards,
  } = useFlashcardDeck(category);

  useEffect(() => {
    setIsFlipped(false);
  }, [currentCard]);

  const handleAnswer = (isCorrect: boolean) => {
    // For now, just move to the next card.
    // We'll add state tracking for incorrect answers later.
    console.log(`Answered: ${isCorrect ? 'Correct' : 'Incorrect'}`);
    goToNextCard();
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  if (!hasCards) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl font-bold mb-4">
          No flashcards found for category:{' '}
          <span className="capitalize">{category}</span>
        </h1>
        <Link to={ROUTES.STUDY} className="text-sky-400 hover:text-sky-300">
          Back to categories
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Link
        to={ROUTES.STUDY}
        className="absolute top-24 left-8 text-sky-400 hover:text-sky-300"
      >
        &larr; Back to Categories
      </Link>
      <h1 className="text-5xl font-bold mb-8 capitalize">{category}</h1>

      <div className="h-64 [perspective:1000px]">
        {currentCard && (
          <Flashcard
            card={currentCard}
            isFlipped={isFlipped}
            onFlip={handleFlip}
            onAnswer={handleAnswer}
          />
        )}
      </div>

      <div className="mt-28 flex items-center space-x-8">
        <button
          onClick={goToPreviousCard}
          className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition"
        >
          Previous
        </button>
        <p className="text-xl">
          {currentIndex + 1} / {deckSize}
        </p>
        <button
          onClick={goToNextCard}
          className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StudyPage; 