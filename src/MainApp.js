import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import AppSwitch from "./AppSwitch";
function MainApp() {
  const [userName, setUserName] = useState("");
  console.log("USERNAME", userName);
  return (
    <div>
      <Router>
        <Switch>
          <Route
            path="/appSwitch"
            render={() => <AppSwitch setUserName={setUserName} />}
          />
          <Route path="/" render={() => <App userName={userName} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default MainApp;
