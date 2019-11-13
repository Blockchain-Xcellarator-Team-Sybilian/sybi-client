import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'App/Components/UI';
import {
  Layout,
  Select,
} from 'react-native-ui-kitten';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 230,
    paddingVertical: 8,
    paddingHorizontal: 4,
    backgroundColor: 'green'
  },
  select: {
    flex: 1,
    marginHorizontal: 4,
  },
});

export class SelectSimpleUsageShowcase extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Select
          style={styles.select}
          data={this.data}
          placeholder="Active"
          selectedOption={this.state.selectedOption}
          onSelect={this.onSelect}
        />
      </View>
    );
  }
}

export default SelectSimpleUsageShowcase;

