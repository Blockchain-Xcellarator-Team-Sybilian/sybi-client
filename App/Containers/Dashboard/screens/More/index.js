import resaga from 'resaga';
import React, { Component } from 'react';
import { AnimatedImage } from 'App/Components/Animated';
import ScrollContainer from 'App/Components/ScrollContainer';
import ActionButton from 'App/Components/ActionButton';
import { RKText, View } from 'App/Components/UI';
import Title from 'App/Components/Title';
import { Images } from 'App/Theme';
import PropTypes from 'prop-types';
import { CONFIG } from './config';
import styles from './styles';

export class HomeScreen extends Component {
  state = {
    animation: 'fadeInRight',
  };

  componentWillUnmount = () => {
    this.setState({ animation: '' });
  };

  render() {
    const { animation } = this.state;

    return (
      <ScrollContainer>
        <Title title="Other Options" />
        <View style={{ alignItems: 'center' }}>
          <AnimatedImage
            duration={500}
            animation={animation}
            source={Images.othersBG}
            style={{ width: 300, height: 300 }}
          />
        </View>
        <Title title="Contact us thru" />
        <ActionButton>
          Educabot
        </ActionButton>
        <ActionButton>
          Email
        </ActionButton>
        <ActionButton>
          FAQs
        </ActionButton>
        <ActionButton>
          T&C
        </ActionButton>
      </ScrollContainer>
    );
  }
}

HomeScreen.propTypes = {
  resaga: PropTypes.object.isRequired,
};

HomeScreen.defaultProps = {};

export default resaga(CONFIG)(HomeScreen);
