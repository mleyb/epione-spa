import { applyMiddleware, combineReducers, compose, createStore, Store } from "redux";
import createSagaMiddleware from 'redux-saga';
import { IAppState, rootReducer } from "../reducers";
import { rootSaga } from "../sagas";
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(preloadedState?: any): Store<IAppState> {
    const store = createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(
            applyMiddleware(
                sagaMiddleware
            )
        )
    );

    sagaMiddleware.run(rootSaga);

    return store;
}

