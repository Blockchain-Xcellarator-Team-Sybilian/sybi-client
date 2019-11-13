import { StyleSheet } from 'App/Theme';
import { Dimensions } from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingTop: 60
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    top: 0,
    left: 0,
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  normal: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 24,
    marginVertical: 'auto',
  },
  small: {
    paddingHorizontal: 60,
  },
});
