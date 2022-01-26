import { AppDispatch } from "store";
import {
  createScore,
  deleteScore,
  getScores,
  updateScoreReq,
} from "utils/api/api-calls";
import { Score } from "utils/types";

export const SET_SCORES = "SET_SCORES";
export const DELETE_SCORE = "DELETE_SCORE";
export const ADD_SCORE = "ADD_SCORE";
export const UPDATE_SCORE = "UPDATE_SCORE";

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

export const addScore =
  (reqBody: Omit<Score, "id">, onSuccess: Function = () => {}) =>
  async (dispatch: AppDispatch) => {
    try {
      const score = await createScore(reqBody);
      dispatch({ type: ADD_SCORE, data: score });
      onSuccess();
    } catch (err) {
      console.error(err);
    }
  };

export const updateScore =
  (scoreId: number, updatedScore: Score, onSuccess: Function = () => {}) =>
  async (dispatch: AppDispatch) => {
    try {
      const score = await updateScoreReq(scoreId, updatedScore);
      dispatch({ type: UPDATE_SCORE, data: score });
      onSuccess();
    } catch (err) {
      console.error(err);
    }
  };
