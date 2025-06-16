import { useState } from 'react';
import type { Flashcard as FlashcardType } from '../data/flashcards';

interface FlashcardProps {
  card: FlashcardType;
}

/**
 * A component that displays a flashcard with a front and back side.
 * It features a click-to-flip animation.
 */
const Flashcard = ({ card }: FlashcardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="group h-64 w-96 cursor-pointer [perspective:1000px]"
      onClick={handleFlip}
    >
      <div
        className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Front of the card */}
        <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-sky-500 text-white [backface-visibility:hidden]">
          <p className="text-4xl font-bold">{card.spanish}</p>
        </div>
        {/* Back of the card */}
        <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-green-500 text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <p className="text-4xl font-bold">{card.english}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard; 