import React, { Component } from "react";
import UserService from "../Service/UserService";
import "../Container/AdminPortal.css";
import { Link } from "react-router-dom";
class AdminPortal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //   userId: "",
      //   emailId: "",
      //   mobile: "",
      user: [],
      searchText: "",
    };
    this.onClickGetUser = this.onClickGetUser.bind(this);
    this.showAllMemberClick = this.showAllMemberClick.bind(this);
    this.SearchUserById = this.SearchUserById.bind(this);
  }

  componentDidMount() {
    UserService.showUser().then((res) => {
      this.setState({ user: res.data });
    });
  }

  onClickGetUser = (userId) => {
    this.props.history.push(`/members-by-userId/${userId}`);
  };

  showAllMemberClick = () => {
    this.props.history.push(`/all-members`);
  };

  SearchUserById = (seachText) => {
    this.props.history.push(`/user-by-userId/${seachText}`);
  };

  changeSearchText = (e) => {
    this.setState({ searchText: e.target.value });
  };

  render() {
    return (
      <>
        <div className="row top">
          <div className="col-md-5 d-flex ">
            <div className="home ml-4 mr-2">
              <Link to="/">
                <button className="btn-logout ">Log out</button>
              </Link>
            </div>
            <div className="contact ml-4 mr-2">
              <h3>Contact</h3>
            </div>
            <div className="About ml-4 mr-2">
              <h3>About</h3>
            </div>
          </div>
          <div className="col-md-5 p-0">
            <form class="form-inline mr-auto mb-4">
              <input
                class="form-control searchbar"
                type="text"
                placeholder="Search"
                aria-label="Search"
                value={this.state.searchText}
                onChange={this.changeSearchText}
              />
              <button
                class="btn  btn-primary btn-rounded btn-display"
                type="submit"
                onClick={() => this.SearchUserById(this.state.searchText)}
              >
                Search
              </button>
            </form>
          </div>
          <div className="col-md-2">
            <button
              className="btn btn-primary mt-4 btn-display"
              onClick={this.showAllMemberClick}
            >
              Show All
            </button>
          </div>
        </div>
        <div>
          <h1 className="text-capitalize text-center title">Admin portal</h1>
        </div>
        {this.state.user
          .filter((ufilter) => ufilter.role === "User")
          .map((u) => (
            <div className="card">
              <div className="card-body">
                <h4 className="card-title text-center pb-1">{u.userId}</h4>
                <hr />
                <div className="card-text">
                  <div className="row">
                    <label className="font-weight-bold">Email :</label>
                    &nbsp;&nbsp;
                    <div> {u.emailId}</div>
                  </div>
                  <div className="row">
                    <label className="font-weight-bold">Mobile No :</label>
                    &nbsp;&nbsp;
                    <div> {u.mobile}</div>
                  </div>
                </div>
                <hr />
                <button
                  className="btn btn-primary ml-5 btn-display"
                  onClick={() => this.onClickGetUser(u.userId)}
                >
                  show Details
                </button>
              </div>
            </div>
          ))}
      </>
    );
  }
}

export default AdminPortal;
