import React, { useState } from "react";
import "./Registration.css";
import { Link } from "react-router-dom";

function SignUp() {
  const [formErrors, setFormErrors] = useState({});
  const [registerForm, setRegisterForm] = useState({
    fName: "",
    lName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  let isValidate;

  const handleChange = (e, attr) => {
    setRegisterForm({ ...registerForm, [attr]: e.target.value });
  };

  const handleValidation = (e, values) => {
    e.preventDefault();
    const errors = {};
    if (values.fName.length <= 5) {
      errors.fName = "first name should be more than 5 characters";
    }
    if (values.lName.length <= 5) {
      errors.lName = "last name should be more than 5 characters";
    }
    if (values.password.length <= 6) {
      errors.password = "Password must be more than 6 characters";
    }
    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match";
    }
    setFormErrors(errors);
    if (
      values.fName.length > 5 &&
      values.lName.length > 5 &&
      values.password.length > 6 &&
      values.confirmPassword === values.password
    ) {
      isValidate = true;
      handleSubmit(e, errors);
    }
  };

  const handleSubmit = (e, errors) => {
    e.preventDefault();
    let users = {
      fName: registerForm.fName,
      lName: registerForm.lName,
      phone: registerForm.phone,
      password: registerForm.password,
      email: registerForm.email,
    };
    let arr = [];
    let flag = true;

    if (localStorage.getItem("users")) {
      arr = JSON.parse(localStorage.getItem("users"));
      for (let i = 0; i < arr.length; i++) {
        //to check if the account exist in the local storage or not
        if (arr[i].email === registerForm.email) {
          alert("account already exists ,please login");
          return (flag = false);
        }
      }
      if (flag === true && isValidate === true) {
        arr.push(users);
        localStorage.setItem("users", JSON.stringify(arr));
        alert("you have registered successfully");
      }
    }
    //if there is not items in local storage add empty array
    else if (isValidate === true) {
      arr.push(users);
      localStorage.setItem("users", JSON.stringify(arr));
    }
  };
  return (
    <div>
      <form
        onSubmit={(e) => handleValidation(e, registerForm)}
        className="Register-form"
      >
        <h2>New Account</h2>
        <div>
          <input
            type="text"
            placeholder="First name"
            name="fName"
            value={registerForm.fName}
            onChange={(e) => {
              handleChange(e, "fName");
            }}
          />
          <small className="errorMsg">{formErrors.fName}</small>
        </div>
        <div>
          <input
            type="text"
            placeholder="Last name"
            name="lastName"
            value={registerForm.lName}
            onChange={(e) => {
              handleChange(e, "lName");
            }}
          />
          <small className="errorMsg">{formErrors.lName}</small>
        </div>
        <div>
          <input
            type="text"
            placeholder="phone number"
            name="phone"
            value={registerForm.phone}
            onChange={(e) => {
              handleChange(e, "phone");
            }}
          />
        </div>
        <div>
          <input
            type="email"
            required
            placeholder="Email"
            value={registerForm.email}
            name="email"
            onChange={(e) => {
              handleChange(e, "email");
            }}
          />
          <small className="errorMsg">{formErrors.email}</small>
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={registerForm.password}
            onChange={(e) => {
              handleChange(e, "password");
            }}
            required
          />
          <small className="errorMsg">{formErrors.password}</small>
        </div>
        <div>
          <input
            type="password"
            placeholder="Repet Password"
            name="confirmPassword"
            value={registerForm.confirmPassword}
            onChange={(e) => {
              handleChange(e, "confirmPassword");
            }}
            required
          />
          <small className="errorMsg">{formErrors.confirmPassword}</small>
        </div>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default SignUp;
