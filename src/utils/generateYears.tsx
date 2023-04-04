import { addYears, subYears } from 'date-fns';

import Year from '../components/calendar/Year';

type YearItem = {
  id: string;
  element: Element;
};

const currentYear = new Date();

export const initialYears: YearItem[] = [
  {
    id: subYears(currentYear, 2).toString(),
    element: <Year year={subYears(currentYear, 2)} />,
  },
  {
    id: subYears(currentYear, 1).toString(),
    element: <Year year={subYears(currentYear, 1)} />,
  },
  {
    id: currentYear.toString(),
    element: <Year year={currentYear} />,
  },
  {
    id: addYears(currentYear, 1).toString(),
    element: <Year year={addYears(currentYear, 1)} />,
  },
  {
    id: addYears(currentYear, 2).toString(),
    element: <Year year={addYears(currentYear, 2)} />,
  },
];

export const generatePreviousYears = (firstYearValue: Date) => {
  return [
    {
      id: subYears(firstYearValue, 1).toString(),
      element: <Year year={subYears(firstYearValue, 1)} />,
    },
  ];
};

export const generateNextYears = (lastYearValue: Date) => {
  return [
    {
      id: addYears(lastYearValue, 1).toString(),
      element: <Year year={addYears(lastYearValue, 1)} />,
    },
    {
      id: addYears(lastYearValue, 2).toString(),
      element: <Year year={addYears(lastYearValue, 2)} />,
    },
  ];
};
