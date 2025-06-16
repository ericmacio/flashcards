/**
 * @file Centralized route definitions for the application.
 * This helps in managing and updating routes from a single location.
 */

export const ROUTES = {
  HOME: '/',
  STUDY: '/study',
  STUDY_CATEGORY: '/study/:category',
  QUIZ: '/quiz',
  STATS: '/stats',
};

/**
 * Generates a URL path for a specific study category.
 * @param category - The category to generate the route for.
 * @returns The URL path string.
 */
export const getStudyCategoryRoute = (category: string) =>
  ROUTES.STUDY_CATEGORY.replace(':category', category); 