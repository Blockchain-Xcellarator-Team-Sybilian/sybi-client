/* eslint-disable react/no-unused-state */
import React, { PureComponent } from 'react';
import { BottomNavigation } from 'react-native-paper';
import { LOGIC_HELPERS } from 'App/Utils/helpers/logic';
import { Icon, RKText } from 'App/Components/UI';
import COLORS from 'App/Theme/Colors';
import HomeScreen from './screens/Home';
import MoreScreen from './screens/More';
import StatusScreen from './screens/Status';
import styles from './styles';

export class DashboardScreen extends PureComponent {
  state = {
    index: 1,
    routes: [
      { key: 'status', title: 'status', icon: 'activity-outline' },
      { key: 'home', title: 'home', icon: 'star-outline' },
      { key: 'more', title: 'more', icon: 'more-horizontal-outline' },
    ],
  };

  handleIndexChange = index => this.setState({ index });

  renderScene = () => BottomNavigation.SceneMap({
    home: HomeScreen,
    more: MoreScreen,
    status: StatusScreen,
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

export default DashboardScreen;
