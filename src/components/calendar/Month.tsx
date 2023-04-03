import { View, Text, Dimensions, StyleSheet } from 'react-native';

import {
  eachWeekOfInterval,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  isSameDay,
} from 'date-fns';

import { colors } from '../../theme/colors';
const { width } = Dimensions.get('window');

import { EVENTS } from '../../utils/events';
import EventDot from '../UI/EventDot';

const Month = ({ month }: { month: Date }) => {
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
      const dayOfMonth = day.getDate();
      const dayIsHavingEvents = EVENTS.some(obj => isSameDay(day, obj.date));

      // Only render the day if it belongs to the current month
      if (day.getMonth() === month.getMonth()) {
        renderedDays.push(
          <View key={day.getTime()} style={styles.dayView}>
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
        renderedDays.push(<View key={day.getTime()} style={styles.emptyDay} />);
      }
    }

    renderedWeeks.push(
      <View key={week.getTime()} style={styles.weekView}>
        {renderedDays}
      </View>,
    );
  }

  return (
    <View style={styles.monthView}>
      <Text style={styles.monthTitle}>
        {month.toLocaleString('default', { month: 'long' })}
      </Text>
      {renderedWeeks}
    </View>
  );
};

export default Month;

const styles = StyleSheet.create({
  monthView: {
    width: width / 3 - 30,
    marginBottom: 15,
    height: 160,
  },
  monthTitle: {
    fontSize: 14,
    marginBottom: 10,
    color: colors.primary,
  },
  weekView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayView: {
    flex: 1,
    height: 24,
    alignItems: 'center',
  },
  dayText: {
    // flex: 1,
    textAlign: 'center',
    fontSize: 10,
    // marginBottom: 10,
    fontWeight: 'bold',
    // color: colors.primary,
  },
  emptyDay: {
    flex: 1,
  },
});
