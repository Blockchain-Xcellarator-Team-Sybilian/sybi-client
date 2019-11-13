import resaga from 'resaga';
import React, { PureComponent } from 'react';
import Container from 'App/Components/Container';
import PropTypes from 'prop-types';
import { CONFIG } from './config';
import styles from './styles';

export class Sample extends PureComponent {
  render() {
    return (
      <Container center />
    );
  }
}

Sample.propTypes = {
  resaga: PropTypes.object.isRequired,
};

Sample.defaultProps = {};

export default resaga(CONFIG)(Sample);
