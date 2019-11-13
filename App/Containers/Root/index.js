import API from 'App/Apis/Wrapper';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { BackHandler } from 'react-native';
import NavigationService from 'App/Services/NavigationService';
import { ApplicationProvider, IconRegistry, Layout } from 'react-native-ui-kitten';
import AppNavigator from 'App/Navigators/AppNavigator';
import { mapping, theme } from 'App/Theme/EvaTheme';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import injectSaga from 'App/Utils/injectSaga';
import resaga, { sagas } from 'resaga';
import { compose } from 'redux';
import styles from './styles';
import { CONFIG } from './config';

class Root extends Component {
  // componentDidMount = () => {
  //   NavigationService.navigate('LoginScreen');
  //   BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  // };

  componentDidMount = () => {
    const { doneIntro } = this.props;
    const route = doneIntro ? 'MainScreen' : 'IntroScreen';

    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    setTimeout(() => NavigationService.navigateAndReset(route), 1500);
  };

  componentWillUnmount = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  };

  handleBackButton = () => {
    return true;
  };

  render() {
    return (
      <Fragment>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider mapping={mapping} theme={theme}>
          <Layout style={styles.container}>
            <AppNavigator
              // Initialize the NavigationService
              // (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
              ref={(navigatorRef) => {
                NavigationService.setTopLevelNavigator(navigatorRef);
              }}
            />
            <API />
          </Layout>
        </ApplicationProvider>
      </Fragment>
    );
  }
}

Root.propTypes = {
  doneIntro: PropTypes.bool,
};

Root.defaultProps = {
  doneIntro: false,
};

// Only one resaga saga needs to be injected (injecting more creates duplicate watchers)
const withSaga = injectSaga({ key: 'Root', saga: sagas[0] });
export default compose(
  withSaga,
  resaga(CONFIG)
)(Root);
