import React, { Component, Fragment } from 'react';
import User from './components/User';
import AppSetup from './components/AppSetup';

export class API extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Fragment>
        <User />
        <AppSetup />
      </Fragment>
    );
  }
}

API.propTypes = {};
API.defaultProps = {};

export default API;
