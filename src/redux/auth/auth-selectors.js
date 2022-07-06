export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUserName = state => state.auth.user.name;
export const getUser = state => state.auth.user;

export const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;
