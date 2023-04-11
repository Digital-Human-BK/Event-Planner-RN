import { EVENTS_DATA_TYPE, MARKED_EVENTS_TYPE } from '../interfaces/events';
import { colors } from '../theme/colors';

export const EVENTS_DATA: EVENTS_DATA_TYPE = {
  '2022-04': [
    {
      title: 'April 12th Event1',
      description: 'Lorem ipsum dolor',
      exactTime: 1649750400000,
    },
    {
      title: 'April 12th Event2',
      description: 'Lorem ipsum dolor',
      exactTime: 1649768400000,
    },
  ],
  '2022-05': [
    {
      title: 'May 28th Event1',
      description: 'Lorem ipsum dolor',
      exactTime: 1653739200000, // 8:00 AM UTC
    },
    {
      title: 'May 28th Event2',
      description: 'Lorem ipsum dolor',
      exactTime: 1653746400000, // 2:00 PM UTC
    },
  ],
  '2022-06': [
    {
      title: 'June 19th Event1',
      description: 'Lorem ipsum dolor',
      exactTime: 1655625600000,
    },
    {
      title: 'June 19th Event2',
      description: 'Lorem ipsum dolor',
      exactTime: 1655641500000,
    },
  ],
  '2024-05': [
    {
      title: 'May 20th Event1',
      description: 'Lorem ipsum dolor',
      exactTime: 1716191220000,
    },
    {
      title: 'May 20th Event2',
      description: 'Lorem ipsum dolor',
      exactTime: 1716204600000,
    },
    {
      title: 'May 25th Event1',
      description: 'Lorem ipsum dolor',
      exactTime: 1716646500000,
    },
    {
      title: 'May 25th Event2',
      description: 'Lorem ipsum dolor',
      exactTime: 1716650100000,
    },
  ],
  '2024-06': [
    {
      title: 'June 2nd Event1',
      description: 'Lorem ipsum dolor',
      exactTime: 1717323600000,
    },
    {
      title: 'June 2nd Event2',
      description: 'Lorem ipsum dolor',
      exactTime: 1717335300000,
    },
  ],
  '2024-07': [
    {
      title: 'July 9th Event1',
      description: 'Lorem ipsum dolor',
      exactTime: 1720536300000,
    },
    {
      title: 'July 9th Event2',
      description: 'Lorem ipsum dolor',
      exactTime: 1720525500000,
    },
    {
      title: 'July 10th Event1',
      description: 'Lorem ipsum dolor',
      exactTime: 1720613700000,
    },
    {
      title: 'July 18th Event1',
      description: 'Lorem ipsum dolor',
      exactTime: 1721304900000,
    },
    {
      title: 'July 18th Event2',
      description: 'Lorem ipsum dolor',
      exactTime: 1721312100000,
    },
  ],
  '2024-08': [
    {
      title: 'August 1st Event1',
      description: 'Lorem ipsum dolor',
      exactTime: 1722494700000,
    },
    {
      title: 'August 1st Event2',
      description: 'Lorem ipsum dolor',
      exactTime: 1722505500000,
    },
    {
      title: 'August 5th Event1',
      description: 'Lorem ipsum dolor',
      exactTime: 1721312100000,
    },
    {
      title: 'August 5th Event2',
      description: 'Lorem ipsum dolor',
      exactTime: 1722856500000,
    },
  ],
  '2024-09': [
    {
      title: 'September 3rd Event1',
      description: 'Lorem ipsum dolor',
      exactTime: 1725345900000,
    },
    {
      title: 'September 3rd Event2',
      description: 'Lorem ipsum dolor',
      exactTime: 1725354900000,
    },
    {
      title: 'September 10th Event1',
      description: 'Lorem ipsum dolor',
      exactTime: 1725966900000,
    },
  ],
  '2023-05': [
    {
      title: 'May 1st Event1',
      description: 'Lorem ipsum dolor',
      exactTime: 1682925300000,
    },
    {
      title: 'May 1st Event2',
      description: 'Lorem ipsum dolor',
      exactTime: 1682932500000,
    },
  ],
  '2023-06': [
    {
      title: 'June 15th Event1',
      description: 'Lorem ipsum dolor',
      exactTime: 1686839100000,
    },
    {
      title: 'June 15th Event2',
      description: 'Lorem ipsum dolor',
      exactTime: 1686857100000,
    },
  ],
  '2023-07': [
    {
      title: 'July 22nd Event1',
      description: 'Lorem ipsum dolor',
      exactTime: 1690020600000,
    },
    {
      title: 'July 22nd Event2',
      description: 'Lorem ipsum dolor',
      exactTime: 1690035000000,
    },
  ],
  '2023-04': [
    {
      title: 'April 15th Event1',
      description: 'Lorem ipsum dolor',
      exactTime: 1681539000000,
    },
    {
      title: 'April 15th Event2',
      description: 'Lorem ipsum dolor',
      exactTime: 1681558200000,
    },
    {
      title: 'April 18th Event1',
      description: 'Lorem ipsum dolor',
      exactTime: 1681799400000,
    },
    {
      title: 'April 18th Event2',
      description: 'Lorem ipsum dolor',
      exactTime: 1681803900000,
    },
    {
      title: 'April 27th Event1',
      description: 'Lorem ipsum dolor',
      exactTime: 1682588700000,
    },
    {
      title: 'April 27th Event2',
      description: 'Lorem ipsum dolor',
      exactTime: 1682594100000,
    },
  ],
};

export const MARKED_EVENTS: MARKED_EVENTS_TYPE = {
  '2022-04-12': {
    marked: true,
    dotColor: colors.highlightDot,
  },
  '2022-05-28': {
    marked: true,
    dotColor: colors.highlightDot,
  },
  '2022-06-19': {
    marked: true,
    dotColor: colors.highlightDot,
  },
  '2024-05-20': {
    marked: true,
    dotColor: colors.highlightDot,
  },
  '2024-05-25': {
    marked: true,
    dotColor: colors.highlightDot,
  },
  '2024-06-02': {
    marked: true,
    dotColor: colors.highlightDot,
  },
  '2024-07-09': {
    marked: true,
    dotColor: colors.highlightDot,
  },
  '2024-08-01': {
    marked: true,
    dotColor: colors.highlightDot,
  },
  '2024-09-03': {
    marked: true,
    dotColor: colors.highlightDot,
  },
  '2024-07-10': {
    marked: true,
    dotColor: colors.highlightDot,
  },
  '2024-07-18': {
    marked: true,
    dotColor: colors.highlightDot,
  },
  '2024-08-05': {
    marked: true,
    dotColor: colors.highlightDot,
  },
  '2024-09-10': {
    marked: true,
    dotColor: colors.highlightDot,
  },
  '2023-05-01': {
    marked: true,
    dotColor: colors.highlightDot,
  },
  '2023-06-15': {
    marked: true,
    dotColor: colors.highlightDot,
  },
  '2023-07-22': {
    marked: true,
    dotColor: colors.highlightDot,
  },
  '2023-04-15': {
    marked: true,
    dotColor: colors.highlightDot,
  },
  '2023-04-18': {
    marked: true,
    dotColor: colors.highlightDot,
  },
  '2023-04-27': {
    marked: true,
    dotColor: colors.highlightDot,
  },
};
