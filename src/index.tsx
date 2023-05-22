import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./sass/common.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ConfigProvider,  } from "antd";
import { theme } from "./theme/theme";
import './sass/common.scss';

import { Provider } from "react-redux";
import store from "./store";
import exportedObject from "./store";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider theme={theme}>
        <Provider store={exportedObject?.store}>
          <App />
        </Provider>
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
