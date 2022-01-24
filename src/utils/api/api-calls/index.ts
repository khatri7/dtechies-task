import Axios, { AxiosRequestConfig } from "axios";
import { UserScores } from "utils/types";

const axios = Axios.create({
  baseURL: "http://localhost:3001/",
});

export const getScores = async () => {
  const { data } = await axios.get<UserScores[]>("/scores");
  return data;
};
