import {
  CREATE_DISPLAY_WORD,
  CREATE_WORDS,
  UPDATE_CURRENT_WORD,
  UPDATE_DISPLAY_WORD
} from '../constants/actionTypes';

const initialState = {
  words: [],
  currentWord: '',
  displayWord: []
};

const createWords = (state: any, action: any) => {
  const { payload } = action;
  const { data } = payload;

  let words: string[] = data.replace(/(\b(\w{1,3})\b(\s|$))/g, '').split('\n');

  words = words.filter(Boolean);

  return {
    ...state,
    words: [...words]
  };
};

const updateCurrentWord = (state: any, action: any) => {
  const { currentWord } = action;

  return {
    ...state,
    currentWord: currentWord
  };
};
const createDisplayWord = (state: any, action: any) => {
  debugger;
  const { currentWord } = action;

  const displayWord = new Array(currentWord.length - 1).fill(null);

  return {
    ...state,
    displayWord: displayWord
  };
};

const updateDisplayWord = (state: any, action: any) => {
  const { payload } = action;

  const { letter } = payload;

  const positions = charPos(state.currentWord, letter);

  let newDisplayWord = [...state.displayWord];

  for (const i of positions) {
    newDisplayWord[i] = letter;
  }

  return {
    ...state,
    displayWord: newDisplayWord
  };
};

const charPos = (str: any, char: string) => {
  const indices = [];
  for (const i in str) {
    if (str[i] === char) indices.push(parseInt(i));
  }
  return indices;
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case CREATE_WORDS:
      return createWords(state, action);
    case UPDATE_CURRENT_WORD:
      return updateCurrentWord(state, action);
    case UPDATE_DISPLAY_WORD:
      return updateDisplayWord(state, action);
    case CREATE_DISPLAY_WORD:
      return createDisplayWord(state, action);
    default:
      return state;
  }
};
