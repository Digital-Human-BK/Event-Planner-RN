import Year from './Year';
import { currentYear } from '../../constants/calendar';

type YearType = {
  id: number | string;
  element: JSX.Element;
};

const InitialYears: YearType[] = [
  {
    id: currentYear - 2,
    element: <Year yearProp={currentYear - 2} />,
  },
  {
    id: currentYear - 1,
    element: <Year yearProp={currentYear - 1} />,
  },
  {
    id: currentYear,
    element: <Year yearProp={currentYear} />,
  },
  {
    id: currentYear + 1,
    element: <Year yearProp={currentYear + 1} />,
  },
  {
    id: currentYear + 2,
    element: <Year yearProp={currentYear + 2} />,
  },
  {
    id: currentYear + 3,
    element: <Year yearProp={currentYear + 3} />,
  },
  {
    id: currentYear + 4,
    element: <Year yearProp={currentYear + 4} />,
  },
  {
    id: currentYear + 5,
    element: <Year yearProp={currentYear + 5} />,
  },
  {
    id: currentYear + 6,
    element: <Year yearProp={currentYear + 6} />,
  },
  {
    id: currentYear + 7,
    element: <Year yearProp={currentYear + 7} />,
  },
];

export default InitialYears;
