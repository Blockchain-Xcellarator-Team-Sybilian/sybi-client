import { AnimatedView } from 'App/Components/Animated';
import React, { PureComponent } from 'react';
import resaga from 'resaga';
import {
  Input,
  Label,
  Toggle,
  RKText,
  ViewPadding,
  ViewInputContainer,
} from 'App/Components/UI';
import Title from 'App/Components/Title';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { CONFIG } from './config';
import styles from './styles';
import { LOGIC_HELPERS } from '../../../../Utils/helpers/logic';

export class AddGuarantor extends PureComponent {
  state = {
    name: '',
    error: '',
    email: '',
    phone: '',
    addGuarantor: false,
  };

  componentDidMount = () => {
    const {
      navigation,
      hasGuarantor,
      guarantorName,
      guarantorEmail,
      guarantorPhone,
    } = this.props;

    navigation.setParams({
      nextTitle: 'Skip',
      nextFunc: this.onNextStep,
      title: 'Add a Guarantor?',
      disableNext: false,
      backFunc: this.onPrevStep,
    });

    this.setState({
      name: guarantorName,
      email: guarantorEmail,
      phone: guarantorPhone,
      addGuarantor: hasGuarantor,
    }, this.inputValidator);
  };

  onSubmit = () => {
    const {
      name, email, phone, addGuarantor
    } = this.state;

    this.props.resaga.setValue({
      guarantorName: name,
      guarantorEmail: email,
      guarantorPhone: phone,
      hasGuarantor: addGuarantor,
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

  onChangeText = key => (value) => {
    this.setState({ [key]: value }, this.inputValidator);
  };

  inputValidator = (guarantor) => {
    const { navigation } = this.props;
    const {
      name,
      error,
      phone,
      email,
      addGuarantor,
    } = this.state;
    const hasGuarantor = guarantor || addGuarantor;

    const isEmail = LOGIC_HELPERS.isEmail(email);

    const showError = LOGIC_HELPERS.ifElse(
      [email !== '', !isEmail],
      true,
      false
    );

    const isValid = LOGIC_HELPERS.ifElse([name, phone, !showError], true, false);
    const nextTitle = LOGIC_HELPERS.ifElse(hasGuarantor, 'Next', 'Skip');

    if (showError) {
      this.setState({ error: 'Invalid email' });
    } else if (error && email !== '') {
      this.setState({ error: '' });
    }

    navigation.setParams({ disableNext: !isValid, nextTitle });
  };

  onToggle = (addGuarantor) => {
    const { navigation, changeStepCount } = this.props;

    if (addGuarantor) {
      this.inputValidator(addGuarantor);
    } else {
      navigation.setParams({ disableNext: false, nextTitle: 'Skip' });
    }

    this.setState({ addGuarantor }, () => changeStepCount(addGuarantor));
  };

  renderGuarantorInputs = () => {
    const {
      error, name, email, phone, addGuarantor
    } = this.state;

    if (!addGuarantor) {
      return null;
    }

    const status = error ? 'danger' : '';

    return (
      <ScrollView style={{ marginTop: 6 }}>
        <AnimatedView animation="fadeInUp" duration={500}>
          <Title title="Guarantor Information" />
          <ViewPadding>
            <Label label="NAME*" />
            <Input
              value={name}
              onChangeText={this.onChangeText('name')}
            />
          </ViewPadding>
          <ViewPadding>
            <Label label="EMAIL" />
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
        </AnimatedView>
      </ScrollView>
    );
  };

  render() {
    const { addGuarantor } = this.state;

    return (
      <ViewInputContainer>
        <AnimatedView animation="fadeIn" duration={700} style={styles.root}>
          <ViewPadding style={styles.backdrop}>
            <RKText category="c2" style={styles.guarantor}>
              Adding a guarantor will increase your chance
              of approval and getting loan faster
            </RKText>
          </ViewPadding>
          <ViewPadding style={styles.toggle}>
            <Toggle
              checked={addGuarantor}
              onChange={this.onToggle}
              text="Do you want to add a guarantor?"
            />
          </ViewPadding>
          {this.renderGuarantorInputs()}
        </AnimatedView>
      </ViewInputContainer>

    );
  }
}

AddGuarantor.propTypes = {
  // hoc
  resaga: PropTypes.object.isRequired,

  // parent
  changeStepCount: PropTypes.func,
  page: PropTypes.number.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,

  // resaga
  hasGuarantor: PropTypes.bool,
  guarantorName: PropTypes.string,
  guarantorEmail: PropTypes.string,
  guarantorPhone: PropTypes.string,
};

AddGuarantor.defaultProps = {};

export default resaga(CONFIG)(AddGuarantor);
