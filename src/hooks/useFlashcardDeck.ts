import { useState, useMemo } from 'react';
import { flashcards } from '../data/flashcards';

/**
 * A custom hook to manage the state and logic of a flashcard deck for a given category.
 *
 * @param category - The category of flashcards to display.
 * @returns An object with the current card, deck state, and navigation functions.
 */
export const useFlashcardDeck = (category: string | undefined) => {
  // Memoize the filtered list of flashcards to avoid re-computation on every render.
  const categoryFlashcards = useMemo(() => {
    if (!category) return [];
    return flashcards.filter((card) => card.category === category);
  }, [category]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const hasCards = categoryFlashcards.length > 0;
  const currentCard = hasCards ? categoryFlashcards[currentIndex] : null;
  const deckSize = categoryFlashcards.length;

  const goToNextCard = () => {
    if (hasCards) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % deckSize);
    }
  };

  const goToPreviousCard = () => {
    if (hasCards) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + deckSize) % deckSize);
    }
  };

  return {
    currentCard,
    currentIndex,
    deckSize,
    goToNextCard,
    goToPreviousCard,
    hasCards,
  };
}; 