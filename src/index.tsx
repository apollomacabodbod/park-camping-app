


import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store , persistor } from './redux/store';
import App from "./App";
import './index.css';
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

        <Router>
          <App />
        </Router>

      </PersistGate>
    </Provider>
  </React.StrictMode>
);

