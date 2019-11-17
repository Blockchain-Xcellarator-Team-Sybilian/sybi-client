/* eslint-disable react/no-unused-state */
import resaga from 'resaga';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { BottomNavigation } from 'react-native-paper';
import { LOGIC_HELPERS } from 'App/Utils/helpers/logic';
import { Icon, RKText } from 'App/Components/UI';
import COLORS from 'App/Theme/Colors';
import HomeScreen from './screens/Home';
import MoreScreen from './screens/More';
import StatusScreen from './screens/Status';
import { CONFIG } from './config';
import styles from './styles';

export class DashboardScreen extends Component {
  state = {
    index: 1,
    routes: [
      { key: 'status', title: 'status', icon: 'activity-outline' },
      { key: 'home', title: 'home', icon: 'home-outline' },
      { key: 'others', title: 'others', icon: 'more-horizontal-outline' },
    ],
  };

  componentWillMount = () => {
    const { navigation } = this.props;

    navigation.setParams({
      variant: 'dashboard',
      title: 'Dashboard',
    });
  };

  componentWillUnmount = () => {
    const { navigation } = this.props;

    navigation.setParams({
      variant: '',
      title: '',
    });
  };

  renderScreen = Screen => (props) => {
    const { navigation } = this.props;

    return <Screen {...props} navigation={navigation} />;
  };

  handleIndexChange = (index) => {
    const { navigation } = this.props;
    const title = LOGIC_HELPERS.switchCase(index, {
      0: 'Loan Status',
      1: 'Home',
      2: 'Others'
    });

    navigation.setParams({ title });
    this.setState({ index });
  };

  renderScene = () => BottomNavigation.SceneMap({
    home: this.renderScreen(HomeScreen),
    others: this.renderScreen(MoreScreen),
    status: this.renderScreen(StatusScreen),
  });

  renderIcon = ({ route, focused }) => {
    const { icon } = route;
    const fill = LOGIC_HELPERS.ifElse(focused, COLORS.primary, COLORS.text);
    const name = LOGIC_HELPERS.ifElse(focused, icon.replace('-outline', ''), icon);
    const iconColor = LOGIC_HELPERS.ifElse(focused, COLORS.primary, COLORS.disabled);

    return (
      <Icon
        width={24}
        height={24}
        name={name}
        fill={fill}
        style={{ color: iconColor }}
      />
    );
  };

  renderLabel = ({ route }) => {
    const { title } = route;

    return (
      <RKText category="label" style={styles.label}>
        {title}
      </RKText>
    );
  };

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        renderIcon={this.renderIcon}
        renderLabel={this.renderLabel}
        renderScene={this.renderScene()}
        onIndexChange={this.handleIndexChange}
        activeColor={COLORS.primary}
        barStyle={styles.bar}
        shifting
      />
    );
  }
}

DashboardScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default resaga(CONFIG)(DashboardScreen);
