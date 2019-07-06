import { combineReducers, createStore, Store } from "redux";

import { IDailyReportState, dailyReportReducer } from "../reducers/dailyReportReducer";

export interface IAppState {
    readonly dailyReportState: IDailyReportState
}

const rootReducer = combineReducers<IAppState>({
    dailyReportState: dailyReportReducer
});

export default function configureStore(): Store<IAppState> {
    const store = createStore(rootReducer);
    return store;
}