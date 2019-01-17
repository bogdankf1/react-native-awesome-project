import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'
import { reposReducer } from '../../reducers/reposReducers'
import { fetchUserEpic } from '../../epics/reposEpics'

export const rootEpic = combineEpics(
  fetchUserEpic
);

export const rootReducer = combineReducers({
  reposReducer
});