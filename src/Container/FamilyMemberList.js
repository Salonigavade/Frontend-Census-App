import React, { Component } from "react";
import MemberService from "../Service/MemberService";
import { Link } from "react-router-dom";
import UserService from "../Service/UserService";

class FamilyMemberList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      userId: this.props.match.params.userId,
    };
    this.logOut = this.logOut.bind(this);
  }
  componentDidMount() {
    MemberService.getMembersByUserId(this.state.userId).then((response) => {
      this.setState({ members: response.data });
      console.log(this.state.members);
    });
  }
  logOut = (e) => {
    e.preventDefault();
    let logout = {
      userId: this.state.userId,
    };
    UserService.logout(logout).then((res) => {
      alert("Log Out Successfully");
      this.props.history.push("/");
    });
  };
  render() {
    return (
      <>
        <h1 className="text-center text-capitalize title">Family Details</h1>

        <div className="row button-row">
          <Link to="/adminPortal">
            <button className="btn backbtn btn-display mt-3 ">Back</button>
          </Link>

          <Link to={`/add-member/${this.state.userId}`}>
            <button className="btn backbtn btn-display mt-3 ">
              Add Member
            </button>
          </Link>

          <button
            className="btn btn-display  w-auto mt-4"
            style={{ marginLeft: "700px", height: "50px" }}
            onClick={this.logOut}
          >
            Log Out
          </button>
        </div>

        <div className="row m-3">
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
              </tr>
            </thead>
            <tbody className="table-info text-center">
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default FamilyMemberList;
