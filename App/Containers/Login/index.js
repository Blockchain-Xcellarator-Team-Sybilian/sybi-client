import resaga from 'resaga';
import { SafeAreaView, ScrollView } from 'react-native';
import React, { PureComponent } from 'react';
import {
  Icon,
  Input,
  Label,
  Button,
  RKText,
  ViewPadding,
  ViewInputContainer,
} from 'App/Components/UI';
import Title from 'App/Components/Title';
import { AnimatedView } from 'App/Components/Animated';
import PropTypes from 'prop-types';
import { CONFIG } from './config';
import Container from '../../Components/Container';
import COLORS from '../../Theme/Colors';
import { LOGIC_HELPERS } from '../../Utils/helpers/logic';
import NavigationService from '../../Services/NavigationService';

export class Login extends PureComponent {
  state = {
    username: '',
    password: '',
    disabled: true,
    securedPass: true,
  };

  onChangeText = key => (value) => {
    this.setState({ [key]: value }, this.inputValidator);
  };

  onIconPress = () => {
    const { securedPass } = this.state;
    this.setState({ securedPass: !securedPass });
  };

  onLogin = () => {
    NavigationService.navigateAndReset('DashboardScreen');
  };

  inputValidator = () => {
    const { username, password } = this.state;

    const isValid = LOGIC_HELPERS.ifElse(
      [username, password, password.length >= 8],
      true,
      false,
    );

    this.setState({ disabled: !isValid });
  };

  renderIcon = (style) => {
    const { securedPass } = this.state;
    const iconName = securedPass ? 'eye-off' : 'eye';

    return <Icon {...style} name={iconName} />;
  };

  render() {
    const {
      username, password, disabled, securedPass,
    } = this.state;

    return (
      <Container>
        <ViewInputContainer>
          <ScrollView>
            <AnimatedView animation="fadeIn" duration={700}>
              <SafeAreaView style={{ flex: 1 }}>
                <Title title="Login Credentials" />
                <ViewPadding>
                  <Label label="USERNAME*" />
                  <Input value={username} onChangeText={this.onChangeText('username')} />
                </ViewPadding>
                <ViewPadding>
                  <Label label="PASSWORD*" />
                  <Input
                    value={password}
                    secureTextEntry={securedPass}
                    icon={this.renderIcon}
                    onIconPress={this.onIconPress}
                    onChangeText={this.onChangeText('password')}
                  />
                </ViewPadding>
                <ViewPadding style={{ marginTop: 16 }}>
                  <Button
                    disabled={disabled}
                    onPress={this.onLogin}
                    backgroundColor={COLORS.primary}
                  >
                    <RKText category="s1" style={{ fontWeight: 'bold', color: COLORS.white }}>
                      LOGIN
                    </RKText>
                  </Button>
                </ViewPadding>
              </SafeAreaView>
            </AnimatedView>
          </ScrollView>
        </ViewInputContainer>
      </Container>
    );
  }
}

Login.propType = {
  resaga: PropTypes.object.isRequired,
};

Login.defaultProps = {};

export default resaga(CONFIG)(Login);
