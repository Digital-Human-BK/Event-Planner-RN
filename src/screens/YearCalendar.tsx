import { FlashList } from '@shopify/flash-list';
import { useRef, useState, useCallback } from 'react';
import { View, ScrollView, useWindowDimensions } from 'react-native';

import Year from '../components/calendar/Year';
import Header from '../components/calendar/Header';
import Events from '../components/calendar/Events';

import { colors } from '../theme/colors';
import { currentYear, yearsList } from '../constants/calendar';

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
