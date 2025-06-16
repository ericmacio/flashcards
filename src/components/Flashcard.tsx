import { useState } from 'react';
import type { Flashcard as FlashcardType } from '../data/flashcards';

interface FlashcardProps {
  card: FlashcardType;
  isFlipped: boolean;
  onFlip: () => void;
  onAnswer: (isCorrect: boolean) => void;
}

/**
 * A component that displays a flashcard with a front and back side.
 * It features a click-to-flip animation.
 * The parent component controls the flipped state.
 */
const Flashcard = ({ card, isFlipped, onFlip, onAnswer }: FlashcardProps) => {
  return (
    <div className="relative h-64 w-96">
      <div
        className="group h-full w-full cursor-pointer [perspective:1000px]"
        onClick={onFlip}
        data-testid="flashcard-container"
      >
        <div
          className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] ${
            isFlipped ? '[transform:rotateY(180deg)]' : ''
          }`}
        >
          {/* Front of the card */}
          <div
            className="absolute inset-0 flex items-center justify-center rounded-xl bg-sky-500 text-white [backface-visibility:hidden]"
            data-testid="flashcard-front"
          >
            <p className="text-4xl font-bold">{card.spanish}</p>
          </div>
          {/* Back of the card */}
          <div
            className="absolute inset-0 flex items-center justify-center rounded-xl bg-green-500 text-white [transform:rotateY(180deg)] [backface-visibility:hidden]"
            data-testid="flashcard-back"
          >
            <p className="text-4xl font-bold">{card.english}</p>
          </div>
        </div>
      </div>
      {isFlipped && (
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex space-x-4">
          <button
            onClick={() => onAnswer(true)}
            className="px-8 py-3 bg-green-600 hover:bg-green-500 rounded-lg font-bold text-white transition-transform transform hover:scale-105"
          >
            ✅ Right
          </button>
          <button
            onClick={() => onAnswer(false)}
            className="px-8 py-3 bg-red-600 hover:bg-red-500 rounded-lg font-bold text-white transition-transform transform hover:scale-105"
          >
            ❌ Wrong
          </button>
        </div>
      )}
    </div>
  );
};

export default Flashcard; 