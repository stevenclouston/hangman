import * as _ from 'lodash';

const WordSelector = (state: any) => {
  const wordObj = state.words;

  if (_.isEmpty(wordObj)) {
    return '';
  }

  const words = wordObj.words;

  const numberOfWords = words.length;

  const randomPosition = Math.floor(Math.random() * (numberOfWords - 1));

  return words[randomPosition];
};

export default WordSelector;
