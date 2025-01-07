import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Admin from './pages/Admin';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'bg-gray-900 text-white min-h-screen' : 'bg-gray-100 text-gray-800 min-h-screen'}>
      <Navbar onToggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <div className="container mx-auto py-4">
        <Home />
        {/* Uncomment the line below to show Admin Dashboard */}
        {/* <Admin /> */}
      </div>
    </div>
  );
};

export default App;
