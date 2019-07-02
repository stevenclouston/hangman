import React, { Component } from 'react';
import { connect } from 'react-redux';
import Fade from '@material-ui/core/Fade';
import { START_PAGE } from '../constants/pages';
import { CircularProgress } from '@material-ui/core';

class Loader extends Component {
  render() {
    const title = (
      <Fade
        {...{ timeout: { enter: 1000, exit: 0 } }}
        in={true}
        mountOnEnter
        unmountOnExit
        style={{ height: '100%' }}
      >
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: 100,
            marginLeft: -50
          }}
        >
          <CircularProgress color="inherit" />
          <h6>loading</h6>
        </div>
      </Fade>
    );

    return title;
  }
}

export default Loader;
