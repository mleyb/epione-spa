import { combineReducers } from "redux";
import { IDailyReportState, dailyReportReducer } from "./dailyReportReducer";
import { History } from "history";
import { RouterState, connectRouter } from 'connected-react-router'

export interface IAppState {
  readonly dailyReportState: IDailyReportState;
  router: RouterState
}

export const rootReducer = (history: History) => combineReducers<IAppState>({
  dailyReportState: dailyReportReducer,
  router: connectRouter(history)
});
