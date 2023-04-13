import { useNavigation } from '@react-navigation/native';
import { useRef, useState, useCallback, useEffect } from 'react';
import { View, FlatList, StyleSheet, ViewToken } from 'react-native';

import { width } from '../../constants/ui';
import { colors } from '../../theme/colors';
import { YearProps } from '../../interfaces/calendar';
import { currentYear, today } from '../../constants/calendar';
import { StackNavigationProps } from '../../interfaces/navigation';

import Header from '../../components/calendar/Header';
import InitialYears from '../../components/calendar/InitialYears';

type ViewableItems = {
  viewableItems: ViewToken[];
  changed: ViewToken[];
};

const YearScreen = () => {
  const navigation = useNavigation<StackNavigationProps['navigation']>();
  const [year, setYear] = useState(currentYear);

  const renderItem = useCallback(({ item }: { item: YearProps }) => {
    return item.element;
  }, []);

  const onViewChanged = useRef(({ changed }: ViewableItems) => {
    if (changed[0].isViewable) {
      setYear(changed[0].item.id);
    }
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 60 });

  useEffect(() => {
    navigation.navigate('Month', { monthId: today });
  }, [navigation]);

  return (
    <View style={styles.container}>
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

export default YearScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
});
