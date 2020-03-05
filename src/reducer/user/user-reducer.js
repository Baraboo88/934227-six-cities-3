import {userAdapter} from "../../utils/utils";

export const Action = {AUTH_USER: `auth-user`};

export const Authorization = {
  NO_AUTH: `no-auth`,
  AUTH: `auth`
};

export const UserOperation = {
  authUser() {
    return (dispatch, state, api) => {
      api
        .get(`/login`)
        .then((response) => {
          dispatch(UserActionCreator.setAuthStatus(Authorization.AUTH, userAdapter(response.data)));
        })
        .catch(() =>{});
    };
  },
  loginUser(userData) {
    return (dispatch, state, api) => {
      api
        .post(`/login`, userData)
        .then((response) => {
          dispatch(UserActionCreator.setAuthStatus(Authorization.AUTH, userAdapter(response.data)));
        })
        .catch(() =>{});
    };
  }
};

export const UserActionCreator = {
  setAuthStatus(authStatus, userData) {
    return {
      type: Action.AUTH_USER,
      payload: {authStatus, userData}
    };
  },
};

const initialState = {
  authorizationStatus: Authorization.NO_AUTH
};

export const userReducer = (state = initialState, action) => {
  if (action.type === Action.AUTH_USER) {
    return Object.assign({}, state, {
      authorizationStatus: action.payload.authStatus,
      userData: action.payload.userData
    });
  }
  return state;
};
