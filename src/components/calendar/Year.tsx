import { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { eachMonthOfInterval, startOfYear, endOfYear, getTime } from 'date-fns';

import Month from './Month';
import { width } from '../../constants/ui';

const Year = ({ yearProp }: { yearProp: number }) => {
  const year = useMemo(() => new Date(yearProp, 0, 1), [yearProp]);
  const months = useMemo(() => {
    return eachMonthOfInterval({
      start: startOfYear(year),
      end: endOfYear(year),
    });
  }, [year]);

  return (
    <View style={styles.yearView}>
      {months.map(month => (
        <Month key={getTime(month)} month={month} />
      ))}
    </View>
  );
};

export default Year;

const styles = StyleSheet.create({
  yearView: {
    width: width,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    columnGap: 20,
  },
});
