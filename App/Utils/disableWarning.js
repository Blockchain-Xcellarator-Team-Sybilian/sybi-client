import { YellowBox } from 'react-native';

const componentWarnings = [
  'componentWillMount',
  'componentWillUpdate',
  'componentWillReceiveProps',
];

const formattedWarnings = componentWarnings.map(warning => `Warning: ${warning}`);

YellowBox.ignoreWarnings(formattedWarnings);
console.log({ formattedWarnings });
