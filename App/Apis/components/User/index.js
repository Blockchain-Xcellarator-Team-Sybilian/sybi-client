import { compose } from 'redux';
import { Component } from 'react';
import PropTypes from 'prop-types';
import resaga, { reducer } from 'resaga';
import injectReducer from 'App/Utils/injectReducer';
import { LOGIN, USER_API } from 'App/Apis';
import { CONFIG } from './config';

export class User extends Component {
  componentWillReceiveProps(nextProps) {
    return this.props.resaga.analyse(nextProps, {
      [LOGIN]: { onSuccess: this.props.resaga.setValue },
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return null;
  }
}

User.propTypes = {
  // hoc
  resaga: PropTypes.object.isRequired,
};

User.defaultProps = {};

export default compose(
  injectReducer({ key: USER_API, reducer: reducer(USER_API) }),
  resaga(CONFIG)
)(User);
