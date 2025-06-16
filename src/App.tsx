import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategorySelectionPage from './pages/CategorySelectionPage';
import QuizPage from './pages/QuizPage';
import StatsPage from './pages/StatsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/study" element={<CategorySelectionPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/stats" element={<StatsPage />} />
    </Routes>
  );
}

export default App;
