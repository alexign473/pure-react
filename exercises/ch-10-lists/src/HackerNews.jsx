import React from 'react';
import dayjs from 'dayjs';

import './HackerNews.css';

var relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

export const HackerNews = ({ news }) => {
  return (
    <ol className='hackernews-list list-group-numbered' start={1}>
      {news.map((item, index) => (
        <li className='list-group-item' key={index}>
          <HackerNewsItem item={item} index={index} />
        </li>
      ))}
    </ol>
  );
};

const HackerNewsItem = ({ item }) => {
  return (
    <div className='hackernews-list__item'>
      <div className='subtext'>
        <a href='/'>
          <i className='fa fa-caret-up' />
        </a>
      </div>
      <div className='hackernews-list__item__content'>
        <div className='hackernews-list__item__title'>
          <a href='#'>{item.title}</a>{' '}
          <span className='subtext'>
            (<a href='/'>{item.source}</a>)
          </span>
        </div>
        <div className='subtext subtext-small'>
          <span>{item.score} points</span> by <a href='/'>{item.author}</a>{' '}
          <Time time={item.timestamp} />
          {' | '}
          <a href='/'>hide</a>
          {' | '}
          <a href='/'>{item.comments}&nbsp;comments</a>
        </div>
      </div>
    </div>
  );
};

const Time = ({ time }) => {
  const timeString = dayjs(time).fromNow();
  return <span>{timeString}</span>;
};
