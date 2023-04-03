import React, { useState, useRef, useEffect } from 'react';
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
// import LoadingModal from '../components/UI/LoadingModal';

import { colors } from '../theme/colors';
import {
  generateNextYears,
  generatePreviousYears,
  initialYears,
} from '../utils/generateYears';

const { width } = Dimensions.get('window');

type YearItem = {
  id: string;
  element: Element;
};

const YearCalendar = () => {
  const ref = useRef<FlatList>(null);
  console.log('New render');

  // const [currentIndex, setCurrentIndex] = useState(4);
  const [currentYearIndex, setCurrentYearIndex] = useState(4);
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
    const bufferThreshold = layoutMeasurement.width * 2;

    if (
      distanceFromEnd < bufferThreshold + 0.5 &&
      distanceFromEnd > bufferThreshold - 5
    ) {
      // if (distanceFromEnd < 1) {
      // add more items to the end
      console.log('adding to end');
      const lastYearValue = new Date(yearsList[yearsList.length - 1].id);
      const nextYears = generateNextYears(lastYearValue);
      setYearsList(currentData => [...currentData, ...nextYears]);
    } else if (contentOffset.x <= 0) {
      // } else if (
      //   contentOffset.x <= bufferThreshold &&
      //   contentOffset.x > bufferThreshold - 50
      // ) {
      console.log('adding to beginning');
      const firstYearValue = new Date(yearsList[0].id);

      // add more items to the beginning
      const previousYears = generatePreviousYears(firstYearValue);
      setYearsList(currentData => [...previousYears, ...currentData]);
      setCurrentYearIndex(index => index + 3);
      scrollToIndex(3, false);
    }
  };

  const goToCurrentYear = () => {
    scrollToIndex(currentYearIndex, true);
  };

  // const onViewableItemsChanged = useCallback(({ viewableItems }: any) => {
  //   if (viewableItems.length > 0) {
  //     setCurrentIndex(viewableItems[0].index);
  //   }
  // }, []);

  if (showSplash) {
    return <Splash />;
  }

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: colors.secondary,
      }}>
      <View style={styles.container}>
        <FlatList
          ref={ref}
          data={yearsList}
          renderItem={({ item }) => (
            <View style={{ width: width, padding: 25 }}>
              <Header
                year={new Date(item.id).getFullYear()}
                onGoToCurrentYear={goToCurrentYear}
              />
              <>
                {item.element}
                <Events />
              </>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
          horizontal
          pagingEnabled
          initialScrollIndex={4}
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
          // onViewableItemsChanged={onViewableItemsChanged}
          // viewabilityConfig={{
          //   itemVisiblePercentThreshold: 90,
          // }}
          // item is considered visible when at least 90% of it is visible
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
