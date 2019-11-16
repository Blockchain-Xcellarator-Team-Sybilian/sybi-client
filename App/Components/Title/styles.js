import { StyleSheet } from 'App/Theme';
import COLORS from '../../Theme/Colors';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    marginRight: 8,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    borderBottomWidth: 3,
    color: COLORS.subtitle,
    borderBottomColor: COLORS.primary,
  }
});

export default styles;
