import reducers from "./reducers";
import thunk from "redux-thunk";
import INITIAL_STATE from "./initialState";
import { createStore, applyMiddleware, compose } from "redux";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  reducers,
  INITIAL_STATE,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
