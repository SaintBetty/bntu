import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App/App";
import * as serviceWorker from "./serviceWorker";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./index.css";
import { Provider } from "react-redux";
import { store } from './store/redux'

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
