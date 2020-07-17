import "./index.css";
import * as serviceWorker from "./serviceWorker";
import store from "./Redux/State";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

let rerenderEntierTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} store={store} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntierTree(store.getState());

store.subcribe(rerenderEntierTree);

serviceWorker.unregister();
