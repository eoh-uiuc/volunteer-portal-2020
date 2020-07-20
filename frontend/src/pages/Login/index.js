import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Form from '../../components/Form';
import { login } from '../../utils/api';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      netID: "",
      password: "",
      authenticated: false,
    }
  }

  handleChange = (e, name) => {
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      "netid": this.state.netID,
      "password": this.state.password,
    };

    const res = await login(userData);
    if (res != null) {
      sessionStorage.setItem("authToken", res.token);
      this.setState({
        authenticated: true,
      });
    }
  }

  render() {
    return (
      <div>
        <Form
          login
          showLogo
          formHeader="Volunteer Login"
          fields={["NetID", "Password"]}
          buttonValue="Sign In"
          onButtonClick={this.handleLogin}
          handleChange={this.handleChange}
        />
        {this.state.authenticated && <Redirect to="/" />}
      </div>
    );
  }
}

export default Login;
