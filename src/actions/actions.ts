import { Action } from "redux";
import { ActionTypes } from "./actionTypes";

export interface IGetDailyReportsAction
  extends Action<ActionTypes.GET_DAILY_REPORTS> {
  userId: string;
}

export type DailyReportActions = IGetDailyReportsAction;
