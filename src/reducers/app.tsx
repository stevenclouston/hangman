import {
  CREATE_WORDS,
  UPDATE_LOADING_STATUS,
  UPDATE_PAGE
} from '../constants/actionTypes';
import { START_PAGE } from '../constants/pages';

const initialState = {
  page: START_PAGE,
  loadingStatus: false
};

const updatePage = (state: any, action: any) => {
  const { page } = action;

  return {
    ...state,
    page: page
  };
};

const updateLoadingStatus = (state: any, action: any) => {
  const { loadingStatus } = action;

  return {
    ...state,
    loadingStatus: loadingStatus
  };
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_PAGE:
      return updatePage(state, action);
    case UPDATE_LOADING_STATUS:
      return updateLoadingStatus(state, action);

    default:
      return state;
  }
};
