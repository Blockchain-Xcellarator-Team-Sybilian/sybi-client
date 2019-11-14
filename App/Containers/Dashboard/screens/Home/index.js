import resaga from 'resaga';
import React, { PureComponent } from 'react';
import Container from 'App/Components/Container';
import { RKText, ScrollView, ViewInputContainer } from 'App/Components/UI';
import Title from 'App/Components/Title';
import PropTypes from 'prop-types';
import { CONFIG } from './config';
import styles from './styles';

export class HomeScreen extends PureComponent {
  render() {
    return (
      <Container>
        <ViewInputContainer>
          <ScrollView style={{ marginTop: 6 }}>
            <Title title="Home" />
          </ScrollView>
        </ViewInputContainer>
      </Container>
    );
  }
}

HomeScreen.propTypes = {
  resaga: PropTypes.object.isRequired,
};

HomeScreen.defaultProps = {};

export default resaga(CONFIG)(HomeScreen);
