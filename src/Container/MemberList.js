import React, { Component } from "react";
import MemberService from "../Service/MemberService";
import "../Container/MemberList.css";
import { Link } from "react-router-dom";
class MemberList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      searchText: "",
      optionValue: "",
      selectValue: "",
    };
    // this.searchClick = this.searchClick.bind(this);
    this.changeSearchText = this.changeSearchText.bind(this);
    // this.findByMemberId = this.findByMemberId.bind(this);
    this.changeSearchOptiont = this.changeSearchOptiont.bind(this);
  }

  onChangeSelect = (e) => {
    this.setState({ selectValue: e.target.value });
  };
  changeSearchText = (e) => {
    this.setState({ searchText: e.target.value });
  };
  changeSearchOptiont = (e) => {
    this.setState({ optionValue: e.target.value });
  };

  changeSearchOptiont1 = (e) => {
    this.setState({ optionValue: e.target.value });
  };
  searchClick = (selectValue) => {
    if (selectValue === "MemberId") {
      console.log(this.state.searchText);
      this.props.history.push(`/search-by-memberId/${this.state.searchText}`);
    } else if (selectValue === "AdharCard") {
      console.log(this.state.searchText);
      this.props.history.push(`/search-by-adharCard/${this.state.searchText}`);
    } else if (selectValue === "City") {
      console.log(this.state.searchText);
      this.props.history.push(`/search-by-city/${this.state.searchText}`);
    } else if (selectValue === "State") {
      console.log(this.state.searchText);
      this.props.history.push(`/search-by-state/${this.state.searchText}`);
    } else if (selectValue === "Pincode") {
      console.log(this.state.searchText);
      this.props.history.push(`/search-by-pinCode/${this.state.searchText}`);
    } else if (selectValue === "District") {
      console.log(this.state.searchText);
      this.props.history.push(`/search-by-district/${this.state.searchText}`);
    } else if (selectValue === "Gender") {
      console.log(this.state.searchText);
      this.props.history.push(`/search-by-gender/${this.state.searchText}`);
    } else {
      alert("Choose Option");
    }
  };

  componentDidMount() {
    MemberService.getAllMembers().then((response) => {
      this.setState({ members: response.data });
      console.log(this.state.members);
    });
  }
  delete(memberId) {
    MemberService.deleteMember(memberId).then((res) => {
      this.setState({
        members: this.state.members.filter((mem) => mem.memberId !== memberId),
      });
      this.props.history.push("/all-members");
      alert("Deleted record successfully!");
    });
  }
  render() {
    return (
      <>
        <div className="row m-3 topField pt-2">
          <div className="col-md-8 p-0">
            <div className="form-inline searchField">
              <div className="join">
                <input
                  class="form-control searchbar"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                  value={this.state.searchText}
                  onChange={this.changeSearchText}
                />
                <select
                  name="searchValue"
                  id="searchValue"
                  className="selectClass"
                  value={this.state.selectValue}
                  onChange={this.onChangeSelect}
                >
                  <option>Choose Option</option>
                  <option value="MemberId">Search By MemberID</option>
                  <option value="AdharCard">Search By Adhar Card No</option>
                  <option value="City">Search By City</option>
                  <option value="State">Search By State</option>
                  <option value="Pincode">Search By Pincode</option>
                  <option value="District">Search By District</option>
                  <option value="Gender">Search By Gender</option>
                </select>
                <button
                  className="btn btn-display w-auto"
                  type="submit"
                  onClick={() => this.searchClick(this.state.selectValue)}
                >
                  <i class="fas fa-search fa-lg"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 pt-2">
            <Link to="/search-bet-age/">
              <button className="btn btn-display ml-5">Search By Age</button>
            </Link>
          </div>
        </div>

        <h1 className="text-center text-capitalize title">
          All Member Details
        </h1>
        <Link to="/adminPortal">
          <button class="button btn btn-display mt-3  ml-5 w-auto">
            <i class="fas fa-arrow-alt-circle-left fa-lg "></i>
          </button>
        </Link>
        <div className="row m-3 mt-3">
          <table class="table table-striped table-bordered table-hover table-md table-responsive">
            <thead className="thead-dark" style={{ whiteSpace: "nowrap" }}>
              <tr class="table-primary">
                <th>Member Id</th>
                <th>Full Name</th>
                <th>Mother Name</th>
                <th>Date Of Birth</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Mobile No</th>
                <th>Adhar Card No</th>
                <th>Voter ID No</th>
                <th>Nationality(IN/NRI)</th>
                <th>Educational Details</th>
                <th>Marrital Status</th>
                <th>Relationship</th>
                <th>City</th>
                <th>Pincode</th>
                <th>District</th>
                <th>State</th>
                <th colSpan="3" style={{ textAlign: "center" }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="table-dark text-center">
              {this.state.members.map((m) => (
                <tr key={m.memberId}>
                  <th scope="row">{m.memberId}</th>
                  <td>{m.fullName}</td>
                  <td>{m.motherName}</td>
                  <td>{m.dob}</td>
                  <td>{m.age}</td>
                  <td>{m.gender}</td>
                  <td>{m.mobileNo}</td>
                  <td>{m.adharCardNo}</td>
                  <td>{m.voterIdNo}</td>
                  <td>{m.nationality}</td>
                  <td>{m.educationDetails}</td>
                  <td>{m.marritalStatus}</td>
                  <td>{m.relationship}</td>
                  <td>{m.city}</td>
                  <td>{m.pinCode}</td>
                  <td>{m.district}</td>
                  <td>{m.state}</td>
                  <td>
                    <div className="actions">
                      <Link to={`/update-member/${m.memberId}`}>
                        <button
                          id="margin"
                          class="button btn btn-display w-auto"
                        >
                          <i class="fas fa-edit fa-lg "></i>
                        </button>
                      </Link>
                    </div>
                  </td>
                  <td>
                    <div className="actions">
                      <Link to={`/view-member/${m.memberId}`}>
                        <button
                          id="margin"
                          class="button btn btn-display w-auto"
                        >
                          <i class="fas fa-eye fa-lg"></i>
                        </button>
                      </Link>
                    </div>
                  </td>
                  <td>
                    <div className="actions">
                      <button
                        id="margin"
                        class="button btn btn-display w-auto"
                        onClick={() => this.delete(m.memberId)}
                      >
                        <i class="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default MemberList;
