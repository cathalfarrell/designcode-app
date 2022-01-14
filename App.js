import React from "react";
import { createStore } from "redux";
import { Provider, ReactReduxContext } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import AppNavigator from "./navigator/AppNavigator";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

/* DESIGN CODE CLIENT
const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/ldcl3ayg0mhx`,
  credentials: "same-origin",
  headers: {
    Authorization: `Bearer 93f3808c25c1f5bdb95476ca8576c6eaa12b5587efb956efb242ceead7cb3840`,
  },
});
*/
//MY CLIENT
const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/w1cq546wwgwt`,
  credentials: "same-origin",
  headers: {
    Authorization: `Bearer oK0WP8J67e3p9-bd90AxBVIvZ3BYrXBMB0gXbe-vWxA`,
  },
});

const initialState = {
  action: "",
  name: "",
};

const reducer = (state = initialState, action) => {
  /*
    if (action.type == "CLOSE_MENU") {
      return { action: "closeMenu" };
    } else if (action.type == "OPEN_MENU") {
      return { action: "openMenu" };
    }
    return state;
  */

  switch (action.type) {
    case "OPEN_MENU":
      return { action: "openMenu" };
    case "CLOSE_MENU":
      return { action: "closeMenu" };
    case "UPDATE_NAME":
      return { name: action.name };
    default:
      return state;
  }
};

const store = createStore(reducer);

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  </ApolloProvider>
);

export default App;
