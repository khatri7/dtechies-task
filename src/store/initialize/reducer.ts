import { INIT_APP, FINISH_INIT_APP } from "./actions";

const initialState = {
  isInitializing: true,
  appInitialized: false,
};

export default function initializeReducer(state = initialState, action: any) {
  switch (action.type) {
    case INIT_APP:
      return {
        ...state,
        isInitializing: true,
      };
    case FINISH_INIT_APP:
      return {
        ...state,
        isInitializing: false,
        appInitialized: true,
      };
    default:
      return state;
  }
}
