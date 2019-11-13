import { compose } from 'redux';
import { Component } from 'react';
import PropTypes from 'prop-types';
import resaga, { reducer } from 'resaga';
import injectReducer from 'App/Utils/injectReducer';
import { UPDATE_DONE_INTRO, APP_SETUP_API } from 'App/Apis';
import { CONFIG } from './config';

export class AppSetup extends Component {
  componentWillReceiveProps(nextProps) {
    return this.props.resaga.analyse(nextProps, {
      [UPDATE_DONE_INTRO]: { onSuccess: this.props.resaga.setValue },
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return null;
  }
}

AppSetup.propTypes = {
  // hoc
  resaga: PropTypes.object.isRequired,
};

AppSetup.defaultProps = {};

export default compose(
  injectReducer({ key: APP_SETUP_API, reducer: reducer(APP_SETUP_API) }),
  resaga(CONFIG)
)(AppSetup);
