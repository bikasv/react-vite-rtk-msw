import constants from '../constants';

export function formatDate(dateString: string) {
  const date = new Date(dateString);

  if (date.toString() === 'Invalid Date') {
    return '';
  }

  const dayFromDate = date.getDate();
  const day = dayFromDate < 10 ? `0${dayFromDate}` : dayFromDate;

  return `${day} ${constants.monthMapping[date.getMonth()]}, ${date.getFullYear()}`;
}
