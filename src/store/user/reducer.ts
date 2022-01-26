import {
  SET_USERS,
  SET_CURRENT_USER,
  SET_CURRENT_USER_SCORES,
} from "./actions";
import { DELETE_SCORE, ADD_SCORE, UPDATE_SCORE } from "store/scores/actions";
import { Score, User } from "utils/types";

interface CurrentUser extends User {
  scores: Score[];
}

interface UserState {
  users: User[];
  currentUser: CurrentUser;
}

const initialState: UserState = {
  users: [],
  currentUser: {
    id: NaN,
    fullName: "",
    scores: [],
  },
};

export default function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.data,
      };
    case SET_CURRENT_USER:
    case SET_CURRENT_USER_SCORES:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          ...action.data,
        },
      };
    case DELETE_SCORE:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          scores: state.currentUser.scores.filter(
            (score) => score.id !== action.data
          ),
        },
      };
    case ADD_SCORE:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          scores: [...state.currentUser.scores, action.data],
        },
      };
    case UPDATE_SCORE:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          scores: state.currentUser.scores.map((score) => {
            if (score.id === action.data.id) return action.data;
            return score;
          }),
        },
      };
    default:
      return state;
  }
}
