import React, { Component } from 'react';
import PropTypes from 'prop-types';
import API from 'App/Apis/Wrapper';
import { LightTheme, DarkTheme } from 'App/Theme/GalioTheme';
import NavigationService from 'App/Services/NavigationService';
import AppNavigator from 'App/Navigators/AppNavigator';
import { GalioProvider } from 'galio-framework';
import { View } from 'react-native';
import { compose } from 'redux';
import resaga, { sagas } from 'resaga';
import injectSaga from 'App/Utils/injectSaga';
import styles from './RootScreenStyle';
import { CONFIG } from './config';

class RootScreen extends Component {
  state = {
    theme: LightTheme,
  };

  componentDidMount = () => {
    setTimeout(() => NavigationService.navigate('MainScreen'), 1500);
    console.log('PERSISTED!');
  };

  componentWillReceiveProps(nextProps) {
    const { theme } = this.props;

    if (theme !== nextProps.theme) {
      if (nextProps.theme === 'dark') {
        this.setState({ theme: DarkTheme });
      } else {
        this.setState({ theme: LightTheme });
      }
    }
  }

  render() {
    const { theme } = this.state;

    return (
      <GalioProvider theme={theme}>
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
      </GalioProvider>
    );
  }
}

RootScreen.propTypes = {
  theme: PropTypes.string,
};

RootScreen.defaultProps = {
  theme: 'light',
};

// Only one resaga saga needs to be injected (injecting more creates duplicate watchers)
const withSaga = injectSaga({ key: 'RootScreen', saga: sagas[0] });
export default compose(withSaga, resaga(CONFIG))(RootScreen);
