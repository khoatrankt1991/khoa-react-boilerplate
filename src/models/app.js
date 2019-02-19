const initState = {
  loading: true,
  submitting: false,
};

export default {
  state: initState, // initial state
  reducers: {
    // handle state changes with pure functions
    loading(state, isLoading) {
      return {
        ...state,
        loading: isLoading
      }
    }
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async loadingAsync(payload, rootState) {
      dispatch.app.loading(true);
      await new Promise(resolve => setTimeout(resolve, 1000))
      dispatch.app.loading(false);
    }
  })
}