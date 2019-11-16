import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { RKText, View, Button } from 'App/Components/UI';
import { Image } from 'react-native';
import { Images } from 'App/Theme';
import styles from './styles';

export class ActionButton extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <View style={styles.root}>
        <Button style={styles.button}>
          <RKText category="s2" style={styles.text}>
            {children}
          </RKText>
          <Image source={Images.forwardIcon} style={styles.icon} />
        </Button>
      </View>
    );
  }
}

ActionButton.propTypes = {
  children: PropTypes.any.isRequired,
};

ActionButton.defaultProps = {};

export default ActionButton;
