import { getDate, getMonth, getYear } from 'date-fns';

export const formatToEventDate = (date: Date) => {
  // REMINDER! Months in JS start from 0
  return `${getYear(date)}-${(getMonth(date) + 1)
    .toString()
    .padStart(2, '0')}-${getDate(date).toString().padStart(2, '0')}`;
};
