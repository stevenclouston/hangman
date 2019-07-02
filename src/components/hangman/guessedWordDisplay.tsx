import * as React from 'react';
import { connect } from 'react-redux';
import '../../assets/css/hangman.scss';
import LetterToGuess from './letterToGuess';

interface Props {
  displayWord: any;
}

interface State {}

class GuessedWordDisplay extends React.Component<Props, State> {
  render() {
    const borderWidth: number = 8;

    const displayWord = this.props.displayWord;

    return (
      <div>
        {displayWord.map((x: string | null) => (
          <LetterToGuess wordLetter={x} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  word: state.words.currentWord,
  displayWord: state.words.displayWord
});

export default connect(
  mapStateToProps,
  null
)(GuessedWordDisplay);
