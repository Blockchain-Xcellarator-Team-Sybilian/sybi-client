import { StyleSheet } from 'App/Theme';
import COLORS from '../../Theme/Colors';

const styles = StyleSheet.create({
  backdrop: {
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: COLORS.primary,
    borderColor: COLORS.headerBorder
  },
  text: {
    color: COLORS.white
  },
  center: {
    textAlign: 'center',
  }
});

export default styles;
