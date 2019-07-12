import { Reducer } from "redux";
import { DailyReportActions } from "../actions/actions";
import { ActionTypes } from "../actions/actionTypes";

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
