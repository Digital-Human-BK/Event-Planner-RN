import { useMemo, useState } from 'react';
import { ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { CalendarList, DateData, LocaleConfig } from 'react-native-calendars';

import { colors } from '../../theme/colors';
import { theme } from '../../theme/calendar';
import { today } from '../../constants/calendar';
import { MARKED_EVENTS } from '../../utils/events';
import { RootStackParamList } from '../../interfaces/navigation';

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

const debounce = (func: (arg: DateData[]) => void, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (month: DateData[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(month);
    }, delay);
  };
};

type MonthScreenProps = {
  // navigation: StackNavigationProp<RootStackParamList, 'Home'>;
  route: RouteProp<RootStackParamList, 'Month'>;
};

const MonthScreen = ({ route }: MonthScreenProps) => {
  const initialDate = route.params.monthId;
  const [currentDate, setCurrentDate] = useState(initialDate);

  const markedEvents = useMemo(() => {
    return {
      ...MARKED_EVENTS,
      [today]: {
        selected: true,
        selectedColor: colors.primary,
      },
    };
  }, []);

  const onLeftPress = () => {
    // implement logic for left button press
  };

  const handleMonthChange = debounce((month: DateData[]) => {
    setCurrentDate(month[0].dateString);
  }, 20);

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
        onVisibleMonthsChange={handleMonthChange}
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
