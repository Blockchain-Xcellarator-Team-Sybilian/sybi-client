import React, { Component, Fragment } from 'react';
import Sample from './components/Sample';

export class API extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Fragment>
        <Sample />
      </Fragment>
    );
  }
}

API.propTypes = {};
API.defaultProps = {};

export default API;
