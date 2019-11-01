import { StyleSheet } from 'react-native';
import Colors from 'App/Theme/Colors';
import ApplicationStyles from 'App/Theme/ApplicationStyles';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    alignItems: 'center',
    backgroundColor: Colors.white,
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    height: '100%',
    width: '100%',
  },
  logoContainer: {
    height: 300,
    marginBottom: 25,
    width: '80%',
  },
});
