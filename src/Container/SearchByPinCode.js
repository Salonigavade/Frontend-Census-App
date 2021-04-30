import React, { Component } from "react";
import MemberService from "../Service/MemberService";
import { Link } from "react-router-dom";
class SearchByPinCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      pinCode: this.props.match.params.pinCode,
    };
  }
  componentDidMount() {
    MemberService.getMembersByPincode(this.state.pinCode).then((response) => {
      this.setState({ members: response.data });
      console.log(this.state.members);
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
        <h4 className="text-center">
          Total Record:{this.state.members.length}
        </h4>
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

export default SearchByPinCode;
