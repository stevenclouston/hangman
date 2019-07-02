import React, { Component } from 'react';
import { connect } from 'react-redux';
import GameWindow from '../gameWindow';
import HangFrame from './hangFrame';
import Hangman from './hangman';
import { Fade } from '@material-ui/core';
import { GAME_IN_PROGRESS } from '../../constants/pages';
import LivesRemaining from './remainingLives';
import {IHangmanGame} from '../../interfaces/IHangmanGame';

interface Props {
  // createWords: any
}

class HangmanGame extends Component<Props> implements IHangmanGame {
  render() {
    return (
      <Fade
        {...{ timeout: { enter: 1000, exit: 0 } }}
        in={true}
        mountOnEnter
        unmountOnExit
      >
        <div className="container">
          <div className="box animations">
            <HangFrame />
            <Hangman />
          </div>
        </div>
      </Fade>
    )
  }

}

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(
  null,
  mapDispatchToProps
)(HangmanGame);