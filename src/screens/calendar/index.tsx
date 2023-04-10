import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Month from './Month';
import Calendar from './Calendar';
import { RootStackParamList } from '../../interfaces/navigation';

const CalendarStack = createNativeStackNavigator<RootStackParamList>();

const CalendarStackScreen = () => {
  return (
    <CalendarStack.Navigator>
      <CalendarStack.Screen
        name="Year"
        component={Calendar}
        options={{ headerShown: false }}
      />
      <CalendarStack.Screen
        name="Month"
        component={Month}
        options={{ headerShown: false }}
      />
    </CalendarStack.Navigator>
  );
};

export default CalendarStackScreen;
