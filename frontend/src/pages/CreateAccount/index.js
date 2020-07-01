import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Form from '../../components/form';

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
      <div>
        <Form
          formHeader="Create Your Account"
          fields={["First Name", "Last Name", "Email Address", "NetID", "Password", "Society"]}
          buttonValue="Create Account"
          onButtonClick={this.handleCreateAccount}
        />
        {this.state.accountCreated && <Redirect to="/login" />}
      </div>
    );
  }
}

export default CreateAccount;
