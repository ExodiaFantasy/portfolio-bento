import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.title = 'Bento UI Portfolio';
  }, []);

  return (
    <div className="App dark:bg-gray-900 min-h-screen p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 dark:text-white">
          Bento UI Portfolio
        </h1>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <p className="text-gray-800 dark:text-gray-200">
            Welcome to your Bento UI Portfolio! This project is now properly set up with dark mode support.
          </p>
    </div>
  );
}

export default App;
