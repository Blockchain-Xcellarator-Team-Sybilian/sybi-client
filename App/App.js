import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist-immutable';
import persistConfig from './Stores/persistConfig';
import ConfigureStore from './Stores/ConfigureStore';
import RootScreen from './Containers/Root/RootScreen';
import SplashScreen from './Containers/SplashScreen/SplashScreen';

// Create redux store with history
const initialState = {};
const store = ConfigureStore(initialState);

export default class App extends Component {
  state = {
    persisted: false,
  };

  renderApp = () => {
    const { persisted } = this.state;

    const app = (
      <Provider store={store}>
        <RootScreen />
      </Provider>
    );

    if (!persisted) {
      console.log('PERSISTING STORE. . .');
      persistStore(store, persistConfig, () => {
        setTimeout(() => this.setState({ persisted: true }), 2000);
      });
      return <SplashScreen />;
    }

    console.log('PERSISTED!');
    return app;
  };

  render() {
    return this.renderApp();
  }
}
