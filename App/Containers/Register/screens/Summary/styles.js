import { StyleSheet } from 'App/Theme';
import COLORS from 'App/Theme/Colors';

const styles = StyleSheet.create({
  grow: {
    flex: 1,
  },
  container: {
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: COLORS.whiteOpaque,
  },
  text: {
    paddingBottom: 4
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  backdrop: {
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 8,
    marginBottom: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: COLORS.primary,
    borderColor: COLORS.headerBorder
  },
  message: {
    color: COLORS.white
  }
});

export default styles;
