import { combineReducers } from "redux";
import { IDailyReportState, dailyReportReducer } from "./dailyReportReducer";

export interface IAppState {
    readonly dailyReportState: IDailyReportState
}

export const rootReducer = combineReducers<IAppState>({
    dailyReportState: dailyReportReducer
});
