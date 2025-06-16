import { useState, useMemo } from 'react';
import { flashcards } from '../data/flashcards';

export const useFlashcardDeck = (category: string | undefined) => {
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