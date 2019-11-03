import { Text } from 'galio-framework';
import React, { PureComponent } from 'react';
import resaga from 'resaga';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { CONFIG } from './config';
import styles from './styles';

export class MainScreen extends PureComponent {
  render() {
    const { message } = this.props;

    return (
      <View style={styles.container}>
        <Text p>{message}</Text>
      </View>
    );
  }
}

MainScreen.propTypes = {
  message: PropTypes.string,
};

MainScreen.defaultProps = {
  message: '',
};

export default resaga(CONFIG)(MainScreen);
