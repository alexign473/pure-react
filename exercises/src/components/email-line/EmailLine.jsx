import dayjs from 'dayjs';
import './EmailLine.css';

/* Email line component */

export const EmailLine = ({ email }) => {
  return (
    <div className='email-line'>
      <input type='checkbox' />
      <div className='email-content'>
        <div className='email-heading'>
          <Sender sender={email.sender} />
          <Subject subject={email.subject} />
          <Date date={email.timestamp} />
        </div>
        <Message text={email.message} />
      </div>
    </div>
  );
};

const Sender = ({ sender }) => {
  return <span className='email-sender'>{sender}</span>;
};

const Subject = ({ subject }) => {
  return <span className='email-subject'>{subject}</span>;
};

const Date = ({ date }) => {
  const dateString = dayjs(date).format('MMM D');

  return <span>{dateString}</span>;
};

const Message = ({ text }) => {
  return <p className='email-message'>{text}</p>;
};
