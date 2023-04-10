import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import {
  format,
  getDate,
  getTime,
  getMonth,
  endOfWeek,
  endOfMonth,
  startOfWeek,
  startOfMonth,
  eachDayOfInterval,
  eachWeekOfInterval,
} from 'date-fns';

import { width } from '../../constants/ui';
import { colors } from '../../theme/colors';
import { EVENTS } from '../../utils/events';

import EventDot from './EventDot';

const Month = ({ month }: { month: Date }) => {
  const navigation = useNavigation();
  const weeks = eachWeekOfInterval({
    start: startOfMonth(month),
    end: endOfMonth(month),
  });

  const renderedWeeks = [];
  for (let i = 0; i < weeks.length; i++) {
    const week = weeks[i];
    const days = eachDayOfInterval({
      start: startOfWeek(week),
      end: endOfWeek(week),
    });

    const renderedDays = [];
    for (let j = 0; j < days.length; j++) {
      const day = days[j];
      const dayOfMonth = getDate(day);

      // Only render the day if it belongs to the current month
      if (getMonth(day) === getMonth(month)) {
        const date = format(day, 'yyyy-MM-dd');
        const dayIsHavingEvents = Boolean(EVENTS[date]);
        renderedDays.push(
          <View key={getTime(day)} style={styles.dayView}>
            <Text
              style={[
                styles.dayText,
                {
                  color: dayIsHavingEvents
                    ? colors.highlightEvent
                    : colors.primary,
                },
              ]}>
              {dayOfMonth}
            </Text>
            {dayIsHavingEvents && <EventDot size={4} />}
          </View>,
        );
      } else {
        renderedDays.push(<View key={getTime(day)} style={styles.emptyDay} />);
      }
    }

    renderedWeeks.push(
      <View key={getTime(week)} style={styles.weekView}>
        {renderedDays}
      </View>,
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate('Month', { id: format(month, 'yyyy-MM-dd') })
      }>
      <View style={styles.monthView}>
        <Text style={styles.monthTitle}>
          {month.toLocaleString('default', { month: 'long' })}
        </Text>
        {renderedWeeks}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Month;

const styles = StyleSheet.create({
  monthView: {
    width: width / 3 - 30,
    marginBottom: 10,
    // height: 160,
  },
  monthTitle: {
    fontSize: 14,
    marginBottom: 5,
    color: colors.primary,
  },
  weekView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayView: {
    flex: 1,
    height: 21,
    alignItems: 'center',
  },
  dayText: {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 'bold',
  },
  emptyDay: {
    flex: 1,
  },
});
