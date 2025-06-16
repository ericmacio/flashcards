export interface Flashcard {
  category: 'animals' | 'food' | 'verbs';
  spanish: string;
  english: string;
  quiz: {
    type: 'multiple-choice';
    options: string[];
  };
}

export const flashcards: Flashcard[] = [
  // Animals
  {
    category: 'animals',
    spanish: 'el gato',
    english: 'the cat',
    quiz: {
      type: 'multiple-choice',
      options: ['the dog', 'the house', 'the cat', 'the bird'],
    },
  },
  {
    category: 'animals',
    spanish: 'el perro',
    english: 'the dog',
    quiz: {
      type: 'multiple-choice',
      options: ['the fish', 'the dog', 'the car', 'the tree'],
    },
  },
  // Food
  {
    category: 'food',
    spanish: 'la manzana',
    english: 'the apple',
    quiz: {
      type: 'multiple-choice',
      options: ['the orange', 'the banana', 'the apple', 'the water'],
    },
  },
  {
    category: 'food',
    spanish: 'el pan',
    english: 'the bread',
    quiz: {
      type: 'multiple-choice',
      options: ['the cheese', 'the bread', 'the milk', 'the egg'],
    },
  },
  // Verbs
  {
    category: 'verbs',
    spanish: 'correr',
    english: 'to run',
    quiz: {
      type: 'multiple-choice',
      options: ['to eat', 'to sleep', 'to run', 'to drink'],
    },
  },
  {
    category: 'verbs',
    spanish: 'comer',
    english: 'to eat',
    quiz: {
      type: 'multiple-choice',
      options: ['to write', 'to read', 'to speak', 'to eat'],
    },
  },
]; 