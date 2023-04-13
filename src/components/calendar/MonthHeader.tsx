import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors } from '../../theme/colors';
import { format } from 'date-fns';
import { width } from '../../constants/ui';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProps } from '../../interfaces/navigation';

type MonthHeaderProps = {
  date: Date;
  onPressLeft: () => void;
};

const MonthHeader = ({ date, onPressLeft }: MonthHeaderProps) => {
  const currentDate = new Date(date);
  const navigation = useNavigation<StackNavigationProps['navigation']>();
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerImage}>
        <FontAwesome
          size={16}
          name="image"
          color={colors.secondary}
          onPress={onPressLeft}
        />
      </View>
      <View style={styles.headerMonthContainer}>
        <Text style={styles.headerTitle}>
          {format(currentDate, 'MMMM yyyy')}
        </Text>
        <MaterialCommunityIcons
          name="calendar-month"
          size={24}
          color={colors.primary}
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

export default MonthHeader;

const styles = StyleSheet.create({
  headerContainer: {
    width: width - 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 30,
  },
  headerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerMonthContainer: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerTitle: {
    fontSize: 16,
    color: colors.primary,
  },
});
