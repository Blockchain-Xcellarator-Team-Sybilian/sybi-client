import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Button } from 'App/Components/UI';
import NavigationService from 'App/Services/NavigationService';
import BackIcon from 'App/Assets/Images/arrow-backward.png';
import { LOGIC_HELPERS } from 'App/Utils/helpers/logic';
import COLORS from 'App/Theme/Colors';
import f from 'App/Theme/Fonts';
import styles from './styles';

export class Header extends PureComponent {
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
        <Text style={[f.buttonWhite, f.bold, f.uppercase]}>
          {nextTitle}
        </Text>
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

  render() {
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
  }
}

Header.propTypes = {
  back: PropTypes.bool,
  title: PropTypes.string,
  nextScreen: PropTypes.string,
  nextTitle: PropTypes.string,
  nextFunc: PropTypes.func,
  backFunc: PropTypes.func,
  noBorder: PropTypes.bool,
  reset: PropTypes.bool,
  disableNext: PropTypes.bool,
};

Header.defaultProps = {
  title: '',
  back: false,
  nextTitle: '',
  nextScreen: '',
  noBorder: false,
  reset: false,
  disableNext: false,
};

export default Header;
