import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategorySelectionPage from './pages/CategorySelectionPage';
import QuizPage from './pages/QuizPage';
import StatsPage from './pages/StatsPage';
import StudyPage from './pages/StudyPage';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/study" element={<CategorySelectionPage />} />
        <Route path="/study/:category" element={<StudyPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/stats" element={<StatsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
