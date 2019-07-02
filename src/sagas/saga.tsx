import { all, takeEvery, put, call, select, delay } from 'redux-saga/effects';
import {
  START_GAME_ASYNC,
  UPDATE_PAGE,
  UPDATE_LOADING_STATUS,
  CREATE_WORDS,
  UPDATE_CURRENT_WORD,
  CREATE_DISPLAY_WORD,
  CLICK_LETTER_ASYNC,
  ADD_USED_LETTER,
  UPDATE_DISPLAY_WORD,
  UPDATE_GAME_STATUS,
  UPDATE_LIVES_REMAINING
} from '../constants/actionTypes';
import { GAME_IN_PROGRESS, GAME_FINISHED } from '../constants/pages';
import { fetchWords } from '../apiCalls/api';
import WordSelector from '../state_selectors/WordSelector';
import {
  guessedEveryLetter,
  incorrectGuess,
  noLivesRemaining
} from './sagaHelpers';
import { WINNER, LOSER } from '../constants/gameStatus';

export function* clickLetterAsync(action: any) {
  yield put({ type: ADD_USED_LETTER, payload: action });

  yield put({ type: UPDATE_DISPLAY_WORD, payload: action });

  if (yield guessedEveryLetter()) {
    yield put({ type: UPDATE_GAME_STATUS, gameStatus: WINNER });

    yield delay(100);

    yield put({ type: UPDATE_PAGE, page: GAME_FINISHED });
  }

  if (yield incorrectGuess(action)) {
    yield put({ type: UPDATE_LIVES_REMAINING, change: -1 });
  }

  if (yield noLivesRemaining()) {
    yield put({ type: UPDATE_GAME_STATUS, gameStatus: LOSER });

    yield delay(100);

    yield put({ type: UPDATE_PAGE, page: GAME_FINISHED });
  }
}

export function* startGameAsync(action: any) {
  yield put({ type: UPDATE_PAGE, page: GAME_IN_PROGRESS });

  yield put({ type: UPDATE_LOADING_STATUS, loadingStatus: true });

  const payload = yield call(fetchWords);

  yield put({ type: UPDATE_LOADING_STATUS, loadingStatus: false });

  yield put({ type: CREATE_WORDS, payload });

  const currentWord = yield select(WordSelector);

  yield put({ type: UPDATE_CURRENT_WORD, currentWord });

  yield put({ type: CREATE_DISPLAY_WORD, currentWord });
}

export function* watchStartGameAsync() {
  yield takeEvery(START_GAME_ASYNC, startGameAsync);
}

export function* watchClickLetterAsync() {
  yield takeEvery(CLICK_LETTER_ASYNC, clickLetterAsync);
}

export default function* rootSaga() {
  yield all([watchStartGameAsync(), watchClickLetterAsync()]);
}
