import { FlashList } from '@shopify/flash-list';
import { View, Text, Dimensions } from 'react-native';

import Header from '../components/calendar/Header';
import Events from '../components/calendar/Events';
import { ScrollView } from 'react-native';

const color = '#00AFF0';
const { width } = Dimensions.get('window');

const MONTHS_PER_ROW = 3;
const MONTHS_PER_YEAR = 12;
const DAYS_PER_WEEK = 7;
const MONTH_NAMES = [
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
];

const Year = ({ currentYear }: { currentYear: number }) => {
  const weeksInMonth = (month: any, year: any) => {
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
      const year = currentYear;
      const weeks = weeksInMonth(month, year);
      const days = [];
      for (let w = 0; w < weeks; w++) {
        const week = [];
        for (let d = 0; d < DAYS_PER_WEEK; d++) {
          const day = w * DAYS_PER_WEEK + d - new Date(year, month, 1).getDay();
          if (day >= 0 && day < new Date(year, month + 1, 0).getDate()) {
            week.push(
              <Text
                key={`${year}-${month}-${day}`}
                style={{
                  flex: 1,
                  height: 20,
                  textAlign: 'center',
                  fontSize: 10,
                  color: color,
                }}>
                {day + 1}
              </Text>,
            );
          } else {
            week.push(
              <View key={`${year}-${month}-${day}`} style={{ flex: 1 }} />,
            );
          }
        }
        days.push(
          <View key={w} style={{ flexDirection: 'row', width: width / 3 - 30 }}>
            {week}
          </View>,
        );
      }
      row.push(
        <View key={`${year}-${month}`} style={{ marginBottom: 5 }}>
          <Text
            style={{
              textAlign: 'left',
              fontWeight: 'bold',
              marginBottom: 5,
              color: color,
            }}>
            {MONTH_NAMES[month]}
          </Text>
          {days}
        </View>,
      );
    }
    months.push(
      <View
        key={i}
        style={{
          flexDirection: 'row',
          flex: 1,
          columnGap: 20,
          justifyContent: 'center',
        }}>
        {row}
      </View>,
    );
  }

  return (
    <View style={{ flex: 1, width: width, marginBottom: 30 }}>{months}</View>
  );
};

const YearView = () => {
  const renderItem = ({ item }: any) => {
    return (
      <>
        <Header year={item} />
        <Year currentYear={item} />
        <Events />
      </>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ backgroundColor: '#ffffff' }}>
        <FlashList
          contentContainerStyle={{ paddingVertical: 30 }}
          data={[2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030]}
          renderItem={renderItem}
          keyExtractor={item => item.toString()}
          horizontal
          pagingEnabled
          initialScrollIndex={2}
          scrollEventThrottle={16}
          estimatedItemSize={width}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
};

export default YearView;
