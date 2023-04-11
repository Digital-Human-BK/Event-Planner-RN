import { format } from 'date-fns';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { width } from '../../constants/ui';
import { colors } from '../../theme/colors';

type EventsProps = {
  title: string;
  description: string;
  timestamp: number;
};

const EventItem = ({ title, description, timestamp }: EventsProps) => {
  const date = new Date(timestamp);
  const formattedDate = format(date, "dd MMM yyyy 'at' HH:mm 'UTC+2'");

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <Text style={styles.dateText}>{formattedDate}</Text>
        <View style={styles.imageContainer}>
          <FontAwesome name="image" size={40} color={colors.primary} />
        </View>
        <Text style={styles.eventTitle}>{title}</Text>
        <Text style={styles.eventText}>{description}</Text>
      </View>
    </View>
  );
};

export default EventItem;

const styles = StyleSheet.create({
  container: {
    width: width,
    paddingHorizontal: 25,
    marginTop: 20,
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
