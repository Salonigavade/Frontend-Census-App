import React, { Component } from "react";
import "../Container/ForgetPassword.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import UserService from "../Service/UserService";
import { Link } from "react-router-dom";

class ForgetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      emailId: "",
      newPassword: "",
    };

    this.onChangeUserId = this.onChangeUserId.bind(this);
    this.onChangeEmailId = this.onChangeEmailId.bind(this);
    this.onChangeNewPassword = this.onChangeNewPassword.bind(this);
  }

  onChangeUserId = (e) => {
    this.setState({ userId: e.target.value });
  };

  onChangeEmailId = (e) => {
    this.setState({ emailId: e.target.value });
  };

  onChangeNewPassword = (e) => {
    this.setState({ newPassword: e.target.value });
  };

  onClickForgetPass = (e) => {
    e.preventDefault();

    let user = {
      userId: this.state.userId,
      emailId: this.state.emailId,
      newPassword: this.state.newPassword,
    };

    UserService.forgetPassword(user).then((res) => {
      alert("password changed successfully");
    });
  };

  render() {
    return (
      <>
        <div className="container-fluid fpass-container">
          <div className="registration-form forgetPasswordForm">
            <form className="forgetPass">
              <div className="form-icon">
                <div className="usericon">
                  {/* <i className="icon icon-user"></i> */}
                  {/* <i class="fa fa-user-circle-o" aria-hidden="true"></i> */}
                  <AccountCircleIcon />
                </div>
              </div>
              <div className="row input-row-forget">
                <input
                  className="forgetInput"
                  type="text"
                  placeholder="Adhar Card No"
                  name="userId"
                  onChange={this.onChangeUserId}
                  value={this.state.userId}
                  placeholder="Enter Adhar No"
                />

                <input
                  className="forgetInput"
                  type="text"
                  placeholder="Email ID"
                  name="emailId"
                  onChange={this.onChangeEmailId}
                  value={this.state.emailId}
                  placeholder="Enter Email Id"
                />

                <input
                  className="forgetInput"
                  type="password"
                  placeholder="Enter New Password"
                  name="newPassword"
                  value={this.state.newPassword}
                  onChange={this.onChangeNewPassword}
                />

                <div className="form-group">
                  <button
                    type="button"
                    className="btn fpassbtn"
                    onClick={this.onClickForgetPass}
                  >
                    Forget Password
                  </button>
                  <Link to="/">
                    <button type="button" className="btn backBtn">
                      Back
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default ForgetPassword;
