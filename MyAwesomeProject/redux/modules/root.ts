import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'
import { reposReducer, fetchUserEpic } from './repos'

export const rootEpic = combineEpics(
  fetchUserEpic
);

export const rootReducer = combineReducers({
  reposReducer
});