// SignUp.js

import React, { Component } from 'react';
import './LoginPage.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: '',
      name: '',
      userName: '',
      password: '',
      signUpData: [], // Array to store sign-up data
    };
  }

  newSignUp = () => {
    const { emailId, name, userName, password } = this.state;
    if (!emailId.trim() || !name.trim() || !userName.trim() || !password.trim()) {
      // You can add additional validation here if needed
      alert('All fields are required.');
      return;
    }

    // Create a new sign-up data object
    const userData = {
      emailId: this.state.emailId,
      name: this.state.name,
      userName: this.state.userName,
      password: this.state.password,
    };

    // Add the new sign-up data object to the array
    const updatedSignUpData = [...this.state.signUpData, userData];

    // Update the state and store the updated array in local storage
    this.setState({ signUpData: updatedSignUpData }, () => {
      localStorage.setItem('signUpData', JSON.stringify(updatedSignUpData));
    });

    // Clear the input fields
    this.setState({
      emailId: '',
      name: '',
      userName: '',
      password: '',
    });
  };

  render() {
    return (
      <div>
        <input
          className="logipage__text"
          onChange={(event) => {
            this.setState({ emailId: event.currentTarget.value });
          }}
          type="text"
          placeholder="Mobile number or Email"
          value={this.state.emailId}
        />
        <input
          className="logipage__text"
          onChange={(event) => {
            this.setState({ name: event.currentTarget.value });
          }}
          type="text"
          placeholder="Full Name"
          value={this.state.name}
        />
        <input
          className="logipage__text"
          onChange={(event) => {
            this.setState({ userName: event.currentTarget.value });
          }}
          type="text"
          placeholder="Username"
          value={this.state.userName}
        />
        <input
          className="logipage__text"
          onChange={(event) => {
            this.setState({ password: event.currentTarget.value });
          }}
          type="password"
          placeholder="Password"
          value={this.state.password}
        />
        <button className="login__button" onClick={this.newSignUp}>
          Sign up
        </button>
      </div>
    );
  }
}

export default SignUp;
