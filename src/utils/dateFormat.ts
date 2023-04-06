export const formatToEventDate = (
  year: number,
  month: number,
  day: number = 0,
) => {
  day++;
  month++;
  return `${year}-${month.toString().padStart(2, '0')}-${day
    .toString()
    .padStart(2, '0')}`;
};
