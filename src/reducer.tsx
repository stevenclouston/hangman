import app from './reducers/app';
import { combineReducers } from 'redux';
import { RESET_GAME } from './constants/actionTypes';

const appReducer = combineReducers({
  app
});

const rootReducer = (state: any, action: any) => {
  if (action.type === RESET_GAME) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
