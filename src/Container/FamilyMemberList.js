import React, { Component } from "react";
import MemberService from "../Service/MemberService";

class FamilyMemberList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      userId: this.props.match.params.userId,
    };
  }
  componentDidMount() {
    MemberService.getMembersByUserId(this.state.userId).then((response) => {
      this.setState({ members: response.data });
      console.log(this.state.members);
    });
  }
  render() {
    return (
      <>
        <h2 className="text-center text-capitalize">Family Details</h2>

        {/* <div className="col-md-6 p-0">
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
          </div> */}

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
