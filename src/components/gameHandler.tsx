import React, { Component } from 'react';
import { connect } from 'react-redux';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import HangmanGame from './hangman/hangmanGame';
import GameWindow from './gameWindow';
import { GAME_IN_PROGRESS } from '../constants/pages';
import { RESET_GAME } from '../constants/actionTypes';
import Loader from './loader';

interface Props {
  app: any;
}

export class GameHandler extends Component<Props> {
  render() {
    const boardLayout = (
      <Fade
        {...{ timeout: { enter: 1000, exit: 0 } }}
        in={this.props.app.page === GAME_IN_PROGRESS ? true : false}
        mountOnEnter
        unmountOnExit
      >
        <div>{this.props.app.loadingStatus ? <Loader /> : <HangmanGame />}</div>
      </Fade>
    );

    return boardLayout;
  }
}

const mapStateToProps = (state: any) => ({
  app: state.app
});

export default connect(
  mapStateToProps,
  null
)(GameHandler);
