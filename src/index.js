import "./index.css";
import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/redux-store";
import StoreContext from "./storeContext";
import { Provider } from "./storeContext";

let rerenderEntierTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntierTree();

store.subscribe(() => {
  rerenderEntierTree();
});

serviceWorker.unregister();
