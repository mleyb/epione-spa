import { Reducer } from "redux";
import { ActionTypes } from "../actions/actionTypes";
import { DailyReportActions } from "../actions/actions";

export interface IDailyReport {
    userId: string,
    timestamp: number,
    level: number,
    notes: string
}

export interface IDailyReportState {
    readonly dailyReports: IDailyReport[]
}

const initialState: IDailyReportState = {
     dailyReports: []
}

export const dailyReportReducer: Reducer<IDailyReportState, DailyReportActions> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ActionTypes.GET_DAILY_REPORTS:
            return {
                ...state
                // TODO
            };

        default:
            return state;
    }
};