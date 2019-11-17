import API from 'App/Apis/Wrapper';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { BackHandler } from 'react-native';
import NavigationService from 'App/Services/NavigationService';
import { View, RKText, RKButton } from 'App/Components/UI';
import {
  ApplicationProvider, IconRegistry, Layout, Modal
} from 'react-native-ui-kitten';
import AppNavigator from 'App/Navigators/AppNavigator';
import { mapping, theme } from 'App/Theme/EvaTheme';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import injectSaga from 'App/Utils/injectSaga';
import resaga, { sagas } from 'resaga';
import { compose } from 'redux';
import styles from './styles';
import { CONFIG } from './config';
import COLORS from '../../Theme/Colors';

class Root extends Component {
  state = {
    modalVisible: false,
  };
  // componentDidMount = () => {
  //   NavigationService.navigate('LoanFormScreen');
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
    this.setModalVisible();
    return true;
  };

  onExit = () => {
    BackHandler.exitApp();
  };

  setModalVisible = () => {
    const { modalVisible } = this.state;
    this.setState({ modalVisible: !modalVisible });
  };

  renderModalElement = () => {
    return (
      <View
        style={{
          width: 280,
          height: 120,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS.white,
          borderRadius: 10,
        }}
      >
        <RKText category="s2" style={{ fontWeight: 'bold', marginBottom: 8 }}>
          Are you sure you want to exit Educado?
        </RKText>
        <View
          style={{
            paddingHorizontal: 24,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <RKButton size="small" onPress={this.onExit}>
            Exit
          </RKButton>
          <RKButton
            size="small"
            appearance="outline"
            onPress={this.setModalVisible}
            style={{
              flex: 1,
              marginLeft: 8,
              backgroundColor: COLORS.white,
            }}
          >
            Cancel
          </RKButton>
        </View>
      </View>
    );
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
          <Modal
            allowBackdrop={true}
            backdropStyle={{ backgroundColor: 'black', opacity: 0.5 }}
            onBackdropPress={this.setModalVisible}
            visible={this.state.modalVisible}
          >
            {this.renderModalElement()}
          </Modal>
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
export default compose(withSaga, resaga(CONFIG))(Root);
