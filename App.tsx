import { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors } from './src/theme/colors';
import { Icons } from './src/constants/navigation';

import Splash from './src/screens/Splash';
import Values from './src/screens/Values';
import Messages from './src/screens/Messages';
import Progress from './src/screens/Progress';
import Calendar from './src/screens/Calendar';

const Tab = createBottomTabNavigator();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 50);
  }, []);

  if (showSplash) {
    return <Splash />;
  }

  return (
    <>
      <StatusBar backgroundColor={colors.secondary} barStyle="dark-content" />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Calendar"
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: colors.highlightEvent,
            tabBarInactiveTintColor: colors.primary,
            tabBarIcon: ({ color }) => {
              return (
                <MaterialCommunityIcons
                  name={Icons[route.name]}
                  color={color}
                  size={40}
                />
              );
            },
            tabBarLabelStyle: {
              fontSize: 14,
            },
            tabBarStyle: {
              elevation: 0, // for Android
              shadowOffset: {
                width: 0,
                height: 0, // for iOS
              },
              height: 100,
              borderTopWidth: 2,
              borderTopColor: colors.primary,
              paddingTop: 10,
              paddingBottom: 25,
            },
          })}>
          <Tab.Screen name="Calendar" component={Calendar} />
          <Tab.Screen name="Values" component={Values} />
          <Tab.Screen name="Messages" component={Messages} />
          <Tab.Screen name="Progress" component={Progress} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
