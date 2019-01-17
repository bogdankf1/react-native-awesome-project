import { AppActionTypes, fetchReposSuccess, ReposActions, FetchReposAction } from "../actions/reposActions";
import { Repo } from "../interfaces/reposInterfaces";
import axios from 'axios';
import { mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable'

export const fetchUserEpic = (action$: any) => action$.pipe(
  ofType(AppActionTypes.FETCH_REPOS),
  mergeMap(async (action: FetchReposAction) => {
    const response = await axios.get<Repo[]>(`https://api.github.com/users/${action.payload.username}/repos`)
    const formattedReposData = await response.data.map(repo => {
      return {
        id: repo.id,
        html_url: repo.html_url,
        name: repo.name
      }
    })
    return fetchReposSuccess(formattedReposData)
  })
)