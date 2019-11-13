import { Text, Button, View } from 'App/Components/UI';
import React, { PureComponent } from 'react';
import resaga from 'resaga';
import { Image } from 'react-native';
import NavigationService from 'App/Services/NavigationService';
import { Images } from 'App/Theme';
import Container from 'App/Components/Container';
import Splash from 'App/Containers/Splash';
import f from 'App/Theme/Fonts';
import { CONFIG } from './config';
import styles from './styles';
import COLORS from '../../Theme/Colors';

export class Main extends PureComponent {
  state = {
    initial: true,
  };

  setInitial = () => {
    this.setState({ initial: false });
  };

  onLogin = () => {
    NavigationService.navigate('LoginScreen');
  };

  onRegister = () => {
    NavigationService.navigate('ReminderScreen');
  };

  renderMainScreen = () => {
    const { initial } = this.state;

    let screen = (
      <Container animated center>
        <View style={styles.imageContainer}>
          <Image source={Images.logoFill} style={styles.image} resizeMode="contain" />
        </View>
        <View style={styles.register}>
          <Button onPress={this.onRegister} backgroundColor={COLORS.primary} enableShadow>
            <Text style={[f.buttonWhite]}>REGISTER AN ACCOUNT</Text>
          </Button>
        </View>
        <View style={styles.login}>
          <Button backgroundColor="white" onPress={this.onLogin} enableShadow>
            <Text style={[f.buttonPrimary]}>LOGIN</Text>
          </Button>
        </View>
        <View style={styles.schools}>
          <Button link>
            <Text style={[f.button, f.uppercase, f.bold, f.primary]}>
              See partner schools
            </Text>
          </Button>
        </View>
      </Container>
    );

    if (initial) {
      screen = <Splash animation="fadeOutUp" onAnimationEnd={this.setInitial} />;
    }

    return screen;
  };

  render() {
    return this.renderMainScreen();
  }
}

Main.propTypes = {};

Main.defaultProps = {};

export default resaga(CONFIG)(Main);
