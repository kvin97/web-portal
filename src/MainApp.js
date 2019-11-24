import React,{ useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import AppSwitch from './AppSwitch';
function MainApp() {
    const [userName,setUserName] = useState("");
    console.log("USERNAME",userName);
  return (
    <div>
          <Router>
              <Route path="/appSwitch" render={() => <AppSwitch setUserName={setUserName}/>}/>
              <Route path="/" render={() => <App userName={userName}/>}/>
          </Router>
    </div>
  );
}

export default MainApp;
