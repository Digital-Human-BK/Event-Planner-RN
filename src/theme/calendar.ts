import { colors } from './colors';

export const theme = {
  textSectionTitleColor: colors.primary,
  todayTextColor: colors.primary,
  dayTextColor: colors.primary,
  arrowColor: colors.primary,
  selectedDayTextColor: '#fff',
  selectedDayBackgroundColor: colors.primary,
  monthTextColor: colors.primary,
  dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  textDayHeaderFontSize: 20,
  dotColor: colors.highlightDot,
  'stylesheet.calendar.header': {
    week: {
      paddingBottom: 10,
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
      borderBottomWidth: 1,
      borderBottomColor: colors.primary,
    },
  },
};
