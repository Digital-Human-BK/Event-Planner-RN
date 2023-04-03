import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { colors } from '../theme/colors';

const { width } = Dimensions.get('window');

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        resizeMode="cover"
        source={require('../assets/logo.png')}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width / 2,
    height: width / 2,
  },
  logoText: {
    fontSize: 20,
    color: colors.primary,
  },
});
