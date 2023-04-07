import {
  View,
  Text,
  useWindowDimensions,
  TouchableWithoutFeedback,
} from 'react-native';

import {
  MONTH_NAMES,
  MONTHS_PER_ROW,
  MONTHS_PER_YEAR,
  DAYS_PER_WEEK,
} from '../../constants/calendar';
import { colors } from '../../theme/colors';
import { EVENTS } from '../../utils/events';
import { formatToEventDate } from '../../utils/dateFormat';

import EventDot from './EventDot';

const Year = ({ yearProp }: { yearProp: number }) => {
  const { width } = useWindowDimensions();

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
            const date = formatToEventDate(year, month, day);
            const hasEvent = Boolean(EVENTS[date]);
            week.push(
              // single day
              <View
                key={date}
                style={{
                  flex: 1,
                  height: 22,
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}>
                <Text
                  style={[
                    {
                      textAlign: 'center',
                      fontSize: 10,
                    },
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
              <View key={`${year}-${month}-${day}`} style={{ flex: 1 }} />,
            );
          }
        }
        days.push(
          <View key={w} style={{ flexDirection: 'row' }}>
            {week}
          </View>,
        );
      }
      row.push(
        <TouchableWithoutFeedback
          onPress={() => console.log(formatToEventDate(year, month))}
          key={`${year}-${month}`}>
          <View style={{ width: width / 3 - 30, marginBottom: 10 }}>
            <Text
              style={{
                fontSize: 14,
                textAlign: 'left',
                fontWeight: 'bold',
                marginBottom: 5,
                color: colors.primary,
              }}>
              {MONTH_NAMES[month]}
            </Text>
            {days}
          </View>
        </TouchableWithoutFeedback>,
      );
    }
    months.push(
      <View
        key={i}
        style={{
          flexDirection: 'row',
          columnGap: 20,
          justifyContent: 'center',
        }}>
        {row}
      </View>,
    );
  }

  return (
    <View
      style={{
        width: width,
        marginBottom: 20,
      }}>
      {months}
    </View>
  );
};

export default Year;
