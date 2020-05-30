import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "../Login/styles.scss"; // Uses same styling as login page

class CreateAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      accountCreated: false,
    }
  }

  handleCreateAccount = () => {
    this.setState({
      accountCreated: true,
    })
  }

  render() {
    return (
      <div className="auth-wrapper">
          <div className="auth-form">
            <form>
                <p>First Name</p>
                <input id="auth-field" type="text" />
                <p>Last Name</p>
                <input id="auth-field" type="text" />
                <p>Email Address</p>
                <input id="auth-field" type="text" />
                <p>NetID</p>
                <input id="auth-field" type="text" />
                <p>Password</p>
                <input id="auth-field" type="password" />
                <br />
                <input id="auth-button" type="submit" value="Create Account" onClick={this.handleCreateAccount} />
            </form>
          </div>
          {this.state.accountCreated && <Redirect to="/login" />}
      </div>
    );
  }
}

export default CreateAccount;
