import React, { PureComponent } from 'react';
import { RKText } from 'App/Components/UI';
import Container from 'App/Components/Container';
import PropTypes from 'prop-types';
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

Sample.propTypes = {};

Sample.defaultProps = {};

export default Sample;
