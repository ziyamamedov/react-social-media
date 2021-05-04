import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { reducer, RootState } from "./reducers";

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

//Making a store for next-redux-wrapper
const makeStore: MakeStore<RootState> = (context: Context) => store;

// export an assembled wrapper
export const wrapper = createWrapper<RootState>(makeStore, {
  debug: true,
});
