export const FETCH_USER_LOGIN_SUCCESS = "FETCH_USER_LOGIN_SUCCESS";

export const doLogin = (user) => {
  return {
    type: FETCH_USER_LOGIN_SUCCESS,
    payload: user,
  };
};
