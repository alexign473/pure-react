import dayjs from 'dayjs';
import PropTypes from 'prop-types';

import './EmailLine.css';

/* Email line component */
export const EmailLine = ({ email }) => {
  const { sender, subject, timestamp, message } = email;
  return (
    <div className='email-line'>
      <input type='checkbox' />
      <i className='fa fa-thumb-tack pin' />
      <div className='email-content'>
        <div className='email-heading'>
          <span className='email-sender'>{sender}</span>
          <span className='email-subject'>{subject}</span>
          <Date date={timestamp} />
        </div>
        <p className='email-message'>{message}</p>
      </div>
    </div>
  );
};
EmailLine.propTypes = {
  email: PropTypes.shape({
    sender: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }),
};

const Date = ({ date }) => {
  const dateString = dayjs(date).format('MMM D');

  return <span>{dateString}</span>;
};
