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

export default function configureStore(): Store<IAppState> {
    const store = createStore(
        rootReducer,
        {}, // initial state
        compose(
            applyMiddleware(sagaMiddleware),
            (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
        )
    );

    sagaMiddleware.run(rootSaga);
    
    return store;
}

