import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

import Splash from './Splash';
import Events from '../components/calendar/Events';
import Header from '../components/calendar/Header';

import {
  initialYears,
  generateNextYears,
  generatePreviousYears,
} from '../utils/generateYears';
import { colors } from '../theme/colors';

const { width } = Dimensions.get('window');

const _viewabilityConfig = {
  itemVisiblePercentThreshold: 90,
};

type YearItem = {
  id: string;
  element: Element;
};

const YearCalendar = () => {
  const ref = useRef<FlatList>(null);
  console.log('New render');

  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [currentYearIndex, setCurrentYearIndex] = useState<number>(2);
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [yearsList, setYearsList] = useState<YearItem[]>(initialYears);
  console.log(currentYearIndex);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  const scrollToIndex = (index: number, animated: boolean) => {
    ref?.current?.scrollToIndex({
      animated: animated,
      index: index,
    });
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const distanceFromEnd =
      contentSize.width - layoutMeasurement.width - contentOffset.x;

    // const indexOfItem = Math.round(contentOffset.x / layoutMeasurement.width);
    // setCurrentIndex(indexOfItem);

    // console.log(indexOfItem);

    if (distanceFromEnd < 1) {
      // add more items to the end
      console.log('adding to end');
      const lastYearValue = new Date(yearsList[yearsList.length - 1].id);
      const nextYears = generateNextYears(lastYearValue);
      setYearsList(currentData => [...currentData, ...nextYears]);
    } else if (contentOffset.x <= 0) {
      console.log('adding to beginning');
      const firstYearValue = new Date(yearsList[0].id);

      // add more items to the beginning
      const previousYears = generatePreviousYears(firstYearValue);
      setYearsList(currentData => [...previousYears, ...currentData]);
      setCurrentYearIndex(index => index + 1);
      // scrollToIndex(3, false);
    }
  };

  const goToCurrentYear = () => {
    scrollToIndex(currentYearIndex, true);
  };

  const onViewableItemsChanged = useCallback(({ viewableItems }: any) => {
    console.log(viewableItems);

    if (viewableItems.length > 0) {
      setYear(new Date(viewableItems[0].item.id).getFullYear());
    }
  }, []);

  if (showSplash) {
    return <Splash />;
  }

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: colors.secondary,
      }}>
      <View style={styles.container}>
        <Header year={year} onGoToCurrentYear={goToCurrentYear} />
        <FlatList
          ref={ref}
          data={yearsList}
          renderItem={({ item }) => (
            <View style={{ width: width, padding: 25 }}>
              <>
                {item.element}
                <Events />
              </>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
          horizontal
          pagingEnabled
          initialScrollIndex={2}
          getItemLayout={(_, index) => ({
            length: width,
            offset: width * index,
            index,
          })}
          bounces={false}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          decelerationRate="normal"
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={_viewabilityConfig}
          //item is considered visible when at least 90% of it is visible
        />
      </View>
    </ScrollView>
  );
};

export default YearCalendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    marginVertical: 10,
  },
});
