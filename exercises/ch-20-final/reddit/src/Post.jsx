import React, { useState } from 'react';
import { Time } from './Time';
import { Thumbnail } from './Thumbnail';

export const Post = ({ post }) => {
  const [score, setScore] = useState(post.score);
  const handleUpvote = () => {
    setScore((prevScore) => prevScore + 1);
  };
  const handleDownvote = () => {
    setScore((prevScore) => prevScore - 1);
  };

  return (
    <div className='Post'>
      <div className='Post-votes'>
        <i className='fa fa-arrow-up' onClick={handleUpvote} />
        <span className='Post-score'>{score}</span>
        <i className='fa fa-arrow-down' onClick={handleDownvote} />
      </div>
      <div className='Post-thumbnail'>
        <Thumbnail url={post.thumbnail} />
      </div>
      <div className='Post-content'>
        <h3>
          <a href={post.url} target='_blank' rel='noreferrer'>
            {post.title}
          </a>
        </h3>
        <span className='subtext'>
          Submitted <Time time={post.created} /> by{' '}
          <span className='Post-author'>{post.author}</span>
        </span>
        <div>
          <a
            href={`https://www.reddit.com${post.permalink}`}
            className='Post-comments'
          >
            {post.num_comments}{' '}
            {post.num_comments === 1 ? 'comment' : 'comments'}
          </a>
          <span className='subtext'> share save hide</span>
        </div>
      </div>
    </div>
  );
};
