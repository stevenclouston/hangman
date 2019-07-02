import { getCurrentWord, getGuessedWord, getLivesRemaining } from './selectors';
import { select } from 'redux-saga/effects';

export function* incorrectGuess(action: any) {
  const currentWord = yield select(getCurrentWord);

  const { letter } = action;

  if (currentWord.includes(letter)) {
    return false;
  }

  return true;
}

export function* noLivesRemaining() {
  const remaining = yield select(getLivesRemaining);

  if (remaining <= 0) {
    return true;
  }

  return false;
}

export function* guessedEveryLetter() {
  const guessedWord = yield select(getGuessedWord);

  if (guessedWord.includes(null)) {
    return false;
  }

  return true;
}
