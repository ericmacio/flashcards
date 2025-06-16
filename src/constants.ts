export const ROUTES = {
  HOME: '/',
  STUDY: '/study',
  STUDY_CATEGORY: '/study/:category',
  QUIZ: '/quiz',
  STATS: '/stats',
};

export const getStudyCategoryRoute = (category: string) =>
  ROUTES.STUDY_CATEGORY.replace(':category', category); 