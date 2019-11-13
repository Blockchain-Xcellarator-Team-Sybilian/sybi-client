import React from 'react';
import resaga from 'resaga';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { View, Text } from 'App/Components/UI';
import { APP_SETUP_API, UPDATE_DONE_INTRO } from 'App/Apis';
import NavigationService from 'App/Services/NavigationService';
import AppIntroSlider from 'react-native-app-intro-slider';
import f from 'App/Theme/Fonts';
import { CONFIG } from './config';
import SLIDES from './slides';
import styles from './styles';

export class Intro extends React.Component {
  handleDone = () => {
    this.props.resaga.dispatchTo(APP_SETUP_API, UPDATE_DONE_INTRO, {});
    NavigationService.navigate('MainScreen');
  };

  renderItem = ({ item }) => {
    return (
      <View style={[styles.mainContent, { backgroundColor: item.backgroundColor }]}>
        <Text style={[f.titleWhite, f.semibold]} uppercase>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={[f.subheadingWhite, styles.text]}>{item.text}</Text>
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

Intro.propTypes = {
  resaga: PropTypes.object.isRequired,
};

export default resaga(CONFIG)(Intro);
