import { ActionCreator } from "redux";
import { IGetDailyReportsAction } from "./actions";
import { ActionTypes } from "./actionTypes";

export const getDailyReportsActionCreator: ActionCreator<
  IGetDailyReportsAction
> = (userId: string) => {
  const action: IGetDailyReportsAction = {
    type: ActionTypes.GET_DAILY_REPORTS,
    userId: userId
  };
  return action;
};
