import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import { appReducer, userReducer } from "./reducers";
//import { appReducer, userReducer, usersReducer, postReducer, postsReducer } from './reducers';

const reducer = combineReducers({
  app: appReducer,
  user: userReducer,
  // users: usersReducer,
  // post: postReducer,
  // posts: postsReducer,
})

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnchancers(applyMiddleware(thunk)));

