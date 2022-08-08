import { DateTime } from './luxon.min.js';

const getDateTime = () => {
  const dateTimeDiv = document.querySelectorAll('.date-time');
  setInterval(() => {
    const now = DateTime.local();
    const nowFormatted = now.toLocaleString(DateTime.DATETIME_MED);
    dateTimeDiv.forEach((elt) => {
      elt.textContent = nowFormatted;
    });
  }, 1000);
};
export default getDateTime;