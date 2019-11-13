import resaga from 'resaga';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import StepIndicator from 'react-native-step-indicator';
import { LOGIC_HELPERS } from 'App/Utils/helpers/logic';
import Container from 'App/Components/Container';
import { View } from 'App/Components/UI';
import Summary from './screens/Summary';
import AccountInfo from './screens/AccountInfo';
import StudentInfo from './screens/StudentInfo';
import PersonalInfo from './screens/PersonalInfo';
import AddGuarantor from './screens/AddGuarantor';
import GuarantorPersonalInfo from './screens/GuarantorPersonalInfo';
import styles, { indicatorStyles } from './styles';
import { CONFIG } from './config';

export class Register extends Component {
  state = {
    stepCount: 5,
    currentPage: 0,
    hasGuarantor: false,
  };

  componentDidMount = () => {
    const { currentPage, hasGuarantor } = this.props;
    const stepCount = LOGIC_HELPERS.ifElse(hasGuarantor, 6, 5);

    this.setState({
      stepCount,
      currentPage,
      hasGuarantor,
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { currentPage } = this.state;

    if (currentPage !== prevState.currentPage) {
      this.props.resaga.setValue({ currentPage });
    }
  };

  onStepPress = (position) => {
    const { currentPage } = this.state;
    if (currentPage > position) {
      this.setState({ currentPage: position });
    }
  };

  changeStepCount = (change) => {
    if (change) {
      this.setState({ stepCount: 6, hasGuarantor: true });
    } else {
      this.setState({ stepCount: 5, hasGuarantor: false });
    }
  };

  onNextStep = (nextPage, onSubmit) => {
    onSubmit();
    this.setState({ currentPage: nextPage });
  };

  renderPage = (page, Screen, props = {}) => {
    const { navigation } = this.props;
    return (
      <Screen
        page={page}
        navigation={navigation}
        nextStep={this.onNextStep}
        {...props}
      />
    );
  };

  renderAdditionalPage = (page) => {
    const { hasGuarantor } = this.state;

    if (hasGuarantor) {
      return this.renderPage(page, GuarantorPersonalInfo);
    }

    return this.renderPage(page, Summary);
  };

  switchPage = page => LOGIC_HELPERS.switchCase(page, {
    0: () => this.renderPage(page, AccountInfo),
    1: () => this.renderPage(page, StudentInfo),
    2: () => this.renderPage(page, PersonalInfo),
    3: () => this.renderPage(page, AddGuarantor, { changeStepCount: this.changeStepCount }),
    4: () => this.renderAdditionalPage(page),
    5: () => this.renderPage(page, Summary),
  });

  render() {
    const { currentPage, stepCount } = this.state;
    return (
      <Container>
        <View style={styles.stepIndicator}>
          <StepIndicator
            stepCount={stepCount}
            onPress={this.onStepPress}
            currentPosition={currentPage}
            customStyles={indicatorStyles}
          />
          {this.switchPage(currentPage)}
        </View>
      </Container>
    );
  }
}

Register.propTypes = {
  // hoc
  resaga: PropTypes.object.isRequired,

  // resaga
  hasGuarantor: PropTypes.bool,
  currentPage: PropTypes.number,
};

Register.defaultProps = {
  currentPage: 0,
};

export default resaga(CONFIG)(Register);
