export const selectUserToken = (state) => state.auth.token;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.item;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectErrore = (state) => state.auth.error;
;
