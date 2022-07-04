import React, { useState, useEffect, useRef } from 'react';

function Reddit({ subreddit }) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    setPosts([]);

    fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Could not fetch posts');
      })
      .then((json) => setPosts(json.data.children.map((c) => c.data)))
      .catch((error) => {
        setError(error.message);
      });
  }, [subreddit, setPosts]);

  return (
    <ul>
      {error ? error : posts.map((post) => <li key={post.id}>{post.title}</li>)}
    </ul>
  );
}

export const App = () => {
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
};
