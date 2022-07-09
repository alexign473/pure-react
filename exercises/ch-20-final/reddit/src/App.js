import React, { useState, useEffect } from 'react';
import { Reddit } from './Reddit';

const App = () => {
  // 2 pieces of state: one to hold the input value,
  // another to hold the current subreddit.
  const [input, setInput] = useState('reactjs');
  const [subreddit, setSubreddit] = useState(input);
  const url = `https://www.reddit.com/r/${subreddit}.json`;

  // Update the subreddit when the user presses enter
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubreddit(input);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <Reddit subreddit={subreddit} />
    </>
  );
};

export default App;
