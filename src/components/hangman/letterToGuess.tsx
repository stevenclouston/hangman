import * as React from 'react';
import { connect } from 'react-redux';
import '../../assets/css/hangman.scss';

interface Props {
  wordLetter: string | null;
}

interface State {}

class LetterToGuess extends React.Component<Props, State> {
  render() {
    const borderWidth: number = 8;

    return (
      <div
        style={{
          position: 'relative',
          width: 6,
          margin: 3,
          borderBottom: 'solid',
          display: 'inline-block',
          height: 15,
          padding: 5
        }}
      >
        <h6 style={{ color: '#233237', position: 'absolute', top: -35 }}>
          {this.props.wordLetter ? this.props.wordLetter : ' '}
        </h6>
      </div>
    );
  }
}

export default LetterToGuess;
