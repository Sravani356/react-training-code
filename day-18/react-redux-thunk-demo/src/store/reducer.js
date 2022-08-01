



export function reducer(state = initialState, action) {
    //initial state
const initialState = {
    items: [],
    loading: false,
    error: null,
  };
    switch (action.type) {
      case LOAD_ITEMS_REQUEST:
        return { ...state, loading: true };
      case LOAD_ITEMS_SUCCESS:
        return { ...state, loading: false, items: action.payload };
      case LOAD_ITEMS_FAILURE:
        return { ...state, loading: false, error: action.payload.message };
      case ADD_ITEM_REQUEST:
        return { ...state };
      case ADD_ITEM_SUCCESS:
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      case ADD_ITEM_FAILURE:
        return { ...state, loading: false, error: action.payload.message };
      case UPDATE_ITEM_REQUEST:
        return { ...state };
      case UPDATE_ITEM_SUCCESS:
        return {
          ...state,
          items: state.items.map((item) => {
            return item.id === action.payload.id
              ? Object.assign({}, item, action.payload)
              : item;
          }),
        };
      case UPDATE_ITEM_FAILURE:
        return { ...state, error: action.payload.message };
      case DELETE_ITEM_REQUEST:
        return { ...state };
      case DELETE_ITEM_SUCCESS:
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload.id),
        };
      case DELETE_ITEM_FAILURE:
        return { ...state, error: action.payload.message };
      default:
        return state;
    }
  }