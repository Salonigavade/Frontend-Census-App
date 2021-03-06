import React, { Component } from "react";
import UserService from "../Service/UserService";
import "../Container/AdminPortal.css";
import { Link } from "react-router-dom";
class AdminPortal extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
        <div className="row admin-top mb-2">
          <div className="col-md-2 d-flex ">
            <div className="home mr-3">
              <Link to="/">
                <button class="button btn btn-display mt-4  ml-5 w-auto">
                  <i class="fas fa-sign-out-alt fa-2x"></i>
                </button>
              </Link>
            </div>
          </div>
          <div className="col-md-6 p-0">
            <form class="form-inline mr-auto mb-4">
              <input
                class="form-control searchbar"
                type="text"
                placeholder="Search By UserID"
                aria-label="Search"
                value={this.state.searchText}
                onChange={this.changeSearchText}
              />
              <button
                class="btn  btn-primary btn-rounded btn-display w-25"
                type="submit"
                onClick={() => this.SearchUserById(this.state.searchText)}
              >
                <i class="fas fa-search"></i>
              </button>
            </form>
          </div>
          <div className="col-md-4">
            <button
              className="btn btn-primary mt-4 mr-5 btn-display"
              onClick={this.showAllMemberClick}
            >
              Show All
            </button>
            <Link to="/statistics">
              <button class="button btn btn-display mt-4  mr-5 w-auto">
                Statistics
              </button>
            </Link>
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
                <h6 className="text-center text-muted">User ID</h6>
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
