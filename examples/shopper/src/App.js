import React, { useState } from 'react';

import './App.css';
import { Nav } from './Nav';

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const renderContent = () => {
    return <span>Empty</span>;
  };

  return (
    <div className='App'>
      <Nav activeTab={activeTab} onTabChange={handleTabChange} />
      <main className='App-content'>{renderContent()}</main>
    </div>
  );
};

export default App;
