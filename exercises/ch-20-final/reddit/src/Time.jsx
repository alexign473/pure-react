import React from 'react';
import dayjs from 'dayjs';
var relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

export const Time = ({ time }) => {
  const timeString = dayjs.unix(time).fromNow();
  return <span>{timeString}</span>;
};
