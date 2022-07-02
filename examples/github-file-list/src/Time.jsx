import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
// import to work dayjs .fromNow()
var relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

export const Time = ({ time }) => {
  const timeString = dayjs(time).fromNow();
  return <span className='time'>{timeString}</span>;
};
Time.propTypes = {
  time: PropTypes.string.isRequired,
};
