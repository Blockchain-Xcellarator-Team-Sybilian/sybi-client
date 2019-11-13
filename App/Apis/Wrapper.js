import React, { Component, Fragment } from 'react';
import AppSetup from './components/AppSetup';

export class API extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Fragment>
        <AppSetup />
      </Fragment>
    );
  }
}

API.propTypes = {};
API.defaultProps = {};

export default API;
