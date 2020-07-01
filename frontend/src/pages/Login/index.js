import React, { Component } from "react";

import Form from '../../components/form';

class Login extends Component {
  handleLogin = () => {
    console.log("logging in")
  }

  render() {
    return (
        <Form
          login
          showLogo
          formHeader="Volunteer Login"
          fields={["NetID", "Password"]}
          buttonValue="Sign In"
          onButtonClick={this.handleLogin}
        />
        
    );
  }
}

export default Login;
