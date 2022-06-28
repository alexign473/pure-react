import React from 'react';
import dayjs from 'dayjs';
import './HackerNews.css';
import { Nav, NavItem } from '..';

var relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

export const HackerNavBar = () => {
  return (
    <div className='hackernews-navbar'>
      <div className='hackernews-navbar__logo'>
        <a href='/'>Hacker News</a>
      </div>
      <Nav>
        <NavItem url='/news'>news</NavItem>
        <NavItem url='/past'>past</NavItem>
        <NavItem url='/ask'>ask</NavItem>
        <NavItem url='/show'>show</NavItem>
        <NavItem url='/jobs'>jobs</NavItem>
        <NavItem url='/submit'>submit</NavItem>
      </Nav>
    </div>
  );
};

export const HackerNews = ({ news, index }) => {
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
          <Title title={item.title} /> <Source source={item.source} />
        </div>
        <div className='subtext subtext-small'>
          <Score score={item.score} /> by <Author author={item.author} />{' '}
          <Time time={item.timestamp} />
          {' | '}
          <a href='/'>hide</a>
          {' | '}
          <Comments comments={item.comments} />
        </div>
      </div>
    </div>
  );
};

const Title = ({ title }) => <a href='#'>{title}</a>;

const Source = ({ source }) => (
  <span className='subtext'>
    (<a href='/'>{source}</a>)
  </span>
);

const Author = ({ author }) => <a href='/'>{author}</a>;

const Score = ({ score }) => <span>{score} points</span>;

const Comments = ({ comments }) => <a href='/'>{comments}&nbsp;comments</a>;

const Time = ({ time }) => {
  const timeString = dayjs(time).fromNow();
  return <span>{timeString}</span>;
};
