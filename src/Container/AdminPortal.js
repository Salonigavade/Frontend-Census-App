import React, { Component } from "react";
import UserService from "../Service/UserService";
import "../Container/AdminPortal.css";

class AdminPortal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //   userId: "",
      //   emailId: "",
      //   mobile: "",
      isloaded: false,
      user: [],
    };
  }

  componentDidMount() {
    UserService.showUser().then((res) => {
      this.setState({ user: res.data });
    });
  }

  render() {
    return (
      <>
        <div className="row top">
          <div className="col-md-6 d-flex ">
            <div className="home ml-4 mr-2">
              <h3>Home</h3>
            </div>
            <div className="contact ml-4 mr-2">
              <h3>Contact</h3>
            </div>
            <div className="About ml-4 mr-2">
              <h3>About</h3>
            </div>
          </div>
          <div className="col-md-6 p-0">
            <form class="form-inline mr-auto mb-4">
              <input
                class="form-control searchbar"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn bg-danger btn-rounded" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
        <div>
          <h2 className="text-capitalize text-center bg-info">Admin portal</h2>
        </div>
        {this.state.user
          .filter((ufilter) => ufilter.role === "User")
          .map((u) => (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{u.userId}</h5>
                <div className="card-text">
                  <div className="row">
                    <label>EmailId</label>&nbsp;&nbsp;
                    <div> {u.emailId}</div>
                  </div>
                  <div className="row">
                    <label>Mobile No</label>&nbsp;&nbsp;
                    <div> {u.mobile}</div>
                  </div>
                </div>
                <a href="#" className="btn btn-primary">
                  show Details
                </a>
              </div>
            </div>
          ))}
      </>
    );
  }
}

export default AdminPortal;
