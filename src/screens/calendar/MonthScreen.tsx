import { useCallback, useMemo, useState } from 'react';
import { format } from 'date-fns';
import { ScrollView } from 'react-native';
import { CalendarList, DateData, LocaleConfig } from 'react-native-calendars';

import { colors } from '../../theme/colors';
import { theme } from '../../theme/calendar';
import { MARKED_EVENTS } from '../../utils/events';

import MonthHeader from '../../components/calendar/MonthHeader';
import EventsList from '../../components/calendar/EventsList';

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

const MonthScreen = ({ route }: any) => {
  const initialDate = route.params.monthId;
  const [currentDate, setCurrentDate] = useState(initialDate);

  const markedEvents = useMemo(() => {
    return {
      ...MARKED_EVENTS,
      [format(new Date(), 'yyyy-MM-dd')]: {
        selected: true,
        selectedColor: colors.primary,
      },
    };
  }, []);

  const onLeftPress = () => {
    // implement logic for left button press
  };

  const handleMonthChange = useCallback((month: DateData) => {
    setCurrentDate(month.dateString);
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: colors.secondary,
      }}>
      <CalendarList
        current={currentDate}
        hideArrows
        staticHeader
        theme={theme}
        markingType="dot"
        horizontal={true}
        pagingEnabled={true}
        calendarHeight={430}
        pastScrollRange={24}
        futureScrollRange={24}
        onMonthChange={handleMonthChange}
        markedDates={markedEvents}
        renderHeader={date => (
          <MonthHeader date={date} onPressLeft={onLeftPress} />
        )}
      />
      <EventsList date={currentDate} />
    </ScrollView>
  );
};

export default MonthScreen;
