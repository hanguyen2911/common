import react from "react";
import { ADD_JOB, DELETE_JOB, SET_JOB } from "./constant";

//1. init
export const initState = { job: "", jobs: [] };
//reducer
export const reducer = (state: any, action: any) => {
  let newState;
  switch (action.type) {
    case SET_JOB:
      return (newState = { ...state, job: action.payload });

    case ADD_JOB:
      return (newState = { ...state, jobs: [...state.jobs, action.payload] });

    case DELETE_JOB:
      const newjobs = [...state.jobs];
      newjobs?.splice(action.payload, 1);
      return (newState = { ...state, jobs: newjobs });

    default:
      throw new Error("Invalid action");
  }

  console.log("state", newState);
  return newState;
};
