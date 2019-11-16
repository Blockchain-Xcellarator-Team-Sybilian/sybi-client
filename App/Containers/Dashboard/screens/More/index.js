import resaga from 'resaga';
import React, { PureComponent } from 'react';
import ScrollContainer from 'App/Components/ScrollContainer';
import { RKText } from 'App/Components/UI';
import Title from 'App/Components/Title';
import PropTypes from 'prop-types';
import { CONFIG } from './config';
import styles from './styles';

export class MoreScreen extends PureComponent {
  render() {
    return (
      <ScrollContainer>
        <Title title="More" />
      </ScrollContainer>
    );
  }
}

MoreScreen.propTypes = {
  resaga: PropTypes.object.isRequired,
};

MoreScreen.defaultProps = {};

export default resaga(CONFIG)(MoreScreen);
