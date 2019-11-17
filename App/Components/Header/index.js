import resaga from 'resaga';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  View, RKText, Text, Button, Icon, RKButton
} from 'App/Components/UI';
import UserAvatar from 'react-native-user-avatar';
import NavigationService from 'App/Services/NavigationService';
import BackIcon from 'App/Assets/Images/arrow-backward.png';
import { LOGIC_HELPERS } from 'App/Utils/helpers/logic';
import COLORS from 'App/Theme/Colors';
import f from 'App/Theme/Fonts';
import { CONFIG } from './config';
import styles from './styles';

export class Header extends Component {
  handleGoTo = () => {
    const { nextScreen, reset, nextFunc } = this.props;

    if (nextFunc) {
      nextFunc();
    } else if (reset) {
      NavigationService.navigateAndReset(nextScreen);
    } else {
      NavigationService.navigate(nextScreen);
    }
  };

  onLogout = () => {
    NavigationService.navigateAndReset('MainScreen');
  };

  renderGoToButton = () => {
    const {
      nextScreen, nextTitle, nextFunc, disableNext
    } = this.props;

    const hideButton = LOGIC_HELPERS.ifElse([!nextScreen, !nextFunc], true, false);
    if (hideButton) {
      return null;
    }

    return (
      <Button
        style={{ height: 32 }}
        disabled={disableNext}
        onPress={this.handleGoTo}
        backgroundColor={COLORS.primary}
      >
        <Text style={[f.buttonWhite, f.bold, f.uppercase]}>{nextTitle}</Text>
      </Button>
    );
  };

  renderBackButton = () => {
    const { back, backFunc } = this.props;

    if (!back && !backFunc) {
      return null;
    }

    return (
      <View>
        <Button
          iconSource={BackIcon}
          iconStyle={styles.backIcon}
          backgroundColor="transparent"
          onPress={backFunc || NavigationService.navigateBack}
        />
      </View>
    );
  };

  renderAvatar = () => {
    const { email } = this.props;

    return (
      <View>
        <UserAvatar size="40" color={COLORS.primary} name={email.toUpperCase()} />
      </View>
    );
  };

  renderTitle = () => {
    const { title, name } = this.props;

    return (
      <View style={{ flex: 1, marginHorizontal: 16 }}>
        <RKText category="label" style={{ color: COLORS.disabled }}>
          {name}
        </RKText>
        <RKText category="h6" style={{ color: COLORS.text, lineHeight: 22 }}>
          {title}
        </RKText>
      </View>
    );
  };

  renderLogoutIcon = style => <Icon {...style} width={16} height={16} name="log-out-outline" />;

  renderLogout = () => {
    return (
      <RKButton
        size="tiny"
        appearance="outline"
        icon={this.renderLogoutIcon}
        style={{
          width: 24,
          height: 24,
          marginRight: 8,
          borderRadius: 12,
        }}
        onPress={this.onLogout}
      />
    );
  };

  renderDefault = () => {
    const { title, noBorder } = this.props;
    const rootStyle = LOGIC_HELPERS.ifElse(noBorder, styles.root, [styles.root, styles.borderRoot]);

    return (
      <View style={rootStyle}>
        {this.renderBackButton()}
        <View style={styles.titleRoot}>
          <Text style={[styles.title, f.bold, f.headerColor]}>{title}</Text>
        </View>
        <View>{this.renderGoToButton()}</View>
      </View>
    );
  };

  renderDashboard = () => {
    const { title, noBorder } = this.props;
    const rootStyle = LOGIC_HELPERS.ifElse(noBorder, styles.root, [styles.root, styles.borderRoot]);

    return (
      <View style={rootStyle}>
        {this.renderAvatar()}
        {this.renderTitle()}
        {this.renderLogout()}
      </View>
    );
  };

  renderHidden = () => null;

  render() {
    const { variant } = this.props;

    return LOGIC_HELPERS.switchCase(variant, {
      hidden: this.renderHidden,
      dashboard: this.renderDashboard,
      default: this.renderDefault,
    });
  }
}

Header.propTypes = {
  back: PropTypes.bool,
  title: PropTypes.string,
  variant: PropTypes.string,
  nextScreen: PropTypes.string,
  nextTitle: PropTypes.string,
  nextFunc: PropTypes.func,
  backFunc: PropTypes.func,
  noBorder: PropTypes.bool,
  reset: PropTypes.bool,
  disableNext: PropTypes.bool,

  // dashboard
  name: PropTypes.string,
  email: PropTypes.string,
};

Header.defaultProps = {
  title: '',
  back: false,
  nextTitle: '',
  nextScreen: '',
  noBorder: false,
  reset: false,
  disableNext: false,
  variant: 'default',
  name: '',
  email: 'test',
};

export default resaga(CONFIG)(Header);
