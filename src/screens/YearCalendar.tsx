import { useRef, useState, useCallback } from 'react';
import { FlashList } from '@shopify/flash-list';
import { View, Text, ScrollView, useWindowDimensions } from 'react-native';

import Header from '../components/calendar/Header';
import Events from '../components/calendar/Events';

import { colors } from '../theme/colors';
import { currentYear, yearsList } from '../utils/yearsList';

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

const Year = ({ yearProp }: { yearProp: number }) => {
  const { width } = useWindowDimensions();

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
      const year = yearProp;
      const weeks = weeksInMonth(month, year);
      const days = [];
      for (let w = 0; w < weeks; w++) {
        const week = [];
        for (let d = 0; d < DAYS_PER_WEEK; d++) {
          const day = w * DAYS_PER_WEEK + d - new Date(year, month, 1).getDay();
          if (day >= 0 && day < new Date(year, month + 1, 0).getDate()) {
            week.push(
              // single day
              <Text
                key={`${year}-${month}-${day}`}
                style={{
                  flex: 1,
                  height: 20,
                  textAlign: 'center',
                  fontSize: 10,
                  color: colors.primary,
                }}>
                {day + 1}
              </Text>,
            );
          } else {
            // empty day
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
              color: colors.primary,
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
    <View style={{ flex: 1, width: width, marginBottom: 20 }}>{months}</View>
  );
};

const YearCalendar = () => {
  const { width } = useWindowDimensions();
  const [itemIndex, setItemIndex] = useState(currentYear);

  const renderItem = useCallback(({ item }: { item: number }) => {
    return (
      <View style={{ flex: 1 }}>
        <Year yearProp={item} />
        <Events />
      </View>
    );
  }, []);

  const onViewChanged = useRef(({ changed }: any) => {
    if (changed[0].isViewable) {
      setItemIndex(changed[0].item);
    }
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 60 });

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ backgroundColor: colors.secondary }}>
        <Header year={itemIndex} />
        <FlashList
          contentContainerStyle={{ paddingVertical: 30 }}
          data={yearsList}
          renderItem={renderItem}
          keyExtractor={item => item.toString()}
          horizontal
          initialScrollIndex={2}
          estimatedItemSize={width}
          decelerationRate={'normal'}
          pagingEnabled
          bounces={false}
          disableIntervalMomentum
          showsHorizontalScrollIndicator={false}
          viewabilityConfig={viewConfigRef.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </ScrollView>
    </View>
  );
};

export default YearCalendar;
