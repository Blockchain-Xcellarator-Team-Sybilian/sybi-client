import { StyleSheet } from 'App/Theme';
import COLORS from 'App/Theme/Colors';
import { Dimensions } from 'react-native';


const styles = StyleSheet.create({
  stepIndicator: {
    marginBottom: 24,
  },
  page: {
    flex: 1,
    marginHorizontal: 24,
  },
  stepLabel: {
    fontSize: 8,
    textAlign: 'center',
    fontWeight: '500',
    color: '#999999',
  },
  stepLabelSelected: {
    fontSize: 8,
    textAlign: 'center',
    fontWeight: '500',
    color: '#4aae4f',
  },
  pager: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  title: {
  },
});

const indicator = {
  stepStrokeWidth: 2,
  stepIndicatorSize: 12,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  currentStepIndicatorSize: 16,
  stepIndicatorLabelFontSize: 0,
  separatorStrokeFinishedWidth: 3,
  currentStepIndicatorLabelFontSize: 0,
  separatorUnFinishedColor: COLORS.disabled,
  stepStrokeUnFinishedColor: COLORS.disabled,
  stepIndicatorLabelUnFinishedColor: COLORS.disabled,
  stepIndicatorCurrentColor: COLORS.white,
  stepIndicatorUnFinishedColor: COLORS.white,
  stepIndicatorLabelFinishedColor: COLORS.white,
  currentStepLabelColor: COLORS.primary,
  stepStrokeCurrentColor: COLORS.primary,
  separatorFinishedColor: COLORS.primary,
  stepStrokeFinishedColor: COLORS.primary,
  stepIndicatorFinishedColor: COLORS.primary,
  stepIndicatorLabelCurrentColor: COLORS.primary,
};

export const indicatorStyles = indicator;

export default styles;
