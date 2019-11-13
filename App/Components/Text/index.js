import React, { PureComponent } from 'react';
import { Text } from 'App/Components/UI';
import f from 'App/Theme/Fonts';

export default class TextComponent extends PureComponent {
  render() {
    return (
      <Text style={[f.body1, f.bold]}>Help!</Text>
    );
  }
}
