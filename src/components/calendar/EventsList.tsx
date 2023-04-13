import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../../theme/colors';

import EventItem from './EventItem';
import { EVENTS_DATA } from '../../utils/events';

type EventsListProps = {
  date: string;
};

const EventsList = ({ date }: EventsListProps) => {
  const month = date.slice(0, -3);
  const events = EVENTS_DATA[month];
  return (
    <View style={styles.container}>
      {events && events.length > 0 ? (
        events.map((event, i) => (
          <EventItem
            key={`${event.title}-${i}`}
            title={event.title}
            description={event.description}
            timestamp={event.exactTime}
          />
        ))
      ) : (
        <Text
          style={{ color: colors.primary, textAlign: 'center', fontSize: 20 }}>
          No scheduled events.
        </Text>
      )}
    </View>
  );
};

export default EventsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
