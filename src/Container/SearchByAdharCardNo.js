import React, { Component } from "react";
import MemberService from "../Service/MemberService";
import { Link } from "react-router-dom";
class SearchByAdharCardNo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      member: {},
      adharCardNo: this.props.match.params.adharCardNo,
    };
  }
  componentDidMount() {
    MemberService.getMembersByAdharCard(this.state.adharCardNo).then(
      (response) => {
        this.setState({ member: response.data });
        console.log(this.state.member);
      }
    );
  }

  delete(memberId) {
    MemberService.deleteMember(memberId).then((res) => {
      alert("Deleted record successfully!");
      this.props.history.push("/all-members");
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
            <tbody className="table-info text-center">
              <tr>
                <th scope="row">{this.state.member.memberId}</th>
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
                <td>
                  <div className="actions">
                    <Link to={`/update-member/${this.state.member.memberId}`}>
                      <button id="margin" class="button btn btn-display w-auto">
                        <i class="fas fa-edit fa-lg "></i>
                      </button>
                    </Link>
                  </div>
                </td>
                <td>
                  <div className="actions">
                    <Link to={`/view-member/${this.state.member.memberId}`}>
                      <button id="margin" class="button btn btn-display w-auto">
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
                      onClick={() => this.delete(this.state.member.memberId)}
                    >
                      <i class="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default SearchByAdharCardNo;
