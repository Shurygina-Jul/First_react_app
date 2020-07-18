import "./index.css";
import * as serviceWorker from "./serviceWorker";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/redux-store";

let rerenderEntierTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntierTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntierTree(state);
});

serviceWorker.unregister();
