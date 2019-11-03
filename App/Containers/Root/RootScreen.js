import React, { Component } from 'react';
import API from 'App/Apis/Wrapper';
import NavigationService from 'App/Services/NavigationService';
import AppNavigator from 'App/Navigators/AppNavigator';
import { View } from 'react-native';
import { compose } from 'redux';
import { sagas } from 'resaga';
import injectSaga from 'App/Utils/injectSaga';
import styles from './RootScreenStyle';

class RootScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppNavigator
          // Initialize the NavigationService
          // (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
        <API />
      </View>
    );
  }
}

RootScreen.propTypes = {};

// Only one resaga saga needs to be injected (injecting more creates duplicate watchers)
const withSaga = injectSaga({ key: 'RootScreen', saga: sagas[0] });
export default compose(withSaga)(RootScreen);
