import React from 'react';
import './UserStyles.css';

function User({ setUserName }) {
    const onChangeUserName = event => {
        const {target: {value} } = event;
        setUserName(value);
    }

  return (
    <div>
        <label id = "userLabel">User Name</label>
        <input id="user" onChange={onChangeUserName}/>
    </div>
  );
}

export default User;

