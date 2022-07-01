import React, { useState, useRef } from 'react';

import './App.css';
import { Nav } from './Nav';

const RefInput = () => {
  const input = useRef();

  const showValue = () => {
    alert(`Input contains: ${input.current.value}`);
  };

  return (
    <div>
      <input type='text' ref={input} />
      <button onClick={showValue}>Alert the value!</button>
    </div>
  );
};

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
      <RefInput />
      <Nav activeTab={activeTab} onTabChange={handleTabChange} />
      <main className='App-content'>{renderContent()}</main>
    </div>
  );
};

export default App;
