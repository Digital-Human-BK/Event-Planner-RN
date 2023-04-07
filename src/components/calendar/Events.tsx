import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { width } from '../../constants/ui';
import { colors } from '../../theme/colors';

const Events = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <Text style={styles.dateText}>05 JAN AT 11:00 UTC+02</Text>
        <View style={styles.imageContainer}>
          <FontAwesome name="image" size={40} color={colors.primary} />
        </View>
        <Text style={styles.eventTitle}>Growth Summit</Text>
        <Text style={styles.eventText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          nulla qui dolorem id possimus laboriosam commodi voluptates unde ipsa
          nam animi magnam eius illo, hic consequuntur, libero molestias placeat
          quod.
        </Text>
      </View>
    </View>
  );
};

export default Events;

const styles = StyleSheet.create({
  container: {
    width: width,
    paddingHorizontal: 25,
  },
  contentWrapper: {
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 15,
    paddingVertical: 10,
  },
  dateText: {
    paddingHorizontal: 10,
    color: colors.primary,
    fontSize: 14,
    marginBottom: 10,
  },
  imageContainer: {
    height: 150,
    backgroundColor: '#d5f4ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
    padding: 10,
  },
  eventText: {
    color: colors.primary,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});
