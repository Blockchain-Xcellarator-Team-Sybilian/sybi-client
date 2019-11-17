import React, { PureComponent } from 'react';
import Container from 'App/Components/Container';
import { ScrollView, ViewInputContainer } from 'App/Components/UI';
import PropTypes from 'prop-types';

export class ScrollContainer extends PureComponent {
  render() {
    const { children } = this.props;


    return (
      <Container dense>
        <ViewInputContainer>
          <ScrollView
            contentContainerStyle={{ paddingHorizontal: 24, paddingVertical: 20 }}
          >
            {children}
          </ScrollView>
        </ViewInputContainer>
      </Container>
    );
  }
}

ScrollContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

ScrollContainer.defaultProps = {};

export default ScrollContainer;
