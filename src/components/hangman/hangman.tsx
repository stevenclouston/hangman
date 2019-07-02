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

interface Props {}

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
        <HangRope />
        <Head />
        <HangmanBody>
          <Arm side={'left'} />
          <Arm side={'right'} />
        </HangmanBody>
        <div
          style={{
            position: 'absolute',
            height: '25%',
            width: '30%',
            marginLeft: `${50 - 15}%`
          }}
        >
          <Leg side={'left'} />
          <Leg side={'right'} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({});

export default connect(
  mapStateToProps,
  null
)(Hangman);
