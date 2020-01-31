import React from 'react';
import './App.css';
import { Route, withRouter } from "react-router-dom";
import { registerUser, loginUser, verifyUser } from "./services/api-helper";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import RegisterForm from './components/RegisterForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

 //////////Login, Register, LogOut & Verify
handleLogin = async (loginData) => {
  const currentUser = await loginUser(loginData);
  if (currentUser.error) {
    this.setState({ authErrorMessage: currentUser.error });
  }
  else {
    this.setState({ currentUser });
    this.props.history.push('./');
  }
}
handleRegister = async (registerData) => {
  const currentUser = await registerUser(registerData);
  if (currentUser.error) {
    this.setState({ authErrorMessage: currentUser.error });
  }
  else {
    this.setState({ currentUser });
    this.props.history.push('./');
  }
}
handleLogout = () => {
  this.setState({ currentUser: null });
  localStorage.removeItem('authToken');
  this.setState({
    currentUser: null,
    authErrorMessage: "",
  });
}
handleVerify = async () => {
  const currentUser = await verifyUser();
  if (currentUser)
    this.setState({ currentUser });
}
  
  render() {
    const { currentUser } = this.state
    return (
      
      <div className="App">
        <header>
        <Route path="/login" render={() => (
          <LoginForm  
            handleLogin={this.handleLogin}
            authErrorMessage={this.state.authErrorMessage}
          />
          )} />
          
          <Route path="/register" render={() => (
            <RegisterForm
              handleRegister={this.handleRegister}
              authErrorMessage={this.state.authErrorMessage}
            />
          )} />
        </header>

        <main>

          <Route exact path="/" render={() => (
            <Home 
            currentUser={currentUser}
            />)}
          />

        </main>
      </div>
    );
  }
}

export default App;
