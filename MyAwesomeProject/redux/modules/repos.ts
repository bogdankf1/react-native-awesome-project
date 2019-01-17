import { filter, mergeMap, concat } from 'rxjs/operators';
import axios from 'axios';

const fetchReposSuccess = (repos: Repo[]) : FetchReposSuccessAction =>  {
  return {
    type: AppActionTypes.FETCH_REPOS_SUCCESS,
    payload: {
      repos
    }
  }
}
export const fetchUserEpic = (action$: any) => 
  action$.ofType(AppActionTypes.FETCH_REPOS)
  .mergeMap(async (action: any) => {
    const response = await axios.get<Repo[]>(`https://api.github.com/users/${action.payload}/repos`)
    // response.data
    return fetchReposSuccess(response.data)
    // return [{}, {}]
  })
  // .mergeMap((actions: any[]) => {
  //   const seq =  actions.map((a) => of(a))
  //   return concat(...seq)
  // })
// .pipe(
//   filter((action: any) => action.type === APP.FETCH_REPOS.REQUEST),
//   mergeMap(async (action: any) => {
      // const response = await axios.get<ReposApiResponse>(`https://api.github.com/users/${action.payload}/repos`)
      // // response.data
      // // return fetchReposSuccess(response.data)
      // return [{}, {}]
//     }),
//     mergeMap((objects) => {
//       return concat(
//         of({type: 'ololo'}),
//         of({type: 'trololo'})
//       )
//     })
// )

interface Repo {
  url: string,
  name: string,
  id: number
}
interface RRepos {
  reposList: Repo[]
}
const reposInitialState: RRepos = {
  reposList: []
}


// const returnRepo  = (url: string): Repo => {
//     return {
//       id: 5, 
//       name: 'ololo'
//     }
// }
// reposInitialState.reposList.map(r => {
  // if(r.url) {
    // printUrl(r.url)
  // }
// })

enum AppActionTypes {
    FETCH_REPOS = 'FETCH_REPOS',
    FETCH_REPOS_SUCCESS = 'FETCH_REPOS_SUCCESS',
    FETCH_REPOS_FAIL = 'FETCH_REPOS_FAIL'
}

interface FetchReposAction {
  type: AppActionTypes.FETCH_REPOS
}

interface FetchReposSuccessAction {
  type: AppActionTypes.FETCH_REPOS_SUCCESS,
  payload: {
    repos: Repo[]
  }
}
interface FetchReposFailAction {
  type: AppActionTypes.FETCH_REPOS_FAIL,
}

type ReposActions = 
  FetchReposAction |
  FetchReposSuccessAction | 
  FetchReposFailAction

export const reposReducer = (state = reposInitialState, action: ReposActions): RRepos => {
  switch (action.type) {
    case AppActionTypes.FETCH_REPOS_SUCCESS:
      return { ...state, reposList: action.payload.repos };
    case AppActionTypes.FETCH_REPOS_FAIL:
      return { ...state, reposList: reposInitialState.reposList };
    default:
      return state;
  }
};
