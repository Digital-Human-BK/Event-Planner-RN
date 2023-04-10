import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { CalendarList, LocaleConfig } from 'react-native-calendars';
import MonthHeader from '../../components/calendar/MonthHeader';

import { colors } from '../../theme/colors';
import { EVENTS } from '../../utils/events';

const theme = {
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

LocaleConfig.locales.en = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  dayNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
};

LocaleConfig.defaultLocale = 'en';

const Month = ({ route }: any) => {
  console.log('render month');

  const [selectedDate, setSelectedDate] = useState('');
  console.log(selectedDate);

  const onDayPress = (day: any) => {
    setSelectedDate(day.dateString);
  };

  const onLeftPress = () => {
    // implement logic for left arrow button press
  };

  const onRightPress = () => {
    // implement logic for right arrow button press
  };

  return (
    <View style={styles.container}>
      <CalendarList
        theme={theme}
        staticHeader
        hideArrows
        markingType="dot"
        current={route.params.id}
        horizontal={true}
        pagingEnabled={true}
        onDayPress={onDayPress}
        markedDates={EVENTS}
        renderHeader={date => (
          <MonthHeader
            date={date}
            onPressLeft={onLeftPress}
            onPressRight={onRightPress}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Month;
