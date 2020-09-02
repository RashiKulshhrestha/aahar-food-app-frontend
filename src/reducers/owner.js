import { GET_OWNERS, OWNER_ERROR, GET_OWNER} from "../actions/types";

const initialState = {
    owners: [],
    owner: null,
    loading: true,
    error: {},
  };

  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_OWNERS:
        return {
          ...state,
          owners: payload,
          loading: false,
        };
        case GET_OWNER:
      return {
        ...state,
        owner: payload,
        loading: false,
      };
        case OWNER_ERROR:
        return {
            ...state,
            error: payload,
            loading: false,
        };
        default:
      return state;
  }
}