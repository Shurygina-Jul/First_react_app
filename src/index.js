import "./index.css";
import * as serviceWorker from "./serviceWorker";
import state, { subcribe } from "./Redux/State";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost, updateNewPostText } from "./Redux/State";
import { BrowserRouter } from "react-router-dom";

let rerenderEntierTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntierTree(state);

subcribe(rerenderEntierTree);

serviceWorker.unregister();
