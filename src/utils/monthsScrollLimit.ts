import { differenceInCalendarMonths } from 'date-fns';
import { firstVisibleMonth, lastVisibleMonth } from '../constants/calendar';

export default function monthsScrollLimit(initialDate: string) {
  const currentMonth = new Date(initialDate);

  const pastMonthsLimit = differenceInCalendarMonths(
    currentMonth,
    firstVisibleMonth,
  );
  const futureMonthsLimit = differenceInCalendarMonths(
    lastVisibleMonth,
    currentMonth,
  );

  return [
    pastMonthsLimit >= 50 ? 50 : pastMonthsLimit,
    futureMonthsLimit >= 50 ? 50 : futureMonthsLimit,
  ];
}
