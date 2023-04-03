import { StyleSheet, View, Modal, ActivityIndicator } from 'react-native';
import { colors } from '../../theme/colors';

type LoadingModalProps = {
  visible: boolean;
};

const LoadingModal = ({ visible }: LoadingModalProps) => {
  console.log(visible);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      statusBarTranslucent={true}>
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    </Modal>
  );
};

export default LoadingModal;

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});
