import Axios, { AxiosRequestConfig } from "axios";
import { User, Score } from "utils/types";

const axios = Axios.create({
  baseURL: "http://localhost:3001/",
});

export const getScores = async (config?: AxiosRequestConfig) => {
  const { data } = await axios.get<Score[]>("/scores", config || {});
  return data;
};

export const getCurrentUser = async () => {
  const { data } = await axios.get<User>("/me");
  return data;
};

export const getScoresByUserId = async (userId: number) => {
  return await getScores({
    params: {
      userId: `${userId}`,
    },
  });
};

export const deleteScore = async (scoreId: number) => {
  const { statusText } = await axios.delete(`/scores/${scoreId}`);
  return statusText === "OK";
};
