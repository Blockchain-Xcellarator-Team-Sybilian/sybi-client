import { StyleSheet } from 'App/Theme';

const styles = StyleSheet.create({
  root: {},
  title: {
    marginBottom: 16
  },
  item: {
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  hidden: {
    opacity: 0,
  },
  check: {
    marginTop: 4,
    marginRight: 16
  },
  message: {
    flex: 1,
    textAlign: 'justify'
  },
  bulletRoot: {
    flex: 1,
    flexDirection: 'row',
  },
  bullet: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    marginRight: 8,
  },
});

export default styles;
