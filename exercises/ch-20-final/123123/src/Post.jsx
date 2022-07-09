import React from 'react';
import './Post.css';

import { Time } from './Time';

export const Post = ({ post }) => {
  return (
    <div className='Post'>
      <div className='Post-votes'>
        <i className='fa fa-arrow-up' />
        <span className='Post-score'>{post.score}</span>
        <i className='fa fa-arrow-down' />
      </div>
      <div className='Post-thumbnail'>
        <img src={post.thumbnail} alt='thumbnail' />
      </div>
      <div className='Post-content'>
        <a href={post.url} target='_blank'>
          <h2>{post.title}</h2>
        </a>
        <span>author: {post.author} </span>
        <span>created: {post.created}</span>
        <Time time={post.created} />
        <span>comments: {post.num_comments} </span>
      </div>
    </div>
  );
};
