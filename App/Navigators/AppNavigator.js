import { fromRight } from 'react-navigation-transitions';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainScreen from 'App/Containers/MainScreen';
import IntroScreen from 'App/Containers/IntroScreen';
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen';

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const StackNavigator = createStackNavigator(
  {
    SplashScreen,
    MainScreen,
    IntroScreen,
  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'SplashScreen',
    transitionConfig: () => fromRight(),
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none',
  }
);

export default createAppContainer(StackNavigator);
