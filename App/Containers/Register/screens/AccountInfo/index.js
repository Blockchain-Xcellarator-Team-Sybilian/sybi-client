import { AnimatedView } from 'App/Components/Animated';
import { LOGIC_HELPERS } from 'App/Utils/helpers/logic';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import resaga from 'resaga';
import {
  Icon, Input, Label, ViewPadding, ViewInputContainer
} from 'App/Components/UI';
import Title from 'App/Components/Title';
import { ScrollView } from 'react-native';
import { CONFIG } from './config';
import styles from './styles';

export class AccountInfo extends PureComponent {
  state = {
    error: '',
    username: '',
    password: '',
    retypePassword: '',
    securedPass: true,
    securedRetype: true,
  };

  static screenProps = () => ({
    data: 'some data here',
  });

  componentDidMount = () => {
    const { navigation, username, password } = this.props;

    navigation.setParams({
      nextTitle: 'Next',
      nextFunc: this.onNextStep,
      title: "Let's get started!",
      backFunc: null,
      back: true,
    });

    this.setState(
      {
        username,
        password,
        retypePassword: password,
      },
      this.inputValidator
    );
  };

  onSubmit = () => {
    const { username, password } = this.state;
    this.props.resaga.setValue({ username, password });
  };

  onNextStep = () => {
    const { page, nextStep } = this.props;
    nextStep(page + 1, this.onSubmit);
  };

  onChangeText = key => (value) => {
    this.setState({ [key]: value }, this.inputValidator);
  };

  onIconPress = key => () => {
    const secured = this.state[key];
    this.setState({ [key]: !secured });
  };

  renderIcon = key => (style) => {
    const iconName = this.state[key] ? 'eye-off' : 'eye';

    return (
      <Icon {...style} name={iconName} />
    );
  };

  inputValidator = () => {
    const { navigation } = this.props;
    const {
      error, username, password, retypePassword
    } = this.state;
    const samePassword = LOGIC_HELPERS.ifElse(password === retypePassword, true, false);
    const showError = LOGIC_HELPERS.ifElse(
      [retypePassword !== '', !samePassword],
      true,
      false
    );
    const isValid = LOGIC_HELPERS.ifElse(
      [username, password, retypePassword, samePassword],
      true,
      false
    );

    if (showError) {
      this.setState({ error: 'Password is not the same' });
    } else if (error && retypePassword !== '') {
      this.setState({ error: '' });
    }

    navigation.setParams({ disableNext: !isValid });
  };

  render() {
    const {
      error,
      username,
      password,
      securedPass,
      securedRetype,
      retypePassword,
    } = this.state;

    const status = error ? 'danger' : '';

    return (
      <ViewInputContainer>
        <ScrollView style={{ marginTop: 6 }}>
          <AnimatedView animation="fadeInUp" duration={700}>
            <Title title="Account Details" />
            <ViewPadding>
              <Label label="USERNAME*" />
              <Input value={username} onChangeText={this.onChangeText('username')} />
            </ViewPadding>
            <ViewPadding>
              <Label label="PASSWORD*" />
              <Input
                status={status}
                value={password}
                secureTextEntry={securedPass}
                icon={this.renderIcon('securedPass')}
                onIconPress={this.onIconPress('securedPass')}
                onChangeText={this.onChangeText('password')}
              />
            </ViewPadding>
            <ViewPadding>
              <Label label="RE-TYPE PASSWORD*" />
              <Input
                status={status}
                caption={error}
                value={retypePassword}
                secureTextEntry={securedRetype}
                icon={this.renderIcon('securedRetype')}
                onIconPress={this.onIconPress('securedRetype')}
                onChangeText={this.onChangeText('retypePassword')}
              />
            </ViewPadding>
          </AnimatedView>
        </ScrollView>
      </ViewInputContainer>
    );
  }
}

AccountInfo.propTypes = {
  // hoc
  resaga: PropTypes.object.isRequired,

  // parent
  page: PropTypes.number.isRequired,
  nextStep: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,

  // resaga
  username: PropTypes.string,
  password: PropTypes.string,
};

AccountInfo.defaultProps = {};

export default resaga(CONFIG)(AccountInfo);
