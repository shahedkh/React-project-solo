import React from "react";
import "./Registration.css";
import SignUp from "./SignUp";
import Login from "./Login";

function Registration(props) {
  return (
    <div>
      <div className="RegistrationPage-container">
        <SignUp />
        <Login setLogged={props.setLogged} />
      </div>
    </div>
  );
}

export default Registration;
