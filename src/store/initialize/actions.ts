import { AppDispatch } from "store";
import { setScores } from "store/scores/actions";
import { setUser, setCurrentUserScores } from "store/user/actions";

export const INIT_APP = "INIT_APP";
export const FINISH_INIT_APP = "FINISH_INIT_APP";

const seeLoading = async () => {
  return new Promise((resolve) => setTimeout(() => resolve(true), 1500));
};

export const initializeApp = () => async (dispatch: AppDispatch) => {
  dispatch({ type: INIT_APP });
  try {
    await Promise.all([dispatch(setUser()), dispatch(setScores())]);
    await dispatch(setCurrentUserScores());
    await seeLoading();
    dispatch({ type: FINISH_INIT_APP });
  } catch (error) {
    dispatch({ type: FINISH_INIT_APP });
  }
};
