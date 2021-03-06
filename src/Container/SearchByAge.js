import React, { Component } from "react";
import MemberService from "../Service/MemberService";
import "../Container/SearchByAge.css";
import { Link } from "react-router-dom";
class SearchByAge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: "",
      end: "",
      members: [],
    };
    this.ChangeStartAge = this.ChangeStartAge.bind(this);
    this.ChangeEndAge = this.ChangeEndAge.bind(this);
    this.SearchByAge = this.SearchByAge.bind(this);
  }
  y;

  //   componentDidMount() {

  //   }
  SearchByAge = (e) => {
    e.preventDefault();
    MemberService.getMembersBetAges(this.state.start, this.state.end).then(
      (response) => {
        this.setState({ members: response.data });
        console.log(this.state.members);
      }
    );
  };
  ChangeStartAge = (e) => {
    this.setState({
      start: e.target.value,
    });
  };
  ChangeEndAge = (e) => {
    this.setState({
      end: e.target.value,
    });
  };
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
        <div className="row search-age">
          <div className="col-md-4">
            <input
              className="age"
              type="number"
              placeholder="Age 1"
              value={this.state.start}
              onChange={this.ChangeStartAge}
            />
          </div>
          <div className="col-md-4">
            <input
              className="age"
              type="number"
              placeholder="Age 2"
              value={this.state.end}
              onChange={this.ChangeEndAge}
            />
          </div>
          <div className="col-md-4">
            <button
              className="btn btn-display mt-3"
              type="submit"
              onClick={this.SearchByAge}
            >
              Search
            </button>
          </div>
        </div>
        <h1 className="text-center text-capitalize title">
          All Member Details
        </h1>
        <Link to="/all-members">
          <button class="button btn btn-display mt-3  ml-5 w-auto">
            <i class="fas fa-arrow-alt-circle-left fa-lg "></i>
          </button>
        </Link>
        <div className="row m-3 mt-5">
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
                <th colSpan="2" style={{ textAlign: "center" }}>
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

export default SearchByAge;
