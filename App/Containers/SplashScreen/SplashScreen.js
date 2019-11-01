import React from 'react';
import { Images } from 'App/Theme';
import { View, Image } from 'react-native';
import styles from './SplashScreenStyle';

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={Images.logo} resizeMode={'contain'} />
        </View>
      </View>
    );
  }
}
