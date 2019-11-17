import { StyleSheet } from 'App/Theme';
import COLORS from 'App/Theme/Colors';

const styles = StyleSheet.create({
  bar: {
    borderTopWidth: 1,
    backgroundColor: COLORS.white,
    borderTopColor: COLORS.headerBorder,
  },
  label: {
    fontSize: 8,
    textAlign: 'center',
    color: COLORS.primary,
    textTransform: 'uppercase',
  },
});

export default styles;
