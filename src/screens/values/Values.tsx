import { StyleSheet, Text, View } from 'react-native';

const Values = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Values</Text>
    </View>
  );
};

export default Values;

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
