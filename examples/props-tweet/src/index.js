import React from 'react';
import ReactDOM from 'react-dom/client';
import moment from 'moment';
import './index.css';

const testTweet = {
  message: 'Something about cats.',
  gravatar: 'xyz',
  author: {
    handle: 'catperson',
    name: 'IAMA Cat Person',
  },
  likes: 2,
  retweets: 1,
  timestamp: '2022-03-30 21:24:37',
};

const Tweet = ({ tweet }) => {
  return (
    <div className='tweet'>
      <Avatar hash={tweet.gravatar} />
      <div className='content'>
        <NameWithHandle author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className='buttons'>
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton2 count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
};

const Avatar = ({ hash }) => {
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return <img src={url} alt='avatar' className='avatar' />;
};

const Message = ({ text }) => {
  return <div className='message'>{text}</div>;
};

const NameWithHandle = ({ author }) => {
  const { name, handle } = author;
  return (
    <span className='name-with-handle'>
      <span className='name'>{name}</span>
      <span className='handle'>@{handle}</span>
    </span>
  );
};

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return <span className='time'>{timeString}</span>;
};
const ReplyButton = () => <i className='fa fa-reply reply-button' />;

function RetweetCount({ count }) {
  if (count > 0) {
    return <span className='retweet-count'>{count}</span>;
  } else {
    return null;
  }
}

const RetweetButton = ({ count }) => (
  <span className='retweet-button'>
    <i className='fa fa-retweet' />
    <RetweetCount count={count} />
  </span>
);

const LikeButton = ({ count }) => (
  <span className='like-button'>
    <i className='fa fa-heart' />
    {count > 0 && <span className='like-count'>{count}</span>}
  </span>
);

const LikeButton2 = ({ count }) => (
  <span className='like-button'>
    <i className='fa fa-heart' />
    <span className='like-count'>{count ? count : null}</span>
  </span>
);

const MoreOptionsButton = () => <i className='fa fa-ellipsis-h more-options-button' />;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Tweet tweet={testTweet} />
  </React.StrictMode>
);
