import { ADD_JOB, DELETE_JOB, SET_JOB } from "./constant";

//payload: dữ liệu mang theo đi
export const setJob = (payload: any) => {
  return {
    type: SET_JOB,
    payload: payload,
  };
};

export const addJob = (payload: any) => {
  return {
    type: ADD_JOB,
    payload: payload,
  };
};
export const deleteJob = (payload: number) => {
  return {
    type: DELETE_JOB,
    payload: payload,
  };
};
