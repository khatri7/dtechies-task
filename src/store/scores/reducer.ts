import { Score } from "utils/types";
import { SET_SCORES, DELETE_SCORE } from "./actions";

const initialState: Score[] = [];

export default function scoresReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_SCORES:
      return action.data;
    case DELETE_SCORE:
      return state.filter((score) => score.id !== action.data);
    default:
      return state;
  }
}
