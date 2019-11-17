import { StyleSheet } from 'App/Theme';
import COLORS from '../../Theme/Colors';

const styles = StyleSheet.create({
  root: {},
  imageRoot: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  imageButton: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.headerBorder,
    backgroundColor: COLORS.whiteOpaque,
  },
  imageSize: {
    width: 120,
    height: 120,
  },
});

export default styles;
