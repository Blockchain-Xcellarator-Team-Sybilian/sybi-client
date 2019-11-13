import { StyleSheet } from 'App/Theme';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  background: {
    flex: 1,
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
    width: width < height ? width : height,
    height: width < height ? height : width,
    resizeMode: 'cover',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    top: 0,
    left: 0,
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
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
