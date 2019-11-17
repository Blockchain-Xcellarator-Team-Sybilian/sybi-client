import COLORS from 'App/Theme/Colors';
import { StyleSheet } from 'App/Theme';

const styles = StyleSheet.create({
  root: {},
  message: {
    color: COLORS.text,
    textAlign: 'justify',
  },
  bridge: {
    color: COLORS.text,
    textAlign: 'justify',
    marginTop: 8,
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    borderColor: COLORS.headerBorder,
    alignItems: 'flex-start',
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: COLORS.primary,
    alignSelf: 'flex-end',
  }
});

export default styles;
