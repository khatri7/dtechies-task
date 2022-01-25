import { AppDispatch } from "store";
import { deleteScore, getScores } from "utils/api/api-calls";

export const SET_SCORES = "SET_SCORES";
export const DELETE_SCORE = "DELETE_SCORE";

export const setScores = () => async (dispatch: AppDispatch) => {
  try {
    const scores = await getScores();
    dispatch({ type: SET_SCORES, data: scores });
  } catch (err) {
    console.error(err);
  }
};

export const delScore = (scoreId: number) => async (dispatch: AppDispatch) => {
  try {
    const result = await deleteScore(scoreId);
    if (!result) throw new Error("Error deleting record");
    dispatch({ type: DELETE_SCORE, data: scoreId });
  } catch (err) {
    console.error(err);
  }
};
