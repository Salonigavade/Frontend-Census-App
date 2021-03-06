import React, { Component } from "react";
import UserService from "../Service/UserService";
import "../Container/UserById.css";
import { Link } from "react-router-dom";

class UserById extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      userId: this.props.match.params.userId,
    };
  }

  componentDidMount() {
    UserService.getUserById(this.state.userId).then((res) => {
      this.setState({ user: res.data });
    });
  }
  render() {
    return (
      <>
        <div className="row topuser ">
          <div className="card usercard">
            <div className="card-body">
              <h4 className="card-title text-center pb-1">
                {this.state.user.userId}
              </h4>
              <hr />
              <div className="card-text">
                <div className="row">
                  <label className="font-weight-bold">Email :</label>
                  &nbsp;&nbsp;
                  <div> {this.state.user.emailId}</div>
                </div>
                <div className="row">
                  <label className="font-weight-bold">Mobile No :</label>
                  &nbsp;&nbsp;
                  <div> {this.state.user.mobile}</div>
                </div>
              </div>
              <hr />
              <Link to={`/members-by-userId/${this.state.user.userId}`}>
                <button className="btn btn-display ml-5">show Details</button>
              </Link>
              <Link to="/adminPortal">
                <button className="btn backbtn btn-display  mt-4">Back</button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default UserById;
