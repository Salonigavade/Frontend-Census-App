import React, { Component } from "react";
import MemberService from "../Service/MemberService";

import { Link } from "react-router-dom";
class SearchByMemberId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      member: {},
      memberId: this.props.match.params.memberId,
    };
  }
  componentDidMount() {
    MemberService.getMembersByMemberId(this.state.memberId).then((response) => {
      this.setState({ member: response.data });
      console.log(this.state.member);
    });
  }

  render() {
    return (
      <>
        <h1 className="text-center text-capitalize title">
          All Member Details
        </h1>
        <Link to="/adminPortal">
          <button className="btn backbtn btn-display mt-3 ">Back</button>
        </Link>
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
            <tbody className="table-dark text-center">
              <tr>
                <th>{this.state.member.memberId}</th>
                <td>{this.state.member.fullName}</td>
                <td>{this.state.member.motherName}</td>
                <td>{this.state.member.dob}</td>
                <td>{this.state.member.age}</td>
                <td>{this.state.member.gender}</td>
                <td>{this.state.member.mobileNo}</td>
                <td>{this.state.member.adharCardNo}</td>
                <td>{this.state.member.voterIdNo}</td>
                <td>{this.state.member.nationality}</td>
                <td>{this.state.member.educationDetails}</td>
                <td>{this.state.member.marritalStatus}</td>
                <td>{this.state.member.relationship}</td>
                <td>{this.state.member.city}</td>
                <td>{this.state.member.pinCode}</td>
                <td>{this.state.member.district}</td>
                <td>{this.state.member.state}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default SearchByMemberId;
