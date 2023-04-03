import { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { eachMonthOfInterval, startOfYear, endOfYear } from 'date-fns';

import Month from './Month';

const Year = ({ year }: { year: Date }) => {
  const months = useMemo(
    () =>
      eachMonthOfInterval({
        start: startOfYear(year),
        end: endOfYear(year),
      }),
    [year],
  );

  return (
    <View style={styles.yearView}>
      {months.map(month => (
        <Month key={month.getTime()} month={month} />
      ))}
    </View>
  );
};

export default Year;

const styles = StyleSheet.create({
  yearView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    columnGap: 20,
  },
});
