import { get } from 'lodash';
import React from 'react';
import { fromRight } from 'react-navigation-transitions';
import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';

// Header
import Header from 'App/Components/Header';

// Root
import Main from 'App/Containers/Main';
import Intro from 'App/Containers/Intro';
import Splash from 'App/Containers/Splash';

// Register
import Login from 'App/Containers/Login';
import Register from 'App/Containers/Register';
import Reminders from 'App/Containers/Register/screens/Reminders';
import Terms from 'App/Containers/Register/screens/Terms';

// Dashboard
import Dashboard from 'App/Containers/Dashboard';
import LoanForm from 'App/Containers/LoanForm';

const withHeader = (screen, title, back, nextScreen, nextTitle, props) => ({
  screen,
  navigationOptions: ({ navigation }) => {
    const params = get(navigation, 'state.params', {});
    console.log({ params });
    return {
      header: (
        <Header
          back={back}
          title={title}
          nextTitle={nextTitle}
          nextScreen={nextScreen}
          {...params}
          {...props}
        />),
    };
  },
});

const hideHeader = screen => ({
  screen,
  navigationOptions: {
    header: <React.Fragment />
  },
});

const RegisterNavigator = createStackNavigator(
  {
    ReminderScreen: withHeader(Reminders, 'Reminders', true, 'TermsScreen', 'Next'),
    TermsScreen: withHeader(Terms, 'Terms & Conditions', true, 'RegisterScreen', 'Accept', { noBorder: true, reset: true }),
    RegisterScreen: withHeader(Register),
  },
  {
    initialRouteName: 'ReminderScreen',
    transitionConfig: () => fromRight(),
  }
);

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const StackNavigator = createStackNavigator(
  {
    MainScreen: hideHeader(Main),
    IntroScreen: hideHeader(Intro),
    SplashScreen: hideHeader(Splash),
    LoginScreen: withHeader(Login, 'Login', true, 'ReminderScreen', 'Register an account'),
    RegisterNavigator: hideHeader(RegisterNavigator),
    DashboardScreen: withHeader(Dashboard),
    LoanFormScreen: withHeader(LoanForm, 'Apply Loan', true),
  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'SplashScreen',
    transitionConfig: () => fromRight(),
  }
);

export default createAppContainer(StackNavigator);
