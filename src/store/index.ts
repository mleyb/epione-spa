import {
  applyMiddleware,
  createStore,
  Store
} from "redux";
import createSagaMiddleware from "redux-saga";
import { IAppState, rootReducer } from "../reducers";
import { rootSaga } from "../sagas";
import { composeWithDevTools } from "redux-devtools-extension";
import { History } from 'history';
import { routerMiddleware } from "react-router-redux";

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(history: History, preloadedState?: any): Store<IAppState> {
  const store = createStore(
    rootReducer(history),
    preloadedState,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware, routerMiddleware(history))
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
