import { StyleSheet } from 'App/Theme';
import COLORS from '../../Theme/Colors';

const styles = StyleSheet.create({
  root: {
    marginVertical: 4
  },
  text: {
    flex: 1,
    fontWeight: 'bold',
    color: COLORS.text,
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
