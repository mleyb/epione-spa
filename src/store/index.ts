import { applyMiddleware, combineReducers, compose, createStore, Store } from "redux";
import createSagaMiddleware from 'redux-saga';
import { dailyReportReducer, IDailyReportState } from "../reducers";
import { rootSaga } from "../sagas";

export interface IAppState {
    readonly dailyReportState: IDailyReportState
}

const rootReducer = combineReducers<IAppState>({
    dailyReportState: dailyReportReducer
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore(): Store<IAppState> {
    const store = createStore(
        rootReducer,
        {}, // initial state
        composeEnhancer(
            applyMiddleware(sagaMiddleware)
        )
    );

    sagaMiddleware.run(rootSaga);

    return store;
}

