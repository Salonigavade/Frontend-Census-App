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
              <h3>Home</h3>
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
                class="btn bg-danger btn-rounded"
                type="submit"
                onClick={() => this.SearchUserById(this.state.searchText)}
              >
                Search
              </button>
            </form>
          </div>
          <div className="col-md-2">
            <button
              className="btn btn-sm-1 btn-info mt-4"
              onClick={this.showAllMemberClick}
            >
              Show All
            </button>
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
                  className="btn btn-primary ml-5"
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
