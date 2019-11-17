import resaga from 'resaga';
import React, { Component, Fragment } from 'react';
import { AnimatedImage } from 'App/Components/Animated';
import ScrollContainer from 'App/Components/ScrollContainer';
import { RKText, View, Button } from 'App/Components/UI';
import Title from 'App/Components/Title';
import COLORS from 'App/Theme/Colors';
import { Images } from 'App/Theme';
import PropTypes from 'prop-types';
import { CONFIG } from './config';
import styles from './styles';

export class StatusScreen extends Component {
  state = {
    animation: 'fadeInRight',
  };

  componentWillUnmount = () => {
    this.setState({ animation: '' });
  };

  renderActionButton = () => {
    const { status } = this.props;
    if (status !== 'approved') {
      return null;
    }

    return (
      <Fragment>
        <Button style={{ backgroundColor: COLORS.primary, marginBottom: 8 }}>
          <RKText style={styles.accept}>
            Accept
          </RKText>
        </Button>
        <Button style={styles.cancelButton} enableShadow>
          <RKText style={styles.cancel}>
            Cancel
          </RKText>
        </Button>
      </Fragment>
    );
  };

  render() {
    const { animation } = this.state;

    return (
      <ScrollContainer>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Title title="Your loan status" />
          <RKText style={styles.status}>APPROVED</RKText>
        </View>
        <View style={{ alignItems: 'center' }}>
          <AnimatedImage
            duration={500}
            animation={animation}
            source={Images.ongoingLoan}
            style={{ width: 300, height: 300 }}
          />
        </View>
        <Title title="Description" />
        {this.renderActionButton()}
      </ScrollContainer>
    );
  }
}

StatusScreen.propTypes = {
  resaga: PropTypes.object.isRequired,
  status: PropTypes.string,
};

StatusScreen.defaultProps = {
  status: 'approved'
};

export default resaga(CONFIG)(StatusScreen);
