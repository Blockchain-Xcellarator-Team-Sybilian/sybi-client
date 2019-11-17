import Title from 'App/Components/Title';
import { AnimatedView } from 'App/Components/Animated';
import { LOGIC_HELPERS } from 'App/Utils/helpers/logic';
import React, { PureComponent } from 'react';
import resaga from 'resaga';
import {
  Input,
  Label,
  Select,
  Toggle,
  ScrollView,
  ViewPadding,
  ViewInputContainer,
} from 'App/Components/UI';
import PropTypes from 'prop-types';
import { CONFIG } from './config';
import styles from './styles';

export class PersonalInfo extends PureComponent {
  data = [
    { text: 'Employed' },
    { text: 'Self-Employed/Business' },
    { text: 'Dependent' },
    { text: 'Others' },
  ];

  state = {
    error: '',
    email: '',
    phone: '',
    sameAddress: false,
    presentAddress: '',
    permanentAddress: '',
    sourceOfFunds: null,
  };

  componentDidMount = () => {
    const {
      email,
      phone,
      navigation,
      sameAddress,
      sourceOfFunds,
      presentAddress,
      permanentAddress,
    } = this.props;

    navigation.setParams({
      nextTitle: 'Next',
      nextFunc: this.onNextStep,
      title: 'Registration',
      backFunc: this.onPrevStep,
    });

    this.setState(
      {
        email,
        phone,
        sameAddress,
        presentAddress,
        permanentAddress,
        sourceOfFunds,
      },
      this.inputValidator
    );
  };

  onSubmit = () => {
    const {
      email,
      phone,
      sameAddress,
      sourceOfFunds,
      presentAddress,
      permanentAddress,
    } = this.state;

    this.props.resaga.setValue({
      email,
      phone,
      sameAddress,
      sourceOfFunds,
      presentAddress,
      permanentAddress,
    });
  };

  onPrevStep = () => {
    const { page, prevStep } = this.props;
    prevStep(page - 1);
  };

  onNextStep = () => {
    const { page, nextStep } = this.props;
    nextStep(page + 1, this.onSubmit);
  };

  onSelect = (sourceOfFunds) => {
    this.setState({ sourceOfFunds }, this.inputValidator);
  };

  onChangeText = key => (value) => {
    const { sameAddress } = this.state;

    if (key === 'permanentAddress' && sameAddress) {
      this.setState({ sameAddress: false });
    }

    this.setState({ [key]: value }, this.inputValidator);
  };

  onToggle = (sameAddress) => {
    const { presentAddress } = this.state;

    this.setState({ sameAddress, permanentAddress: presentAddress }, this.inputValidator);
  };

  inputValidator = () => {
    const {
      error,
      email,
      phone,
      presentAddress,
      permanentAddress,
      sourceOfFunds,
    } = this.state;

    const { navigation } = this.props;

    const isEmail = LOGIC_HELPERS.isEmail(email);

    const showError = LOGIC_HELPERS.ifElse(
      [email !== '', !isEmail],
      true,
      false
    );

    const isValid = LOGIC_HELPERS.ifElse(
      [email, isEmail, phone, presentAddress, permanentAddress, sourceOfFunds],
      true,
      false
    );

    if (showError) {
      this.setState({ error: 'Invalid email' });
    } else if (error && email !== '') {
      this.setState({ error: '' });
    }

    navigation.setParams({ disableNext: !isValid });
  };

  render() {
    const {
      email,
      phone,
      error,
      sameAddress,
      presentAddress,
      permanentAddress,
      sourceOfFunds,
    } = this.state;

    const status = error ? 'danger' : '';

    return (
      <ViewInputContainer>
        <ScrollView style={{ marginTop: 6 }}>
          <AnimatedView animation="fadeInUp" duration={700}>
            <Title title="Other information" />
            <ViewPadding>
              <Label label="EMAIL*" />
              <Input
                value={email}
                status={status}
                caption={error}
                onChangeText={this.onChangeText('email')}
              />
            </ViewPadding>
            <ViewPadding>
              <Label label="PHONE*" />
              <Input
                value={phone}
                keyboardType="numeric"
                onChangeText={this.onChangeText('phone')}
              />
            </ViewPadding>
            <ViewPadding>
              <Label label="PRESENT ADDRESS*" />
              <Input value={presentAddress} onChangeText={this.onChangeText('presentAddress')} />
            </ViewPadding>
            <ViewPadding>
              <Label label="PERMANENT ADDRESS*" />
              <Input
                value={permanentAddress}
                onChangeText={this.onChangeText('permanentAddress')}
              />
            </ViewPadding>
            <ViewPadding style={{ alignSelf: 'flex-start' }}>
              <Toggle
                checked={sameAddress}
                onChange={this.onToggle}
                text="Same as present address"
              />
            </ViewPadding>
            <ViewPadding>
              <Label label="SOURCE OF FUNDS*" />
              <Select
                placeholder=""
                data={this.data}
                onSelect={this.onSelect}
                selectedOption={sourceOfFunds}
                textStyle={styles.selectedText}
                style={styles.select}
              />
            </ViewPadding>
          </AnimatedView>
        </ScrollView>
      </ViewInputContainer>
    );
  }
}

PersonalInfo.propTypes = {
  // hoc
  resaga: PropTypes.object.isRequired,

  // parent
  page: PropTypes.number.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,

  // resaga
  email: PropTypes.string,
  phone: PropTypes.string,
  sameAddress: PropTypes.bool,
  sourceOfFunds: PropTypes.object,
  presentAddress: PropTypes.string,
  permanentAddress: PropTypes.string,
};

PersonalInfo.defaultProps = {};

export default resaga(CONFIG)(PersonalInfo);
