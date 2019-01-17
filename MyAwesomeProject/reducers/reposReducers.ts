import { ReposActions, AppActionTypes } from "../actions/reposActions";
import { RRepos } from "../interfaces/reposInterfaces";


const reposInitialState: RRepos = {
  reposList: []
}

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