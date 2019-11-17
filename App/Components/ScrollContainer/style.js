import { StyleSheet } from 'App/Theme';

export default StyleSheet.create({
  background: {
    flex: 1,
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
