import { useRef, useState, useCallback } from 'react';
import { View, FlatList } from 'react-native';

import { width } from '../constants/ui';
import { colors } from '../theme/colors';
import { currentYear } from '../constants/calendar';

import Header from '../components/calendar/Header';
import InitialYears from '../components/calendar/InitialYears';

const Calendar = () => {
  const [year, setYear] = useState(currentYear);

  const renderItem = useCallback(({ item }: { item: any }) => {
    return item.element;
  }, []);

  const onViewChanged = useRef(({ changed }: any) => {
    if (changed[0].isViewable) {
      setYear(changed[0].item.id);
    }
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 60 });

  return (
    <View style={{ flex: 1, backgroundColor: colors.secondary }}>
      <Header year={year} />
      <FlatList
        contentContainerStyle={{ paddingVertical: 20 }}
        data={InitialYears}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
        initialScrollIndex={2}
        initialNumToRender={10}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        decelerationRate={'normal'}
        pagingEnabled
        bounces={false}
        disableIntervalMomentum
        showsHorizontalScrollIndicator={false}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewChanged.current}
      />
    </View>
  );
};

export default Calendar;
