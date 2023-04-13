import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Year: undefined;
  Month: { monthId: string };
};

export interface StackNavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  // any other props your component may need
}

export type IconsType = {
  [key: string]: string;
};
