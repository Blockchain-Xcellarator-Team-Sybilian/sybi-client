import { StyleSheet } from 'App/Theme';
import COLORS from 'App/Theme/Colors';

const styles = StyleSheet.create({
  root: {
    marginTop: 16,
  },
  select: {
    marginHorizontal: -4,
  },
  label: {
    marginHorizontal: 4,
  },
  toggle: {
    alignSelf: 'flex-start'
  },
  backdrop: {
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: COLORS.primary,
    borderColor: COLORS.headerBorder
  },
  guarantor: {
    color: COLORS.white
  }
});

export default styles;
