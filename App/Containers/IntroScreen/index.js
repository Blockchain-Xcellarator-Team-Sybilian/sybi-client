import React from 'react';
import resaga from 'resaga';
import PropTypes from 'prop-types';
import { Text } from 'galio-framework';
import { Image, View } from 'react-native';
import { APP_SETUP_API, UPDATE_DONE_INTRO } from 'App/Apis';
import NavigationService from 'App/Services/NavigationService';
import AppIntroSlider from 'react-native-app-intro-slider';
import { CONFIG } from './config';
import SLIDES from './slides';
import styles from './styles';

export class IntroScreen extends React.Component {
  handleDone = () => {
    this.props.resaga.dispatchTo(APP_SETUP_API, UPDATE_DONE_INTRO, {});
    NavigationService.navigate('MainScreen');
  };

  renderItem = ({ item }) => {
    return (
      <View style={[styles.mainContent, { backgroundColor: item.backgroundColor }]}>
        <Text p bold style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  render() {
    return (
      <AppIntroSlider
        renderItem={this.renderItem}
        slides={SLIDES}
        onDone={this.handleDone}
      />
    );
  }
}

IntroScreen.propTypes = {
  resaga: PropTypes.object.isRequired,
};

export default resaga(CONFIG)(IntroScreen);
