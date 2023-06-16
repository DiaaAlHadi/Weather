import { useState, useEffect } from 'react'
import translations from '../translation.json'

export function translate(key, lang = "en-US") {
  const language = lang;
  const word = translations[language][key] || key;
  return word;
}
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function formatDate(date, locale) {
  const weekday = date.toLocaleString(locale, { weekday: 'short' });
  const day = date.getDate();
  const month = date.toLocaleString(locale, { month: 'short' });
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${weekday}, ${day} ${month}, ${hours}:${minutes}`;
}

export function getCurrentDateTime(locale = 'en-US', date = new Date()) {
  if (typeof date === 'string') {
    date = new Date(date);
    if (isNaN(date.getTime())) {
      throw new Error('Invalid date parameter. Must be a valid date string in the format YYYY-MM-DD.');
    }
  } else if (!(date instanceof Date)) {
    throw new Error('Invalid date parameter. Must be a Date object or a valid date string in the format YYYY-MM-DD.');
  }
  const dateTime = formatDate(date, locale);
  return dateTime;
}

export function GetDay(dateString, lang = "en-US") {
  const date = new Date(dateString);
  const options = { weekday: 'short' };
  const dayOfWeek = date.toLocaleDateString(lang, options);
  return dayOfWeek;
}


export function getDayMonth(dateString, lang) {
  const date = new Date(dateString);
  const options = { day: 'numeric', month: 'short' };
  const dayMonth = date.toLocaleDateString(lang, options);
  return dayMonth;
}


export function GetWidth() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}
export function GetMonth(dateString, lang = "en-US") {
  const date = new Date(dateString)
  const options = { month: 'short' };
  const Month = date.toLocaleString(lang, options);
  return Month;
}

const app = { translate, getCurrentDateTime, GetDay, getDayMonth, GetWidth, GetMonth };
export default app;
