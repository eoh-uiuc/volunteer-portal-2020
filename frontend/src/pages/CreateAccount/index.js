import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Form from '../../components/Form';
import { createAccount } from '../../utils/api';

class CreateAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      accountCreated: false,
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      netID: "",
      password: "",
      society: "",
    }
  }

  handleChange = (e, name) => {
    const value = e.target ? e.target.value : e.value;
    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit = async (e) => {
    e.preventDefault();

    // Check all fields are filled in
    if (this.state.firstName !== "" && this.state.lastName !== "" && this.state.emailAddress !== "" && this.state.phoneNumber !== "" 
      && this.state.netID !== "" && this.state.password !== "" && this.state.society !== "") {
      // POST new user to database
      const userData = {
        "firstName": this.state.firstName,
        "lastName": this.state.lastName,
        "role": "volunteer",
        "email": this.state.emailAddress,
        "phone": this.state.phoneNumber,
        "netid": this.state.netID,
        "password": this.state.password,
        "society": this.state.society
      };
      const res = await createAccount(userData);
      // TODO: Error message if post error

      if (res != null) {
        // Redirect to login page after successful create account
        this.setState({
          accountCreated: true,
        });
      }
    }
  }

  render() {
    return (
      <div>
        <Form
          formHeader="Create Your Account"
          fields={["First Name", "Last Name", "Email Address", "Phone Number", "NetID", "Password", "Society"]}
          buttonValue="Create Account"
          onButtonClick={this.handleFormSubmit}
          handleChange={this.handleChange}
        />
        {this.state.accountCreated && <Redirect to="/login" />}
      </div>
    );
  }
}

export default CreateAccount;
