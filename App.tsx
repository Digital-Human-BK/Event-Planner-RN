import { View, StatusBar } from 'react-native';
import YearCalendar from './src/screens/YearCalendar';
import { useEffect, useState } from 'react';
import { colors } from './src/theme/colors';
import Splash from './src/screens/Splash';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 20);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: colors.secondary }}>
      <StatusBar backgroundColor={colors.secondary} barStyle="dark-content" />
      {showSplash ? <Splash /> : <YearCalendar />}
    </View>
  );
};

export default App;
