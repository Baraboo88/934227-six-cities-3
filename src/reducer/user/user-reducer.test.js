import {userData} from "../../utils/tests-utils";
import {Authorization, userReducer, Action} from "./user-reducer";

it(`Reducer setAuthStatus`, () => {
  expect(userReducer({
    authorizationStatus: Authorization.NO_AUTH
  }, {type: Action.AUTH_USER, payload: {authStatus: Authorization.AUTH, userData}})).toEqual({authorizationStatus: Authorization.AUTH, userData
  });
});