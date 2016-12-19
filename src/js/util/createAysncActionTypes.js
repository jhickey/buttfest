import {asyncSuffixes} from '../constants';

export default function createAsyncActionTypes(key) {
  return asyncSuffixes.map(prefix => `${key}_${prefix}`)
};
