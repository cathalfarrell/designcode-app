import React from "react";
import { createStore } from "redux";
import { Provider, ReactReduxContext } from "react-redux";
import HomeScreen from "./screens/HomeScreen";

const initialState = {
  action: "openMenu",
};

const reducer = (state = initialState, action) => {
  if (action.type == "CLOSE_MENU") {
    return { action: "closeMenu" };
  }
  return state;
};

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <HomeScreen />
  </Provider>
);

export default App;
