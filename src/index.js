import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import restaurantsReducer from "./features/restaurant/restaurantsSlice";

const store = configureStore({
  reducer:{
    restaurantsReducer
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById("root")
);
