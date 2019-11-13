import { Text, Button } from 'galio-framework';
import React, { PureComponent } from 'react';
import resaga from 'resaga';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { Images } from 'App/Theme';
import Container from 'App/Components/Container';
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen';
import { CONFIG } from './config';
import styles from './styles';

export class MainScreen extends PureComponent {
  state = {
    initial: true,
  };

  setInitial = () => {
    this.setState({ initial: false });
  };

  renderMainScreen = () => {
    const { initial } = this.state;

    let screen = (
      <Container animated center>
        <View style={styles.imageContainer}>
          <Image source={Images.logoFill} style={styles.image} resizeMode="contain" />
        </View>
        <View>
          <Button round uppercase style={styles.registerBtn}>
            <Text bold style={styles.registerText}>
              REGISTER AN ACCOUNT
            </Text>
          </Button>
          <Button color="#ffffff" round uppercase style={styles.loginBtn}>
            <Text bold>
              LOGIN
            </Text>
          </Button>
        </View>
      </Container>
    );

    if (initial) {
      screen = (
        <SplashScreen animation="fadeOutUp" onAnimationEnd={this.setInitial} />
      );
    }

    return screen;
  };

  render() {
    return this.renderMainScreen();
  }
}

MainScreen.propTypes = {
  message: PropTypes.string,
};

MainScreen.defaultProps = {
  message: '',
};

export default resaga(CONFIG)(MainScreen);
