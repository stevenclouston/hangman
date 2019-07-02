import { all, takeEvery, put } from 'redux-saga/effects';
import { START_GAME_ASYNC, UPDATE_PAGE } from '../constants/actionTypes';
import { GAME_IN_PROGRESS } from '../constants/pages';

export function* startGameAsync(action: any) {
  yield put({ type: UPDATE_PAGE, page: GAME_IN_PROGRESS });
}

export function* watchStartGameAsync() {
  yield takeEvery(START_GAME_ASYNC, startGameAsync);
}

export default function* rootSaga() {
  yield all([watchStartGameAsync()]);
}
