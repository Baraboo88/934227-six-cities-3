export const getUserData = (state) => {
  if (state.user) {
    return state.user.userData;
  }
  return null;
};
export const getAuthStatus = (state) => state.user.authorizationStatus;