import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategorySelectionPage from './pages/CategorySelectionPage';
import QuizPage from './pages/QuizPage';
import StatsPage from './pages/StatsPage';
import StudyPage from './pages/StudyPage';
import Layout from './components/Layout';
import { ROUTES } from './constants';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.STUDY} element={<CategorySelectionPage />} />
        <Route path={ROUTES.STUDY_CATEGORY} element={<StudyPage />} />
        <Route path={ROUTES.QUIZ} element={<QuizPage />} />
        <Route path={ROUTES.STATS} element={<StatsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
