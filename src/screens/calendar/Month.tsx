import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { CalendarList, DateData, LocaleConfig } from 'react-native-calendars';
import MonthHeader from '../../components/calendar/MonthHeader';

import { colors } from '../../theme/colors';
import { theme } from '../../theme/calendar';
import { EVENTS } from '../../utils/events';
import { format } from 'date-fns';

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

  const onDayPress = (day: DateData) => {
    setSelectedDate(day.dateString);
  };

  const onLeftPress = () => {
    // implement logic for left arrow button press
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
        markedDates={{
          ...EVENTS,
          [format(new Date(), 'yyyy-MM-dd')]: {
            selected: true,
            selectedColor: colors.primary,
          },
        }}
        renderHeader={date => (
          <MonthHeader date={date} onPressLeft={onLeftPress} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Month;
