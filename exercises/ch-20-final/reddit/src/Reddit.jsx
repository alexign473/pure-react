import React, { useState, useEffect } from 'react';
import { Post } from './Post';

export const Reddit = ({ subreddit }) => {
  const [posts, setPosts] = useState([]);
  const url = `https://www.reddit.com/r/${subreddit}.json`;

  useEffect(() => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => setPosts(json.data.children.map((c) => c.data)));
  }, [setPosts]);

  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((json) => setPosts(json.data.children.map((c) => c.data)));
  // }, [subreddit, setPosts]);

  return (
    <div className='Posts'>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};
