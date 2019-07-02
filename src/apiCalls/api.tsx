import axios from 'axios';
import { WORDS_ENDPOINT } from '../constants/endpoints';

export function fetchWords() {
  return axios.get(WORDS_ENDPOINT);
}
