import React, { PureComponent } from 'react';
import Container from 'App/Components/Container';
import { AnimatedView } from 'App/Components/Animated';
import { View, Text, SimpleIcon, MaterialIcon } from 'App/Components/UI';
import COLORS from 'App/Theme/Colors';
import f from 'App/Theme/Fonts';
import styles from './styles';

export class Reminders extends PureComponent {
  renderItemOne = () => (
    <View>
      <View style={styles.item}>
        <SimpleIcon size={16} name="check" style={styles.check} color={COLORS.primary} />
        <Text style={[f.caption, styles.message]}>
          Kindly complete the application once started to ensure uninterrupted service. Please
          ensure a strong and secure internet connection during the application.
        </Text>
      </View>
    </View>
  );

  renderItemTwo = () => (
    <React.Fragment>
      <View style={styles.item}>
        <SimpleIcon size={16} name="check" style={styles.check} color={COLORS.primary} />
        <Text style={[f.caption, styles.message]}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Prepare your school ID and registration assessment or school's statement of account. The
          details of your ID should match the same details in your application form.
        </Text>
      </View>
    </React.Fragment>
  );

  renderBulletItems = () => (
    <View style={styles.item}>
      <SimpleIcon
        size={16}
        name="check"
        style={[styles.check, styles.hidden]}
        color={COLORS.primary}
      />
      <View style={styles.bulletRoot}>
        <View style={styles.bullet}>
          <MaterialIcon size={8} name="brightness-1" style={styles.dot} color={COLORS.primary} />
          <Text style={[f.caption]}>School ID</Text>
        </View>
        <View style={styles.bullet}>
          <MaterialIcon size={8} name="brightness-1" style={styles.dot} color={COLORS.primary} />
          <Text style={[f.caption]}>Registration assessment</Text>
        </View>
      </View>
    </View>
  );

  renderItemThree = () => (
    <View>
      <View style={styles.item}>
        <SimpleIcon size={16} name="check" style={styles.check} color={COLORS.primary} />
        <Text style={[f.caption, styles.message]}>
          We will be validating your identity through a selfie. We advise you to have sufficient
          lighting during this step.
        </Text>
      </View>
    </View>
  );

  render() {
    return (
      <Container>
        <AnimatedView animation="fadeIn" style={{ flex: 1 }}>
          <View style={styles.title}>
            <Text style={[f.body2, f.text, f.bold]}>Before we proceed...</Text>
          </View>
          {this.renderItemOne()}
          {this.renderItemTwo()}
          {this.renderBulletItems()}
          {this.renderItemThree()}
        </AnimatedView>
      </Container>
    );
  }
}

Reminders.propType = {};

Reminders.defaultProps = {};

export default Reminders;
