import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ContextProvider } from "./contexts/ContextProvider";

import App from "./App";
import store from "./app/store";
import "./index.css";

ReactDOM.render(
    <ContextProvider>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </ContextProvider>,
    document.getElementById("root")
);
