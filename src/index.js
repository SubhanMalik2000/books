import "./index.css";
import React from "react";
import ReactDom from "react-dom/client";
import store from "./store";
import { Provider } from "react-redux";
import App from "./App";

const ele = document.getElementById("root");

const root = ReactDom.createRoot(ele);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
