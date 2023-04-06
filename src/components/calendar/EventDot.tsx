import { View } from 'react-native';
import { colors } from '../../theme/colors';

type EventDotProps = {
  size: number;
};

const EventDot = ({ size }: EventDotProps) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: colors.highlightDot,
      }}
    />
  );
};

export default EventDot;
