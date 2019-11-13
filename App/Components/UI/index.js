import React from 'react';
import moment from 'moment';
import { TabBar, View as VIEW } from 'react-native-ui-lib';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Input as KittenInput, Text as TEXT } from 'react-native-ui-kitten';
import COLORS from 'App/Theme/Colors';
import styles from './styles';

moment.locale('en');

OTF.defaultProps.selectionColor = COLORS.primary;

const INPUT = ({ ...props }) => (
  <KittenInput {...props} />
);

export const Input = ({ style, ...props }) => (
  <INPUT
    size="small"
    style={styles.input}
    {...props}
  />
);

export const ViewInputContainer = ({ ...props }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} {...props} />
);

export const Label = ({ label, ...props }) => (
  <TEXT category="label" style={styles.label} {...props}>
    {label}
  </TEXT>
);

export const Moment = ({ date, format = 'MMM DD, YYYY', ...props }) => (
  <TEXT {...props}>
    {moment(date).format(format)}
  </TEXT>
);

export const ViewPadding = ({ style, ...props }) => (
  <View style={[styles.viewPadding, style]} {...props} />
);

export const Tab = TabBar;
export const TabItem = TabBar.Item;
export const View = VIEW;

export SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
export MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export {
  ScrollView
} from 'react-native';

export {
  Select, Icon, Datepicker, Toggle, Text as RKText
} from 'react-native-ui-kitten';

export {
  Text, Button, Card, Avatar
} from 'react-native-ui-lib';
