import React, { Component } from 'react';
import './LoginPage.css';

class SignIn extends Component {

  
  constructor(props) {
    
    super(props);
    this.state = {
      path:'',
      emailId: '',
      password: '',
      signInData: [], // Array to store sign-in data
    };
  }

  handleNavigate = () => {
    window.location.href='/home'
  }

  handleSignIn = () => {    
    const { emailId, password } = this.state;
    if (!emailId.trim() || !password.trim()) {
      // You can add additional validation here if needed
      alert('Email and password are required.');
      return;
    }

    // Check if there is sign-up data in local storage
    const signUpData = JSON.parse(localStorage.getItem('signUpData'));

    if (!signUpData) {
      alert('No sign-up data found. Please sign up first.');
      return;
    }

    // Find a matching sign-up record
    const matchingUser = signUpData.find(
      (user) => (user.emailId === emailId||user.userName===emailId)&& user.password === password
    );

    if (!matchingUser) {
      

      alert('Invalid email or password. Please try again.');
      this.setState({path:''})
      return;
      
    }

    // Create a new sign-in data object
    const signInDataItem = {
      emailId: this.state.emailId,
      timestamp: new Date().toLocaleString(),
    };

    // Add the new sign-in data object to the array
    const updatedSignInData = [...this.state.signInData, signInDataItem];

    // Update the state and store the updated array in local storage
    this.setState({ signInData: updatedSignInData }, () => {
      localStorage.setItem('signInData', JSON.stringify(updatedSignInData));
    });

    // Clear the input fields
    this.setState({
      emailId: '',
      password: '',
    });

    // Perform the desired action upon successful sign-in
    if(matchingUser){
      this.handleNavigate();
    }
    
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
          placeholder="Email"
          value={this.state.emailId}
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
       <button className="login__button" onClick={this.handleSignIn}>
          Sign In
        </button>
        
      </div>
    );
  }
}

export default SignIn;
