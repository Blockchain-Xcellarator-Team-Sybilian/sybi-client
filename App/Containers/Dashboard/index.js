import resaga from 'resaga';
import React, { PureComponent } from 'react';
import Container from 'App/Components/Container';
import { RKText } from 'App/Components/UI';
import PropTypes from 'prop-types';
import { CONFIG } from './config';
import styles from './styles';

export class Dashboard extends PureComponent {
  render() {
    return (
      <Container center>
        <RKText category="h6">Dashboard</RKText>
      </Container>
    );
  }
}

Dashboard.propTypes = {
  resaga: PropTypes.object.isRequired,
};

Dashboard.defaultProps = {};

export default resaga(CONFIG)(Dashboard);
