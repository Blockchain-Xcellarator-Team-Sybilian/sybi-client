import React, { PureComponent } from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import { Images } from 'App/Theme';
import styles from './style';

export class Container extends PureComponent {
  render() {
    const { children } = this.props;


    return (
      <View style={styles.background}>
        <Image
          resizeMode="cover"
          source={Images.background}
          style={styles.imageBackground}
        />
        {children}
      </View>
    );
  }
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

Container.defaultProps = {};

export default Container;
