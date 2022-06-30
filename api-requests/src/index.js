import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

const Reddit = ({ subreddit }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = () => {
      setLoading(true);
      axios
        .get(`http://www.reddit.com/r/${subreddit}.json`)
        .then((res) => {
          const posts = res.data.data.children.map((obj) => obj.data);
          setPosts(posts);
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    getPosts();
  }, [subreddit]);

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  return (
    <div>
      <h1>{`/r/${subreddit}`}</h1>
      {/* {loading && <div>Loading...</div>} */}
      {error && <div>{error}</div>}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
      {/* {!error && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )} */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Reddit subreddit='reactjs' />
  </React.StrictMode>
);
