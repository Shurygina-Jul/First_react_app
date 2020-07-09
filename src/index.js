import "./index.css";
import * as serviceWorker from "./serviceWorker";
import state from "./Redux/State";

import { rerenderEntierTree } from "./Render";

rerenderEntierTree(state);

serviceWorker.unregister();
