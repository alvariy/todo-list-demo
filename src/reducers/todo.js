const initialState = {
  todos: [],
  isOnlyActive: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, payload]
      };

    case "REFRESH_TODOS":
      return {
        ...state,
        todos: payload
      };

    case "SET_FILTER":
      return {
        ...state,
        isOnlyActive: payload
      };
    case "UPDATE_TODO":
      return{
        ...state,
        todos: [...state.todos, payload]
      };
    case "GET_ACTIVE":
      return{
        ...state,
        todos: [...state.todos, payload]
      };
      case "GET_COMPLETED":
      return{
        ...state,
        todos: [...state.todos, payload]
      };

    default:
      return state
  }
}
