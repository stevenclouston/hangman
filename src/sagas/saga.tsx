import { all, takeEvery, put, call, select } from 'redux-saga/effects';
import {
  START_GAME_ASYNC,
  UPDATE_PAGE,
  UPDATE_LOADING_STATUS,
  CREATE_WORDS,
  UPDATE_CURRENT_WORD,
  CREATE_DISPLAY_WORD
} from '../constants/actionTypes';
import { GAME_IN_PROGRESS } from '../constants/pages';
import { fetchWords } from '../apiCalls/api';
import WordSelector from '../state_selectors/WordSelector';

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

export default function* rootSaga() {
  yield all([watchStartGameAsync()]);
}
