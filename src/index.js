import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./app/store";
import { AuthContext } from "./authContext";

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <AuthContext>
      <Router>
        <App />
      </Router>
    </AuthContext>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
