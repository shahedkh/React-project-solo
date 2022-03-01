import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e, attr) => {
    setLoginForm({ ...loginForm, [attr]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let localUsers;
    localUsers = JSON.parse(localStorage.getItem("users"));
    localUsers.forEach((user) => {
      if (
        loginForm.email == user.email &&
        loginForm.password == user.password
      ) {
        props.setLogged(user);
        alert("you have logged in successfully");
        navigate("/Furniture-Ecommerce");
      }
    });
  };
  return (
    <div>
      <form className="Login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              handleChange(e, "email");
            }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              handleChange(e, "password");
            }}
          />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
