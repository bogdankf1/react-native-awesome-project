import { filter, mergeMap } from 'rxjs/operators';
import { APP } from '../../constants/ActionTypes';
import axios from 'axios';

export const fetchUserEpic = (action$: any) => action$.pipe(
  filter((action: any) => action.type === APP.FETCH_REPOS.REQUEST),
  mergeMap((action: any) =>
    axios.get(`https://api.github.com/users/${action.payload}/repos`)
      .then(res => {
        return {
          type: APP.FETCH_REPOS.SUCCESS,
          payload: res.data
        }
      })
  )
)

const reposInitialState = {
  reposList: []
}
export const reposReducer = (state = reposInitialState, action: any) => {
  switch (action.type) {
    case APP.FETCH_REPOS.SUCCESS:
      return { ...state, reposList: action.payload };
    case APP.FETCH_REPOS.FAIL:
      return { ...state, reposList: reposInitialState };
    default:
      return state;
  }
};
