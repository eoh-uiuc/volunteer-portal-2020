import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/eoh-logo.png";
import "./styles.scss";

class Login extends Component {
  render() {
    return (
      <div className="auth-wrapper">
        <img src={Logo} id="logo" />
        <h1>Volunteer Login</h1>
          <div className="auth-form">
            <form>
                <p>NetID</p>
                <input id="auth-field" type="text" />
                <p>Password</p>
                <input id="auth-field" type="password" />
                <br />
                <input id="auth-button" type="submit" value="Sign In" />
            </form>
          </div>
          <Link to="/createaccount" id="create-account-button">
            Create Account
          </Link>
      </div>
    );
  }
}

export default Login;
