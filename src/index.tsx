import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Store } from "redux";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import configureStore, { IAppState } from "./store";

import "./index.css";

interface IProps {
    store: Store<IAppState>;
}

const store = configureStore();

const Root: React.SFC<IProps> = props => {
    return (
        <Provider store={props.store}>
            <App />
        </Provider>
    )
}

ReactDOM.render(<Root store={store} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
