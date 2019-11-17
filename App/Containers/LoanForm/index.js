import resaga from 'resaga';
import { Image, TouchableOpacity } from 'react-native';
import React, { PureComponent } from 'react';
import {
  ViewPadding, Label, Input,
} from 'App/Components/UI';
import ScrollContainer from 'App/Components/ScrollContainer';
import Backdrop from 'App/Components/Backdrop';
import { LOGIC_HELPERS } from 'App/Utils/helpers/logic';
import Camera from 'App/Components/Camera';
import Title from 'App/Components/Title';
import Images from 'App/Theme/Images';
import PropTypes from 'prop-types';
import { IMAGE_INPUTS } from './inputs';
import { CONFIG } from './config';
import styles from './styles';
import NavigationService from '../../Services/NavigationService';

export class LoanForm extends PureComponent {
  state = {
    key: '',
    type: '',
    amount: '',
    selfie: null,
    idBack: null,
    idFront: null,
    assessmentForm: null,
    description: '',
    mirrorImage: false,
    cameraMode: false,
    face: false,
  };

  componentDidMount = () => {
    const { navigation } = this.props;
    navigation.setParams({
      disableNext: false,
      nextTitle: 'Submit',
      nextFunc: this.onSubmit,
    });
  };

  onSubmit = () => {
    NavigationService.navigateAndReset('DashboardScreen');
  };

  onCapture = key => (imageData) => {
    const { navigation } = this.props;

    this.setState({ [key]: imageData, cameraMode: false }, () => {
      this.inputValidator();
      navigation.setParams({
        variant: 'default',
      });
    });
  };

  onChangeText = key => (value) => {
    this.setState({ [key]: value }, this.inputValidator);
  };

  inputValidator = () => {
    const {
      amount, selfie, idBack, idFront, assessmentForm, description,
    } = this.state;
    const { navigation } = this.props;

    const isValid = LOGIC_HELPERS.ifElse(
      [amount, description, selfie, idBack, idFront, assessmentForm],
      true,
      false
    );

    navigation.setParams({ disableNext: !isValid });
  };

  toggleCamera = item => () => {
    const { navigation } = this.props;

    navigation.setParams({
      variant: 'hidden',
    });

    this.setState({ ...item }, () => {
      this.setState({ cameraMode: true });
    });
  };

  showCamera = (key) => {
    const { face, type, mirrorImage } = this.state;
    return (
      <Camera
        type={type}
        faceRequired={face}
        mirrorImage={mirrorImage}
        onCapture={this.onCapture(key)}
      />
    );
  };

  renderImage = (item) => {
    const { key, label } = item;

    const imageData = this.state[key];

    let source;

    if (!imageData) {
      source = Images.imgPlaceholder;
    } else {
      source = { uri: imageData.uri };
    }

    return (
      <ViewPadding key={key}>
        <Label label={label} />
        <TouchableOpacity
          style={styles.imageButton}
          onPress={this.toggleCamera(item)}
        >
          <Image resizeMode="cover" style={styles.imageSize} source={source} />
        </TouchableOpacity>
      </ViewPadding>
    );
  };

  render() {
    const {
      cameraMode, amount, description, key
    } = this.state;

    if (cameraMode) {
      return this.showCamera(key);
    }

    return (
      <ScrollContainer>
        <Title title="Loan Details" />
        <Backdrop>
          The data you sent will be used to verify your identity and your enrollment status.
          By clicking SUBMIT you agree that all data you entered are yours.
        </Backdrop>
        <ViewPadding>
          <Label label="LOAN AMOUNT*" />
          <Input
            value={amount}
            keyboardType="numeric"
            onChangeText={this.onChangeText('amount')}
          />
        </ViewPadding>
        <ViewPadding>
          <Label label="DESCRIPTION" />
          <Input
            value={description}
            onChangeText={this.onChangeText('description')}
            multiline
          />
        </ViewPadding>
        <Title title="Supporting Documents" />
        <Backdrop>
          We advise you to have sufficient lighting during this step.
          Remove your eyeglasses and accessories if there's any.
        </Backdrop>
        <ViewPadding style={styles.imageRoot}>
          {IMAGE_INPUTS.map(this.renderImage)}
        </ViewPadding>
      </ScrollContainer>
    );
  }
}

LoanForm.propTypes = {
  resaga: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

LoanForm.defaultProps = {};

export default resaga(CONFIG)(LoanForm);
