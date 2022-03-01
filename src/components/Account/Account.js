import React from "react";
import "./Account.css";

function Account(props) {
  return (
    <div>
      <div className="shop-background"></div>
      <div className="personal-info">
        <table>
          <thead>
            <tr>
              <th>Personal Info</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  disabled
                  value={`First name : ${props.loggedin.fName}`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  disabled
                  value={`Last name : ${props.loggedin.lName}`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  disabled
                  value={`phone number: ${props.loggedin.phone}`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  disabled
                  value={`Email : ${props.loggedin.email}`}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Account;
