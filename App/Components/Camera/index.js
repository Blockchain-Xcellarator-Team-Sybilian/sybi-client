/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import { RNCamera } from 'react-native-camera';
import { MaterialIcon } from 'App/Components/UI';
import styles from './styles';
import COLORS from '../../Theme/Colors';

const flashModeOrder = {
  off: 'on',
  on: 'auto',
  auto: 'torch',
  torch: 'off',
};

const flashModeIcon = {
  on: 'flash-on',
  off: 'flash-off',
  auto: 'flash-auto',
  torch: 'flare',
};

const landmarkSize = 4;

export class CameraScreen extends Component {
  state = {
    zoom: 0,
    depth: 0,
    flash: 'off',
    flashIcon: 'flash-off',
    autoFocus: 'on',
    type: 'front',
    whiteBalance: 'auto',
    canDetectFaces: true,
    ratio: '16:9',
    faces: [],
  };

  componentDidMount = () => {
    const { type, faceRequired } = this.props;
    this.setState({ type, canDetectFaces: faceRequired });
  };

  toggleFacing = () => {
    const { type } = this.state;

    this.setState({
      type: type === 'back' ? 'front' : 'back',
    });
  };

  toggleFlash = () => {
    const { flash } = this.state;
    const flashOrder = flashModeOrder[flash];
    const flashIcon = flashModeIcon[flashOrder];

    this.setState({ flash: flashOrder, flashIcon });
  };

  takePicture = async function () {
    const { faces } = this.state;
    const { onCapture, mirrorImage, faceRequired } = this.props;

    if (faceRequired && !faces.length) {
      console.warn('No Face Detected! ');
    } else if (this.camera) {
      const options = {
        width: 300,
        doNotSave: false,
        mirrorImage,
        fixOrientation: true,
        orientation: 'portrait'
      };

      const data = await this.camera.takePictureAsync(options);
      onCapture(data);
    }
  };

  toggle = value => () => this.setState(prevState => ({ [value]: !prevState[value] }));

  facesDetected = ({ faces }) => this.setState({ faces });

  renderFace = ({
    bounds, faceID, rollAngle, yawAngle
  }) => (
    <View
      key={faceID}
      transform={[
        { perspective: 600 },
        { rotateZ: `${rollAngle.toFixed(0)}deg` },
        { rotateY: `${yawAngle.toFixed(0)}deg` },
      ]}
      style={[
        styles.face,
        {
          ...bounds.size,
          left: bounds.origin.x,
          top: bounds.origin.y,
        },
      ]}
    />
  );

  renderLandmarksOfFace = (face) => {
    const renderLandmark = position => position && (
      <View
        style={[
          styles.landmark,
          {
            left: position.x - landmarkSize / 2,
            top: position.y - landmarkSize / 2,
          },
        ]}
      />
    );
    return (
      <View key={`landmarks-${face.faceID}`}>
        {renderLandmark(face.leftEyePosition)}
        {renderLandmark(face.rightEyePosition)}
        {renderLandmark(face.leftEarPosition)}
        {renderLandmark(face.rightEarPosition)}
        {renderLandmark(face.leftCheekPosition)}
        {renderLandmark(face.rightCheekPosition)}
        {renderLandmark(face.leftMouthPosition)}
        {renderLandmark(face.mouthPosition)}
        {renderLandmark(face.rightMouthPosition)}
        {renderLandmark(face.noseBasePosition)}
        {renderLandmark(face.bottomMouthPosition)}
      </View>
    );
  };

  renderFaces = () => (
    // render one face only
    <View style={styles.facesContainer} pointerEvents="none">
      {/* {this.renderFace[this.state.faces[0]]} */}
      {this.state.faces.map(this.renderFace)}
    </View>
  );

  renderLandmarks = () => (
    <View style={styles.facesContainer} pointerEvents="none">
      {this.state.faces.map(this.renderLandmarksOfFace)}
    </View>
  );

  renderCamera = () => {
    const { flashIcon, canDetectFaces } = this.state;
    return (
      <RNCamera
        ref={(ref) => {
          this.camera = ref;
        }}
        style={{
          flex: 1,
        }}
        type={this.state.type}
        flashMode={this.state.flash}
        autoFocus={this.state.autoFocus}
        zoom={this.state.zoom}
        whiteBalance={this.state.whiteBalance}
        ratio={this.state.ratio}
        focusDepth={this.state.depth}
        trackingEnabled
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        faceDetectionLandmarks={
          RNCamera.Constants.FaceDetection.Landmarks
            ? RNCamera.Constants.FaceDetection.Landmarks.all
            : undefined
        }
        faceDetectionClassifications={
          RNCamera.Constants.FaceDetection.Classifications
            ? RNCamera.Constants.FaceDetection.Classifications.all
            : undefined
        }
        onFacesDetected={canDetectFaces ? this.facesDetected : null}
      >
        <View style={styles.cameraButtons}>
          <TouchableOpacity onPress={this.toggleFacing}>
            <MaterialIcon color={COLORS.primary} size={28} name="switch-camera" />
          </TouchableOpacity>
          <TouchableOpacity
            // eslint-disable-next-line react/jsx-no-bind
            onPress={this.takePicture.bind(this)}
          >
            <MaterialIcon color={COLORS.primary} size={28} name="camera" />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toggleFlash}>
            <MaterialIcon color={COLORS.primary} size={28} name={flashIcon} />
          </TouchableOpacity>
        </View>
        {!!canDetectFaces && this.renderFaces()}
        {!!canDetectFaces && this.renderLandmarks()}
      </RNCamera>
    );
  };

  render() {
    return <View style={styles.container}>{this.renderCamera()}</View>;
  }
}

CameraScreen.propTypes = {
  onCapture: PropTypes.func.isRequired,
  faceRequired: PropTypes.bool,
  mirrorImage: PropTypes.bool,
  type: PropTypes.string,
};

CameraScreen.defaultProps = {
  type: 'front',
  faceRequired: false,
};

export default CameraScreen;
