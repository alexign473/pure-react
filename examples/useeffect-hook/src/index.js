import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const LogEffect = () => {
  const [text, setText] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    console.log('latest value:', text);
  });

  useEffect(() => {
    console.log('render');
    inputRef.current.focus();
  }, [inputRef]);

  useEffect(() => {
    console.log('mounted');
    return () => console.log('unmounting...');
  }, []);

  return (
    <input
      ref={inputRef}
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
};

function Reddit({ subreddit }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then((res) => res.json())
      .then((json) => setPosts(json.data.children.map((c) => c.data)));
  }, [subreddit, setPosts]);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

function App() {
  // 2 pieces of state: one to hold the input value,
  // another to hold the current subreddit.
  const [input, setInput] = useState('reactjs');
  const [subreddit, setSubreddit] = useState(input);

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
}

const Demo = () => (
  <div>
    <LogEffect />
    <App />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Demo />);
