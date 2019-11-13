import React, { PureComponent } from 'react';
import { Tab, TabItem } from 'App/Components/UI';
import ViewBackground from 'App/Components/ViewBackground';
import PropTypes from 'prop-types';
import styles from './styles';
import COLORS from '../../../../Theme/Colors';

export class Terms extends PureComponent {
  render() {
    return (
      <ViewBackground>
        <Tab indicatorStyle={{ borderBottomColor: COLORS.primary, borderBottomWidth: 2 }}>
          <TabItem
            label="Agreement"
            labelStyle={styles.labelStyle}
            selectedLabelStyle={styles.selectedLabelStyle}
          />
          <TabItem
            label="Privacy"
            labelStyle={styles.labelStyle}
            selectedLabelStyle={styles.selectedLabelStyle}
          />
        </Tab>
      </ViewBackground>
    );
  }
}

Terms.propType = {};

Terms.defaultProps = {};

export default Terms;
