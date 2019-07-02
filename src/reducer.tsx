import app from './reducers/app';
import words from './reducers/words';
import { combineReducers } from 'redux';
import { RESET_GAME } from './constants/actionTypes';

const appReducer = combineReducers({
  app,
  words
});

const rootReducer = (state: any, action: any) => {
  if (action.type === RESET_GAME) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
