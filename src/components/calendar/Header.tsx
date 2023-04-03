import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors } from '../../theme/colors';

type HeaderProps = {
  year: number;
  onGoToCurrentYear: () => void;
};

const Header = ({ year, onGoToCurrentYear }: HeaderProps) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerImage}>
        <FontAwesome size={16} name="image" color={colors.secondary} />
      </View>
      <View style={styles.headerYearContainer}>
        <Text style={styles.headerYear}>{year}</Text>
        <TouchableOpacity
          style={styles.headerCalendar}
          onPress={onGoToCurrentYear}>
          <MaterialCommunityIcons
            name="calendar-month"
            size={25}
            color={colors.secondary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  headerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerYearContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerYear: {
    fontSize: 20,
    color: colors.primary,
  },
  headerCalendar: {
    width: 35,
    height: 35,
    borderRadius: 5,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
