import { Action } from 'rxjs/internal/scheduler/Action';

var initialReposState: any[] = [];
export function _repos(state = initialReposState, action: any) {
  switch (action.type) {
    case 'GET_REPOS':
      return action.repos;
    case 'GET_STATUS':
      let index = state.findIndex(
        (item: any) => item.name === action.repo.name,
      );
      if(!state[index]){
        return state;
      }
      let [...newState] = state;
      newState[index].status = action.repo.status;
      // console.log("new",newState[0].status)
      return newState;
    default:
      return state;
  }
}

export function _selected(state = initialReposState, action: any) {
  switch (action.typs) {
    case 'GET_SELECT':
      return action.repos;
    case 'ADD_SELECT':
      let [...newState] = state;
      newState.push(action.repo);
      return newState;
    default:
      return state;
  }
}
