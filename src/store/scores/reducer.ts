import { Score } from "utils/types";
import { SET_SCORES, DELETE_SCORE, ADD_SCORE, UPDATE_SCORE } from "./actions";

const initialState: Score[] = [];

export default function scoresReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_SCORES:
      return action.data;
    case DELETE_SCORE:
      return state.filter((score) => score.id !== action.data);
    case ADD_SCORE:
      return [...state, action.data];
    case UPDATE_SCORE:
      return state.map((score) => {
        if (score.id === action.data.id) return action.data;
        return score;
      });
    default:
      return state;
  }
}
