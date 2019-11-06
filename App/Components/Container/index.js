import React, { PureComponent } from 'react';
import { ImageBackground, View } from 'react-native';
import { AnimatedView } from 'App/Components/Animated';
import PropTypes from 'prop-types';
import { Images } from 'App/Theme';
import styles from './style';

export class Container extends PureComponent {
  render() {
    const {
      animated, children, center, noBorder
    } = this.props;

    const bgStyle = [(center) ? styles.center : {}, styles.background];
    const childStyle = [(center) ? styles.center : {}, (!noBorder) ? styles.border : {}];

    let content = children;

    if (!noBorder) {
      content = (
        <View style={childStyle}>
          {children}
        </View>
      );
    }

    if (animated) {
      content = (
        <AnimatedView animation="fadeIn" style={childStyle}>
          {children}
        </AnimatedView>
      );
    }

    return (
      <ImageBackground
        resizeMode="cover"
        source={Images.background}
        style={bgStyle}
      >
        {content}
      </ImageBackground>
    );
  }
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  noBorder: PropTypes.bool,
  animated: PropTypes.bool,
  center: PropTypes.bool,
};

Container.defaultProps = {
  center: false,
  animated: false,
  noBorder: false,
};

export default Container;
