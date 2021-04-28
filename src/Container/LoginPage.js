import React, { Component } from "react";
import "../Container/Login.css";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      emailId: "",
      mobile: "",
      password: "",
      reEnterPassword: "",
      role: "",
    };

    this.onChangeUserId = this.onChangeUserId.bind(this);
    this.onChangeEmailId = this.onChangeEmailId.bind(this);
    this.onChangeMobileNo = this.onChangeMobileNo.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeReEnterPassword = this.onChangeReEnterPassword.bind(this);
    this.OnRoleChange = this.OnRoleChange.bind(this);
    this.OnRoleChange1 = this.OnRoleChange1.bind(this);
    this.onRegisterClick = this.onRegisterClick.bind(this);
    this.onLoginClick = this.onLoginClick.bind(this);
  }

  onChangeUserId = (e) => {
    this.setState({
      userId: e.target.value,
    });
  };

  onChangeEmailId = (e) => {
    this.setState({
      emailId: e.target.value,
    });
  };

  onChangeMobileNo = (e) => {
    this.setState({
      mobile: e.target.value,
    });
  };

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  onChangeReEnterPassword = (e) => {
    this.setState({
      reEnterPassword: e.target.value,
    });
  };

  OnRoleChange = (e) => {
    this.setState({
      role: e.target.value,
    });
  };

  OnRoleChange1 = (e) => {
    this.setState({
      role: e.target.value,
    });
  };

  onClickLoginShow = () => {
    document
      .getElementById("login-container")
      .classList.remove("right-panel-active");
  };

  onClickRegisterShow = () => {
    document
      .getElementById("login-container")
      .classList.add("right-panel-active");
  };

  //Login
  onChangeLoginPassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  OnLoginRoleChange = (e) => {
    this.setState({
      role: e.target.value,
    });
  };

  OnLoginRoleChange1 = (e) => {
    this.setState({
      role: e.target.value,
    });
  };

  onChangeLoginUserId = (e) => {
    this.setState({
      userId: e.target.value,
    });
  };

  //Submit

  onRegisterClick = () => {
    alert("sucess");
  };

  onLoginClick = () => {
    alert("sucess");
  };

  render() {
    return (
      <>
        <div className="container login-container" id="login-container">
          <div className="form-container sign-up-container">
            <form onSubmit={this.onRegisterClick}>
              <h1>Register</h1>
              <input
                type="text"
                placeholder="Adhar Card No"
                name="userId"
                onChange={this.onChangeUserId}
                value={this.state.userId}
                placeholder="Enter Adhar No"
              />

              <input
                type="email"
                placeholder="Email"
                name="emailId"
                value={this.state.emailId}
                onChange={this.onChangeEmailId}
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                name="mobile"
                value={this.state.mobile}
                onChange={this.onChangeMobileNo}
              />

              <input
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
              />

              <input
                type="password"
                placeholder="Re-Enter Password"
                name="reEnterPassword"
                value={this.state.reEnterPassword}
                onChange={this.onChangeReEnterPassword}
              />

              <div className="radioGroup d-flex">
                <div className="radiobtn mr-5 ">
                  <label>
                    <input
                      type="radio"
                      value="Admin"
                      checked={this.state.role === "Admin"}
                      onChange={this.OnRoleChange}
                    />
                    Admin
                  </label>
                </div>

                <div className="radiobtn ml-3 ">
                  <label>
                    <input
                      type="radio"
                      value="User"
                      checked={this.state.role === "User"}
                      onChange={this.OnRoleChange1}
                    />
                    User
                  </label>
                </div>
              </div>

              <button>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form onSubmit={this.onLoginClick}>
              <h1>Sign in</h1>
              <div className="social-container">
                <a href="#" className="social">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social">
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a href="#" className="social">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span>or use your account</span>
              <input
                type="text"
                placeholder="Adhar Card No"
                name="userId"
                onChange={this.onChangeLoginUserId}
                value={this.state.userId}
                placeholder="Enter Adhar No"
              />

              <input
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.onChangeLoginPassword}
              />

              <div className="radioGroup d-flex">
                <div className="radiobtn mr-5 ">
                  <label>
                    <input
                      type="radio"
                      value="Admin"
                      checked={this.state.role === "Admin"}
                      onChange={this.OnLoginRoleChange}
                    />
                    Admin
                  </label>
                </div>

                <div className="radiobtn ml-3 ">
                  <label>
                    <input
                      type="radio"
                      value="User"
                      checked={this.state.role === "User"}
                      onChange={this.OnLoginRoleChange1}
                    />
                    User
                  </label>
                </div>
              </div>
              <a href="#">Forgot your password?</a>

              <button>Sign In</button>
            </form>
          </div>

          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button
                  className="ghost"
                  id="signIn"
                  onClick={this.onClickLoginShow}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button
                  className="ghost"
                  id="signUp"
                  onClick={this.onClickRegisterShow}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LoginPage;
