import React, { useState, useEffect } from 'react';

export const Ex1 = () => {
  const [input, setInput] = useState(document.title);

  useEffect(() => {
    document.title = input;
  }, [input]);
  return (
    <div>
      <h1>Change document title</h1>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};
