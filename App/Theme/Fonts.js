import { StyleSheet } from 'react-native';
import { material, materialColors, systemWeights } from 'react-native-typography';
import c from './Colors';

export const type = material;
export const color = materialColors;
export const weight = systemWeights;

const fontColors = StyleSheet.create({
  primary: {
    color: c.primary,
  },
  text: {
    color: c.text,
  },
  headerColor: {
    color: c.header,
  },
  subtitleColor: {
    color: c.subtitle,
  },
  buttonPrimary: {
    ...material.buttonObject,
    color: materialColors.blackPrimary,
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  capitalize: {
    textTransform: 'capitalize',
  },
});

export default {
  ...material, ...fontColors, ...materialColors, ...systemWeights,
};
