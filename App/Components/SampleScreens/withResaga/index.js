import resaga from 'resaga';
import React, { PureComponent } from 'react';
import { RKText } from 'App/Components/UI';
import Container from 'App/Components/Container';
import PropTypes from 'prop-types';
import { CONFIG } from './config';
import styles from './styles';

export class Sample extends PureComponent {
  render() {
    return (
      <Container center>
        <RKText>Sample</RKText>
      </Container>
    );
  }
}

Sample.propTypes = {
  resaga: PropTypes.object.isRequired,
};

Sample.defaultProps = {};

export default resaga(CONFIG)(Sample);
