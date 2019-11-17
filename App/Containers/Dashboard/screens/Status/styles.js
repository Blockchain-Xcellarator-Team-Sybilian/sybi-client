import { StyleSheet } from 'App/Theme';
import COLORS from 'App/Theme/Colors';

const styles = StyleSheet.create({
  root: {},
  message: {
    color: COLORS.text,
    textAlign: 'justify',
  },
  status: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  accept: {
    fontWeight: 'bold',
    color: COLORS.white,
  },
  cancel: {
    fontWeight: 'bold',
    color: COLORS.text,
  },
  cancelButton: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.headerBorder,
  }
});

export default styles;
