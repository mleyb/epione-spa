import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store";
import { createBrowserHistory } from "history";
import App from "./components/App";

import "./index.css";

const history = createBrowserHistory();
const store = configureStore(history);

const mountTarget = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  mountTarget
);

serviceWorker.unregister();
