import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';

import {
  MONTH_NAMES,
  MONTHS_PER_ROW,
  MONTHS_PER_YEAR,
  DAYS_PER_WEEK,
} from '../../constants/calendar';

import { width } from '../../constants/ui';
import { colors } from '../../theme/colors';
import { EVENTS } from '../../utils/events';
// import { formatToEventDate } from '../../utils/dateFormat';

import EventDot from './EventDot';

const Year = ({ yearProp }: { yearProp: number }) => {
  const weeksInMonth = (month: number, year: number) => {
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const daysInWeek = DAYS_PER_WEEK;
    const firstDayOfMonth = new Date(year, month, 1);
    const dayOfWeek = firstDayOfMonth.getDay();
    const daysBeforeMonth = dayOfWeek;
    const daysAfterMonth =
      (daysInWeek - ((daysInMonth + daysBeforeMonth) % daysInWeek)) %
      daysInWeek;
    const totalDays = daysBeforeMonth + daysInMonth + daysAfterMonth;
    return totalDays / daysInWeek;
  };

  const months: JSX.Element[] = [];
  for (let i = 0; i < MONTHS_PER_YEAR; i += MONTHS_PER_ROW) {
    const row = [];
    for (let j = i; j < i + MONTHS_PER_ROW; j++) {
      const month = j;
      const year = yearProp;
      const weeks = weeksInMonth(month, year);
      const days = [];
      for (let w = 0; w < weeks; w++) {
        const week = [];
        for (let d = 0; d < DAYS_PER_WEEK; d++) {
          const day = w * DAYS_PER_WEEK + d - new Date(year, month, 1).getDay();
          if (day >= 0 && day < new Date(year, month + 1, 0).getDate()) {
            // const date = formatToEventDate(year, month, day);
            const date = '2023-01-01';
            const hasEvent = Boolean(EVENTS[date]);
            week.push(
              // single day
              <View key={date} style={styles.dayContainer}>
                <Text
                  style={[
                    styles.dayText,
                    {
                      color: hasEvent ? colors.highlightEvent : colors.primary,
                      fontWeight: hasEvent ? '700' : '500',
                    },
                  ]}>
                  {day + 1}
                </Text>
                {hasEvent && <EventDot size={4} />}
              </View>,
            );
          } else {
            // empty day
            week.push(
              <View key={`${year}-${month}-${day}`} style={styles.emptyDay} />,
            );
          }
        }
        days.push(
          <View key={w} style={styles.weekContainer}>
            {week}
          </View>,
        );
      }
      row.push(
        <TouchableWithoutFeedback
          // onPress={() => console.log(formatToEventDate(year, month))}
          key={`${year}-${month}`}>
          <View style={styles.monthContainer}>
            <Text style={styles.monthLabel}>{MONTH_NAMES[month]}</Text>
            {days}
          </View>
        </TouchableWithoutFeedback>,
      );
    }
    months.push(
      <View key={i} style={styles.monthsWrapper}>
        {row}
      </View>,
    );
  }

  return <View style={styles.container}>{months}</View>;
};

export default Year;

const styles = StyleSheet.create({
  container: {
    width: width,
    marginBottom: 20,
  },
  dayContainer: {
    flex: 1,
    height: 22,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  dayText: {
    textAlign: 'center',
    fontSize: 10,
  },
  emptyDay: {
    flex: 1,
  },
  weekContainer: {
    flexDirection: 'row',
  },
  monthContainer: {
    width: width / 3 - 30,
    marginBottom: 10,
  },
  monthLabel: {
    fontSize: 14,
    textAlign: 'left',
    fontWeight: 'bold',
    marginBottom: 5,
    color: colors.primary,
  },
  monthsWrapper: {
    flexDirection: 'row',
    columnGap: 20,
    justifyContent: 'center',
  },
});
