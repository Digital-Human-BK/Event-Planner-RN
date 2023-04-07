import { StyleSheet, Text, View } from 'react-native';

const Messages = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Messages</Text>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
});
