import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-8">Welcome to Spanish Flashcards</h1>
      <p className="text-xl text-gray-300">
        Select a mode from the header to get started!
      </p>
    </div>
  );
};

export default HomePage; 