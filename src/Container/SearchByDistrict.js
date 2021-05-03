import React, { Component } from "react";
import MemberService from "../Service/MemberService";
import { Link } from "react-router-dom";
class SearchByDistrict extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      district: this.props.match.params.district,
    };
  }
  componentDidMount() {
    MemberService.getMembersByDistrict(this.state.district).then((response) => {
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
        <h1 className="text-center text-capitalize title">
          All Member Details
        </h1>
        <Link to="/all-members">
          <button class="button btn btn-display mt-3  ml-5 w-auto">
            <i class="fas fa-arrow-alt-circle-left fa-lg "></i>
          </button>
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

export default SearchByDistrict;
