const createConst = (action: String) => {
  return {
    REQUEST: `${action}.REQUEST`,
    FAIL: `${action}.FAIL`,
    SUCCESS: `${action}.SUCCESS`
  }
}

export const APP = {
  FETCH_REPOS: createConst('APP.FETCH_REPOS')
}