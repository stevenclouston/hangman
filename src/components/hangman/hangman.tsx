import * as React from 'react';
import { connect } from 'react-redux';
import Head from './head';
import HangmanBody from './body';
import Arm from './arm';
import Leg from './leg';
import { IHangmanGame } from '../../interfaces/IHangmanGame';
import HangRope from './hangRope';
import Fade from '@material-ui/core/Fade';
import { START_PAGE } from '../../constants/pages';
import { Paper } from '@material-ui/core';
import '../../assets/css/hangman.scss';

interface Props {
  livesRemaining: number;
}

class Hangman extends React.Component<Props> {
  render() {
    const borderWidth: number = 8;

    return (
      <div
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: 0,
          left: 0
        }}
      >
        <Fade in={this.props.livesRemaining < 7 ? true : false}>
          <HangRope />
        </Fade>
        <Fade in={this.props.livesRemaining < 6 ? true : false}>
          <Head />
        </Fade>
        <Fade in={this.props.livesRemaining < 5 ? true : false}>
          <HangmanBody>
            <Fade in={this.props.livesRemaining < 4 ? true : false}>
              <Arm side={'left'} />
            </Fade>
            <Fade in={this.props.livesRemaining < 3 ? true : false}>
              <Arm side={'right'} />
            </Fade>
          </HangmanBody>
        </Fade>
        <div
          style={{
            position: 'absolute',
            height: '25%',
            width: '30%',
            marginLeft: `${50 - 15}%`
          }}
        >
          <Fade in={this.props.livesRemaining < 2 ? true : false}>
            <Leg side={'left'} />
          </Fade>
          <Fade in={this.props.livesRemaining < 1 ? true : false}>
            <Leg side={'right'} />
          </Fade>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  livesRemaining: state.gameContext.livesRemaining
});

export default connect(
  mapStateToProps,
  null
)(Hangman);
