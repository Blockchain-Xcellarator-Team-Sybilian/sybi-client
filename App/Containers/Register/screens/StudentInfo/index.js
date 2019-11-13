import { AnimatedView } from 'App/Components/Animated';
import React, { PureComponent } from 'react';
import resaga from 'resaga';
import {
  Input,
  Icon,
  Label,
  Select,
  Datepicker,
  ViewPadding,
  ViewInputContainer,
} from 'App/Components/UI';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import { CONFIG } from './config';
import styles from './styles';
import Title from '../../../../Components/Title';
import { LOGIC_HELPERS } from '../../../../Utils/helpers/logic';

const CalendarIcon = style => <Icon {...style} name="calendar" />;

export class StudentInfo extends PureComponent {
  data = [
    { text: 'Option 1' },
    { text: 'Option 2' },
    { text: 'Option 3' },
  ];

  state = {
    name: '',
    dateOfBirth: '',
    placeOfBirth: '',
    studentNumber: '',
    school: null,
  };

  componentDidMount = () => {
    const {
      navigation, name, dateOfBirth, placeOfBirth, studentNumber, school
    } = this.props;

    navigation.setParams({
      nextTitle: 'Next',
      nextFunc: this.onNextStep,
      title: 'Welcome Student!',
      backFunc: this.onPrevStep,
    });

    this.setState(
      {
        name,
        dateOfBirth,
        placeOfBirth,
        studentNumber,
        school,
      },
      this.inputValidator
    );
  };

  setDatePickerRef = (ref) => {
    this.datePickerRef = ref;
  };

  onSubmit = () => {
    const {
      name, dateOfBirth, placeOfBirth, studentNumber, school
    } = this.state;

    this.props.resaga.setValue({
      name,
      dateOfBirth,
      placeOfBirth,
      studentNumber,
      school,
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

  onSelect = (school) => {
    this.setState({ school }, this.inputValidator);
  };

  onDatePick = (dateOfBirth) => {
    this.datePickerRef.toggleVisible();
    this.setState({ dateOfBirth }, this.inputValidator);
  };

  onChangeText = key => (value) => {
    this.setState({ [key]: value }, this.inputValidator);
  };

  inputValidator = () => {
    const { navigation } = this.props;
    const {
      name, dateOfBirth, placeOfBirth, studentNumber, school
    } = this.state;

    const isValid = LOGIC_HELPERS.ifElse(
      [name, dateOfBirth, placeOfBirth, studentNumber, school],
      true,
      false
    );

    navigation.setParams({ disableNext: !isValid });
  };

  render() {
    const {
      name, dateOfBirth, placeOfBirth, studentNumber, school
    } = this.state;

    const maxDate = new Date();
    const minDate = new Date(0);

    return (
      <ViewInputContainer>
        <ScrollView style={{ marginTop: 6 }}>
          <AnimatedView animation="fadeInUp" duration={700}>
            <Title title="Student Details" />
            <ViewPadding>
              <Label label="NAME*" />
              <Input value={name} onChangeText={this.onChangeText('name')} />
            </ViewPadding>
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
              <Label label="STUDENT NO.*" />
              <Input value={studentNumber} onChangeText={this.onChangeText('studentNumber')} />
            </ViewPadding>
            <ViewPadding>
              <Label label="SCHOOL*" />
              <Select
                placeholder=""
                data={this.data}
                selectedOption={school}
                onSelect={this.onSelect}
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

StudentInfo.propTypes = {
  // hoc
  resaga: PropTypes.object.isRequired,

  // parent
  page: PropTypes.number.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,

  // resaga
  name: PropTypes.string,
  school: PropTypes.object,
  studentNumber: PropTypes.string,
  placeOfBirth: PropTypes.string,
  dateOfBirth: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

StudentInfo.defaultProps = {};

export default resaga(CONFIG)(StudentInfo);
