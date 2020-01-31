import React from 'react';
import { Link, withRouter } from "react-router-dom";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <form onSubmit={(event) => {
        event.preventDefault();
        this.props.handleLogin(this.state);
        this.setState({
          username: "",
          password: ""
        })
      }}>

    
      <div className="sign-in">
        <h2>Login</h2>
        <label htmlFor="username">UserName:</label>

        <input
          name="username"
          className="username"
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          name="password"
          className="password"
          type="password"
          value={this.state.password}
          onSubmit={this.handleChange}
          />
        
          <button className="sign-in">Welcome</button>
          
      <Link to="/register">
        <button className="sign-in">Create Account</button>
          </Link>
          <br />
          <p>{this.props.authErrorMessage}</p>
      </div>
    </form>
    )
  }
}
export default withRouter(LoginForm);
