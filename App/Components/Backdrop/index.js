import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { RKText, ViewPadding } from 'App/Components/UI';
import styles from './styles';

export class Backdrop extends PureComponent {
  render() {
    const { children, center } = this.props;

    return (
      <ViewPadding style={styles.backdrop}>
        <RKText category="c2" style={[center && styles.center, styles.text]}>
          {children}
        </RKText>
      </ViewPadding>
    );
  }
}

Backdrop.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.any.isRequired,
};

Backdrop.defaultProps = {};

export default Backdrop;
