export function getRepos(repos: any[]) {
  return {
    type: 'GET_REPOS',
    repos,
  };
}

export function getStatus(repo: any) {
  return {
    type: 'GET_STATUS',
    repo,
  };
}

export function addSelect(repo: string) {
  return {
    type: 'GET_SELECT',
    repo,
  };
}
