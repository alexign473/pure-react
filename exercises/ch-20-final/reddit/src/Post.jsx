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
          <a href={post.url} className='Post-comments'>
            {post.num_comments} comments
          </a>
          <span className='subtext'> share save hide</span>
        </div>
      </div>
    </div>
  );
};
