import React from 'react';
import PropTypes from 'prop-types';
import { Images } from 'App/Theme';
import { Image } from 'react-native';
import { AnimatedView } from 'App/Components/Animated';
import Container from 'App/Components/Container';
import styles from './SplashScreenStyle';

export class SplashScreen extends React.Component {
  render() {
    const { animation, onAnimationEnd } = this.props;

    return (
      <Container center noBorder>
        <AnimatedView
          animation={animation}
          onAnimationEnd={onAnimationEnd}
          style={styles.logoContainer}
        >
          <Image resizeMode="contain" style={styles.logo} source={Images.logoFill} />
        </AnimatedView>
      </Container>
    );
  }
}

SplashScreen.propTypes = {
  animation: PropTypes.string,
  onAnimationEnd: PropTypes.func,
};

SplashScreen.defaultProps = {
  animation: 'fadeInDown',
  onAnimationEnd: () => {},
};

export default SplashScreen;
