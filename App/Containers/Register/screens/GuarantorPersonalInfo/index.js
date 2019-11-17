import Title from 'App/Components/Title';
import { AnimatedView } from 'App/Components/Animated';
import { LOGIC_HELPERS } from 'App/Utils/helpers/logic';
import React, { PureComponent } from 'react';
import resaga from 'resaga';
import {
  Icon,
  Input,
  Label,
  Select,
  Toggle,
  Datepicker,
  ScrollView,
  ViewPadding,
  ViewInputContainer,
} from 'App/Components/UI';
import PropTypes from 'prop-types';
import { CONFIG } from './config';
import styles from './styles';

const CalendarIcon = style => <Icon {...style} name="calendar" />;

export class GuarantorPersonalInfo extends PureComponent {
  data = [
    { text: 'Employed' },
    { text: 'Self-Employed/Business' },
    { text: 'Dependent' },
    { text: 'Others' },
  ];

  state = {
    dateOfBirth: '',
    placeOfBirth: '',
    presentAddress: '',
    permanentAddress: '',
    sourceOfIncome: null,
    sameAddress: false,
  };

  componentDidMount = () => {
    const {
      navigation,
      guarantorSame,
      guarantorDate,
      guarantorPlace,
      guarantorSource,
      guarantorPresent,
      guarantorPermanent,
    } = this.props;

    navigation.setParams({
      nextTitle: 'Next',
      nextFunc: this.onNextStep,
      title: 'Add Guarantor',
      disableNext: true,
      backFunc: this.onPrevStep,
    });

    this.setState({
      sameAddress: guarantorSame,
      dateOfBirth: guarantorDate,
      placeOfBirth: guarantorPlace,
      sourceOfIncome: guarantorSource,
      presentAddress: guarantorPresent,
      permanentAddress: guarantorPermanent,
    }, this.inputValidator);
  };

  setDatePickerRef = (ref) => {
    this.datePickerRef = ref;
  };

  onSubmit = () => {
    const {
      sameAddress,
      dateOfBirth,
      placeOfBirth,
      presentAddress,
      permanentAddress,
      sourceOfIncome,
    } = this.state;

    this.props.resaga.setValue({
      guarantorSame: sameAddress,
      guarantorDate: dateOfBirth,
      guarantorPlace: placeOfBirth,
      guarantorSource: sourceOfIncome,
      guarantorPresent: presentAddress,
      guarantorPermanent: permanentAddress,
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

  onSelect = (sourceOfIncome) => {
    this.setState({ sourceOfIncome }, this.inputValidator);
  };

  onDatePick = (dateOfBirth) => {
    this.datePickerRef.toggleVisible();
    this.setState({ dateOfBirth }, this.inputValidator);
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
      dateOfBirth,
      placeOfBirth,
      presentAddress,
      permanentAddress,
      sourceOfIncome,
    } = this.state;
    const { navigation } = this.props;

    const isValid = LOGIC_HELPERS.ifElse(
      [dateOfBirth, placeOfBirth, presentAddress, permanentAddress, sourceOfIncome],
      true,
      false
    );

    navigation.setParams({ disableNext: !isValid });
  };

  render() {
    const {
      sameAddress,
      dateOfBirth,
      placeOfBirth,
      presentAddress,
      permanentAddress,
      sourceOfIncome,
    } = this.state;

    const maxDate = new Date();
    const minDate = new Date(0);

    return (
      <ViewInputContainer>
        <ScrollView style={{ marginTop: 6 }}>
          <AnimatedView animation="fadeInUp" duration={700}>
            <Title title="Guarantor Details" />
            <ViewPadding>
              <Label label="DATE OF BIRTH*" />
              <Datepicker
                min={minDate}
                max={maxDate}
                date={dateOfBirth}
                icon={CalendarIcon}
                onSelect={this.onDatePick}
                ref={this.setDatePickerRef}
              />
            </ViewPadding>
            <ViewPadding>
              <Label label="PLACE OF BIRTH*" />
              <Input value={placeOfBirth} onChangeText={this.onChangeText('placeOfBirth')} />
            </ViewPadding>
            <ViewPadding>
              <Label label="PRESENT ADDRESS*" />
              <Input
                value={presentAddress}
                onChangeText={this.onChangeText('presentAddress')}
              />
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
              <Label label="SOURCE OF INCOME*" />
              <Select
                placeholder=""
                data={this.data}
                onSelect={this.onSelect}
                selectedOption={sourceOfIncome}
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

GuarantorPersonalInfo.propTypes = {
  // hoc
  resaga: PropTypes.object.isRequired,

  // parent
  page: PropTypes.number.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,

  // resaga
  guarantorSame: PropTypes.bool,
  guarantorPlace: PropTypes.string,
  guarantorSource: PropTypes.object,
  guarantorPresent: PropTypes.string,
  guarantorPermanent: PropTypes.string,
  guarantorDate: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

GuarantorPersonalInfo.defaultProps = {};

export default resaga(CONFIG)(GuarantorPersonalInfo);
