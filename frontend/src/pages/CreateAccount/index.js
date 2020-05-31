import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Select from 'react-select';

import '../Login/styles.scss'; // Uses same styling as login page

const societies = [
  { value: 'None', label: 'None' },
  { value: 'Aerospace Outreach', label: 'Aerospace Outreach' },
  { value: 'Alma\'s Talking Dogs', label: 'Alma\'s Talking Dogs' },
  { value: 'Alpha Chi Sigma', label: 'Alpha Chi Sigma' },
  { value: 'Alpha Omega Epsilon', label: 'Alpha Omega Epsilon' },
  { value: 'Alpha Pi Mu', label: 'Alpha Pi Mu' },
  { value: 'American Chemical Society', label: 'American Chemical Society' },
  { value: 'American Concrete Institute', label: 'American Concrete Institute' },
  { value: 'American Institute of Aeronautics and Astronautics', label: 'American Institute of Aeronautics and Astronautics' },
  { value: 'American Institute of Chemical Engineers', label: 'American Institute of Chemical Engineers' },
  { value: 'American Nuclear Society', label: 'American Nuclear Society' },
]

const societySelectorStyles = {
  control: (base, state) => ({
    ...base,
    boxShadow: 'none',
    borderColor: state.isFocused? '#a3a3a3' : '#ccc',
    borderRadius: 7, 
    cursor: 'text',
    '&:hover': { borderColor: 'none' }
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    '&:hover': { cursor: 'pointer' },
  }),
  option: (base, state) => ({
    ...base,
    '&:hover': { cursor: 'pointer' }
  })
};

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
                <p>Society</p>
                <Select styles={societySelectorStyles} options={societies} />
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
