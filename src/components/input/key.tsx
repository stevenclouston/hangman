import * as React from 'react';
import { connect } from 'react-redux';
import { GameHandler } from '../gameHandler';
import {
  ADD_CLICKED_LETTER,
  ADD_USED_LETTER,
  CLICK_LETTER_ASYNC
} from '../../constants/actionTypes';

interface Props {
  keyLetter: string;
  clickLetter: any;
  keyboard: any;
}

interface State {}

class Key extends React.Component<Props, State> {
  handleClick = () => {
    if (!this.props.keyboard.usedLetters.includes(this.props.keyLetter)) {
      this.props.clickLetter(this.props.keyLetter);
    }
  };

  letterAlreadyUsed = () => {
    if (this.props.keyboard.usedLetters.includes(this.props.keyLetter)) {
      return true;
    }
  };

  render() {
    return (
      <button
        onClick={() => this.handleClick()}
        style={{
          width: 30,
          background: 'transparent',
          border: 'none',
          outline: 'none'
        }}
      >
        <h1 style={{ display: 'inline', letterSpacing: 4 }}>
          {this.letterAlreadyUsed() ? null : this.props.keyLetter}
        </h1>
      </button>
    );
  }
}

const mapStateToProps = (state: any) => ({
  keyboard: state.keyboard
});

const mapDispatchToProps = (dispatch: any) => ({
  clickLetter: (letter: string) => {
    dispatch({ type: CLICK_LETTER_ASYNC, letter });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Key);
