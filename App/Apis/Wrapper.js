import React, { Component, Fragment } from 'react';
import AppSetup from './components/AppSetup';
import Sample from './components/Sample';

export class API extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Fragment>
        <Sample />
        <AppSetup />
      </Fragment>
    );
  }
}

API.propTypes = {};
API.defaultProps = {};

export default API;
