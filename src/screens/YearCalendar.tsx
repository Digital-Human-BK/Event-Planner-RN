import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';

import Splash from './Splash';
import Events from '../components/calendar/Events';
import Header from '../components/calendar/Header';

import { initialYears } from '../utils/generateYears';
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
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [yearsList] = useState<YearItem[]>(initialYears);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  const onViewableItemsChanged = useCallback(({ changed }: any) => {
    if (changed[0].isViewable) {
      setYear(new Date(changed[0].key).getFullYear());
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
        <Header year={year} />
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
