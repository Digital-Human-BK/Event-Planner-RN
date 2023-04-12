import { StyleSheet, Text, View } from 'react-native';

const Progress = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Progress</Text>
    </View>
  );
};

export default Progress;

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
