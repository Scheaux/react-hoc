import React from 'react';
import DateTime from './DateTime';

function DateTimePretty({ date }) {
  let time = null;
  const timePassed = Date.now() - new Date(date).getTime();
  const minutes = timePassed / 1000 / 60;
  const hours = minutes / 60;
  const days = hours / 24;

  if (minutes < 1.5) time = `${minutes.toFixed(0)} минуту назад`;
  else if (minutes >= 1.5 && minutes < 5)
    time = `${minutes.toFixed(0)} минуты назад`;
  else if (minutes < 60) time = `${minutes.toFixed(0)} минут назад`;
  else if (hours < 1.5) time = `${hours.toFixed(0)} час назад`;
  else if (hours >= 1.5 && hours < 5) time = `${hours.toFixed(0)} часа назад`;
  else if (hours < 24) time = `${hours.toFixed(0)} часов назад`;
  else if (days >= 1) time = `${days.toFixed(0)} дней назад`;

  return <DateTime date={time} />;
}

export default DateTimePretty;
