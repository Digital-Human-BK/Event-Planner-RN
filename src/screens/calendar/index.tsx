import { createNativeStackNavigator } from '@react-navigation/native-stack';

import YearScreen from './YearScreen';
import MonthScreen from './MonthScreen';
import { RootStackParamList } from '../../interfaces/navigation';

const CalendarStack = createNativeStackNavigator<RootStackParamList>();

const CalendarStackScreen = () => {
  return (
    <CalendarStack.Navigator>
      <CalendarStack.Screen
        name="Year"
        component={YearScreen}
        options={{ headerShown: false }}
      />
      <CalendarStack.Screen
        name="Month"
        component={MonthScreen}
        options={{ headerShown: false }}
      />
    </CalendarStack.Navigator>
  );
};

export default CalendarStackScreen;
