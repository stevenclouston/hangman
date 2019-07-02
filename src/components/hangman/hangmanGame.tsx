import React, { Component } from 'react';
import { connect } from 'react-redux';
import GameWindow from '../gameWindow';
import GuessedWordDisplay from './guessedWordDisplay';
import HangFrame from './hangFrame';
import Hangman from './hangman';
import Keyboard from '../input/keyboard';
import { Fade } from '@material-ui/core';
import { GAME_IN_PROGRESS } from '../../constants/pages';
import { IHangmanGame } from '../../interfaces/IHangmanGame';
import '../../assets/css/hangman.scss';

interface Props {}

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
          <div className="box word-window">
            <GuessedWordDisplay />
          </div>
          <div className="box animations">
            <HangFrame />
            <Hangman />
          </div>
          <Keyboard />
        </div>
      </Fade>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(
  null,
  mapDispatchToProps
)(HangmanGame);
