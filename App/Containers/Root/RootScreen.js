import React, { Component } from 'react';
import API from 'App/Apis/Wrapper';
import NavigationService from 'App/Services/NavigationService';
import AppNavigator from 'App/Navigators/AppNavigator';
import { View } from 'react-native';
import styles from './RootScreenStyle';
import { connect } from 'react-redux';
import StartupActions from 'App/Stores/Startup/Actions';
import { PropTypes } from 'prop-types';

class RootScreen extends Component {
  componentDidMount() {
    // Run the startup saga when the application is starting
    this.props.startup();
  }

  render() {
    return (
      <View style={styles.container}>
        <AppNavigator
          // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
        <API />
      </View>
    );
  }
}

RootScreen.propTypes = {
  startup: PropTypes.func,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootScreen);
