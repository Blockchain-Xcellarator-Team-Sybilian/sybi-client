import { Platform } from 'react-native';
import { StyleSheet } from 'App/Theme';
import COLORS from 'App/Theme/Colors';
import { type } from '../../Theme/Fonts';

const styles = StyleSheet.create({
  root: {
    top: 0,
    height: 60,
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    backgroundColor: COLORS.white,
    marginTop: Platform.OS === 'ios' ? 20 : 0, // only for IOS to give StatusBar Space
  },
  borderRoot: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.headerBorder,
  },
  titleRoot: {
    flex: 1,
    marginLeft: 8,
  },
  title: {
    ...type.titleObject,
    fontSize: 18,
  },
  backIcon: {
    width: 24,
    height: 24,
    marginLeft: 8,
    tintColor: COLORS.primary
  },
});

export default styles;
