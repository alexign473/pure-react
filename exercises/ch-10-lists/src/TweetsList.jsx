import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import './TweetsList.css';

export const TweetsList = ({ tweets }) => {
  return (
    <div className='tweets-list'>
      {tweets.map((item, i) => (
        <Tweet tweet={item} key={i} />
      ))}
    </div>
  );
};

export const Tweet = ({ tweet }) => {
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
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
};

Tweet.propTypes = {
  tweet: PropTypes.shape({
    message: PropTypes.string.isRequired,
    gravatar: PropTypes.string.isRequired,
    author: PropTypes.object.isRequired,
    likes: PropTypes.number.isRequired,
    retweets: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
  }).isRequired,
};

const Avatar = ({ hash }) => {
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return <img src={url} alt='avatar' className='avatar' />;
};

Avatar.propTypes = {
  hash: PropTypes.string,
};

const Message = ({ text }) => {
  return <div className='message'>{text}</div>;
};

Message.propTypes = {
  text: PropTypes.string,
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

NameWithHandle.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
  }).isRequired,
};

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return <span className='time'>{timeString}</span>;
};

Time.propTypes = {
  time: PropTypes.string,
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

RetweetButton.propTypes = {
  count: PropTypes.number,
};

const LikeButton = ({ count }) => (
  <span className='like-button'>
    <i className='fa fa-heart' />
    {count > 0 && <span className='like-count'>{count}</span>}
  </span>
);

LikeButton.propTypes = {
  count: PropTypes.number,
};

const LikeButton2 = ({ count }) => (
  <span className='like-button'>
    <i className='fa fa-heart' />
    <span className='like-count'>{count ? count : null}</span>
  </span>
);

const MoreOptionsButton = () => (
  <i className='fa fa-ellipsis-h more-options-button' />
);
