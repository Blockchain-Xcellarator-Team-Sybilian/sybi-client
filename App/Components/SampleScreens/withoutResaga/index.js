import React, { PureComponent } from 'react';
import Container from 'App/Components/Container';
import PropTypes from 'prop-types';
import styles from './styles';

export class Sample extends PureComponent {
  render() {
    return (
      <Container center />
    );
  }
}

Sample.propTypes = {};

Sample.defaultProps = {};

export default Sample;
