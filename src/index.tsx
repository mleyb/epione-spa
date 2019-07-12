import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Store } from "redux";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { IAppState } from "./reducers";
import configureStore from "./store";
import { createBrowserHistory } from "history";
import { ConnectedRouter } from "react-router-redux";

import "./index.css";

const history = createBrowserHistory();
const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
