import React from 'react';
import {
  Alert, Image, StyleSheet, View
} from 'react-native';
import { Text } from 'galio-framework';
import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  },
});

const slides = [
  {
    key: '1',
    title: 'Education is expensive',
    text: 'We all know that education is too expensive.\nBut we believe that education is for everyone!',
    image: require('../../Assets/Images/1.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: '2',
    title: 'Securing your future',
    text: 'That\'s why we in Educado developed a solution using a secured and well-known technology.',
    image: require('../../Assets/Images/2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: '3',
    title: 'Reach your dreams',
    text: 'Using blockchain technology and Educado we will bridge the gap towards your success.',
    image: require('../../Assets/Images/3.png'),
    backgroundColor: '#67bdd2',
  }
];

export default class App extends React.Component {
  _renderItem = ({ item }) => {
    return (
      <View style={[styles.mainContent, { backgroundColor: item.backgroundColor }]}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  render() {
    return <AppIntroSlider renderItem={this._renderItem} slides={slides} onDone={() => Alert.alert('Done!')} />;
  }
}
