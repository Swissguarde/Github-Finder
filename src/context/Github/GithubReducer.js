const GithubReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "SEARCH_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
        loading: false,
      };
    case "GET_USER":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "GET_REPOS":
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default GithubReducer;