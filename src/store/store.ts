import { combineReducers, createStore, Store } from "redux";

export interface IAppState {    
}

const rootReducer = combineReducers<IAppState>({
});

export default function configureStore(): Store<IAppState> {
    const store = createStore(rootReducer);
    return store;
}