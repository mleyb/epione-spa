import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import { watchGetDailyReports } from "./getDailyReportsSaga";

export const rootSaga = function* root() {
  yield all([watchGetDailyReports()]);
};
