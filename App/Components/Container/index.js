import React, { PureComponent } from 'react';
import { View, Image } from 'react-native';
import { AnimatedView } from 'App/Components/Animated';
import PropTypes from 'prop-types';
import { Images } from 'App/Theme';
import styles from './style';

export class Container extends PureComponent {
  render() {
    const {
      animated, children, center, dense, small, noBorder, style
    } = this.props;

    const bgStyle = [center && styles.center, styles.background];
    const childStyle = [center && styles.center, dense ? styles.dense : styles.normal, style];

    let content = (
      <View style={childStyle}>
        {children}
      </View>
    );

    if (animated) {
      content = (
        <AnimatedView animation="fadeIn" style={childStyle}>
          {content}
        </AnimatedView>
      );
    }

    if (noBorder) {
      content = children;
    }

    return (
      <View style={bgStyle}>
        <Image
          resizeMode="cover"
          source={Images.background}
          style={styles.imageBackground}
        />
        {content}
      </View>
    );
  }
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  dense: PropTypes.bool,
  noBorder: PropTypes.bool,
  animated: PropTypes.bool,
  center: PropTypes.bool,
};

Container.defaultProps = {
  style: {},
  dense: false,
  center: false,
  animated: false,
  noBorder: false,
};

export default Container;
