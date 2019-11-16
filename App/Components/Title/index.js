import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, RKText, MaterialIcon } from 'App/Components/UI';
import COLORS from 'App/Theme/Colors';
import styles from './styles';

export class Title extends PureComponent {
  render() {
    const { title } = this.props;

    const text = title.toUpperCase();

    return (
      <View style={styles.root}>
        <RKText style={styles.title}>{text}</RKText>
      </View>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

Title.defaultProps = {};

export default Title;
