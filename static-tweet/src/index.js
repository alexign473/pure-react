import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Tweet = () => {
  return (
    <div className='tweet'>
      <Avatar />
      <div className='content'>
        <NameWithHandle />
        <Time />
        <Message />
        <div className='buttons'>
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
};

const Avatar = () => {
  return <img src='https://www.gravatar.com/avatar/nothing' alt='avatar' className='avatar' />;
};

const Message = () => {
  return <div className='message'>This is less than 140 characters</div>;
};

const NameWithHandle = () => {
  return (
    <span className='name-with-handle'>
      <span className='name'>Your Name</span>
      <span className='handle'>@yourhandle</span>
    </span>
  );
};

const Time = () => <span className='time'>3h ago</span>;

const ReplyButton = () => <i className='fa fa-reply reply-button' />;

const RetweetButton = () => <i className='fa fa-retweet retweet-button' />;

const LikeButton = () => <i className='fa fa-heart like-button' />;

const MoreOptionsButton = () => <i className='fa fa-ellipsis-h more-options-button' />;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Tweet />
  </React.StrictMode>
);
