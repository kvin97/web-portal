import React from 'react';
import { Link } from 'react-router-dom';
import User from './User';
import './AppSwitchStyles.css';

function AppSwitch({ setUserName }) {
  return (
    <div>
        <User setUserName={setUserName}/>
        <Link to="/suite/dashboard"><button class="button">Dashboard Application</button></Link>
        <Link to="/suite/payment"><button class="button">Payment Application</button></Link>
    </div>
  );
}

export default AppSwitch;
