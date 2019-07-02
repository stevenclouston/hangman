import {
  UPDATE_LIVES_REMAINING,
  UPDATE_GAME_STATUS
} from '../constants/actionTypes';
import { TOTAL_LIVES } from '../constants/general';
import { IN_PROGRESS } from '../constants/gameStatus';

const initialGameContext = {
  gameStatus: IN_PROGRESS,
  livesRemaining: TOTAL_LIVES
};

const updateGameStatus = (state: any, action: any) => {
  const { gameStatus } = action;

  return {
    ...state,
    gameStatus: gameStatus
  };
};

const updateLivesRemaining = (state: any, action: any) => {
  const { change } = action;

  return {
    ...state,
    livesRemaining: state.livesRemaining + parseInt(change)
  };
};

export default (state = initialGameContext, action: any) => {
  switch (action.type) {
    case UPDATE_LIVES_REMAINING:
      return updateLivesRemaining(state, action);
    case UPDATE_GAME_STATUS:
      return updateGameStatus(state, action);
    default:
      return state;
  }
};
