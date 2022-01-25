import { AppDispatch, RootState } from "store";
import { getCurrentUser, getScoresByUserId } from "utils/api/api-calls";

export const SET_USERS = "SET_USERS";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const SET_CURRENT_USER_SCORES = "SET_CURRENT_USER_SCORES";

export const setUser = () => async (dispatch: AppDispatch) => {
  try {
    const user = await getCurrentUser();
    dispatch({ type: SET_CURRENT_USER, data: user });
  } catch (err) {
    console.error(err);
  }
};

export const setCurrentUserScores =
  () => async (dispatch: AppDispatch, getState: () => RootState) => {
    const { user } = getState();
    try {
      const currentUserId = user.currentUser.id;
      if (!currentUserId) throw new Error("cannot find current user");
      const currentUserScores = await getScoresByUserId(currentUserId);
      dispatch({
        type: SET_CURRENT_USER_SCORES,
        data: { scores: currentUserScores },
      });
    } catch (err) {
      console.error(err);
    }
  };
