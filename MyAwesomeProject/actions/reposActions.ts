import { Repo } from "../interfaces/reposInterfaces";

export enum AppActionTypes {
  FETCH_REPOS = 'FETCH_REPOS',
  FETCH_REPOS_SUCCESS = 'FETCH_REPOS_SUCCESS',
  FETCH_REPOS_FAIL = 'FETCH_REPOS_FAIL'
}

export interface FetchReposAction {
  type: AppActionTypes.FETCH_REPOS,
  payload: {
    username: string
  }
}

export interface FetchReposSuccessAction {
  type: AppActionTypes.FETCH_REPOS_SUCCESS,
  payload: {
    repos: Repo[]
  }
}

export interface FetchReposFailAction {
  type: AppActionTypes.FETCH_REPOS_FAIL,
  payload: {
    error: string
  }
}

export type ReposActions = 
  FetchReposAction |
  FetchReposSuccessAction | 
  FetchReposFailAction

export const fetchReposSuccess = (repos: Repo[]) : FetchReposSuccessAction =>  {
  return {
    type: AppActionTypes.FETCH_REPOS_SUCCESS,
    payload: {
      repos
    }
  }
}