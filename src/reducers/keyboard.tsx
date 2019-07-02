import { ADD_USED_LETTER } from '../constants/actionTypes';

const initialState = {
  usedLetters: [],
  letters: 'abcdefghijklmnopqrstuvwxyz'
};

const addUsedLetters = (state: any, action: any) => {
  const { payload } = action;

  const { letter } = payload;

  return {
    ...state,
    usedLetters: [...state.usedLetters, letter]
  };
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_USED_LETTER:
      return addUsedLetters(state, action);
    default:
      return state;
  }
};
