import React, { Component } from "react";
import "../Container/ForgetPassword.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

class ForgetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      emailId: "",
      newPassword: "",
    };
  }

  render() {
    return (
      <>
        <div className="container-fluid fpass-container">
          <div className="registration-form">
            <form>
              <div className="form-icon">
                <div className="usericon">
                  {/* <i className="icon icon-user"></i> */}
                  {/* <i class="fa fa-user-circle-o" aria-hidden="true"></i> */}
                  <AccountCircleIcon />
                </div>
              </div>
              <div className="row input-row">
                <input
                  type="text"
                  placeholder="Adhar Card No"
                  name="userId"
                  onChange={this.onChangeUserId}
                  value={this.state.userId}
                  placeholder="Enter Adhar No"
                />

                <input
                  type="text"
                  placeholder="Email ID"
                  name="emailId"
                  onChange={this.onChangeEmailId}
                  value={this.state.emailId}
                  placeholder="Enter Adhar No"
                />

                <input
                  type="password"
                  placeholder="Enter New Password"
                  name="newPassword"
                  value={this.state.newPassword}
                  onChange={this.onChangeNewPassword}
                />

                <div className="form-group">
                  <button type="button" className="btn fpassbtn">
                    Forget Password
                  </button>
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
