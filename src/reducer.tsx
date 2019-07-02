import app from './reducers/app';
import words from './reducers/words';
import keyboard from './reducers/keyboard';
import gameContext from './reducers/gameContext';
import { combineReducers } from 'redux';
import { RESET_GAME } from './constants/actionTypes';

const appReducer = combineReducers({
  app,
  words,
  keyboard,
  gameContext
});

const rootReducer = (state: any, action: any) => {
  if (action.type === RESET_GAME) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
