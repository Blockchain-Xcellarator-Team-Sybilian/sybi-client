import { StyleSheet } from 'App/Theme';
import COLORS from '../../../../Theme/Colors';
import f from '../../../../Theme/Fonts';

const styles = StyleSheet.create({
  root: {},
  labelStyle: {
    ...f.bold,
    ...f.buttonObject,
    color: COLORS.text,
  },
  selectedLabelStyle: {
    ...f.bold,
    ...f.buttonObject,
    color: COLORS.primary,
  }
});

export default styles;
