export const getCurrentWord = (state: any) => state.words.currentWord;

export const getGameContext = (state: any) => state.gameContext;

export const getLivesRemaining = (state: any) =>
  state.gameContext.livesRemaining;

export const getGuessedWord = (state: any) => state.words.displayWord;
