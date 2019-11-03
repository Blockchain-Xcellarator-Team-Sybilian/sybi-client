import { compose } from 'redux';
import { Component } from 'react';
import PropTypes from 'prop-types';
import resaga, { reducer } from 'resaga';
import injectReducer from 'App/Utils/injectReducer';
import { GET_WELCOME_MESSAGE, SAMPLE_API } from 'App/Apis';
import { CONFIG } from './config';

export class Sample extends Component {
  componentDidMount = () => {
    const { message } = this.props;

    if (!message) {
      const payload = { name: 'Hooman' };
      this.props.resaga.dispatchTo(SAMPLE_API, GET_WELCOME_MESSAGE, { payload });

      console.log('SETTING MESSAGE');
    } else {
      console.log('MESSAGE ALREADY SET!');
    }
  };

  componentWillReceiveProps(nextProps) {
    return this.props.resaga.analyse(nextProps, {
      [GET_WELCOME_MESSAGE]: { onSuccess: this.props.resaga.setValue },
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return null;
  }
}

Sample.propTypes = {
  // hoc
  resaga: PropTypes.object.isRequired,
  message: PropTypes.string,
};

Sample.defaultProps = {};

export default compose(
  injectReducer({ key: SAMPLE_API, reducer: reducer(SAMPLE_API) }),
  resaga(CONFIG)
)(Sample);
