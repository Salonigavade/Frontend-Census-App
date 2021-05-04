import React, { Component } from "react";
import MemberService from "../Service/MemberService";
import "../Container/ViewMember.css";
import { Link } from "react-router-dom";

class AdminViewMember extends Component {
  constructor(props) {
    super(props);

    this.state = {
      memberId: this.props.match.params.memberId,
      member: {},
    };
  }
  componentDidMount() {
    MemberService.getMembersByMemberId(this.state.memberId).then((res) => {
      this.setState({ member: res.data });
    });
    console.log(this.state.memberId);
  }

  render() {
    return (
      <>
        <div className="card col-md-6 offset-md-3 card view-card">
          <h1 className="text-center text-capitalize title">Member Details</h1>
          <div className="card-body viewcard-body">
            <div className="row">
              <label className="font-weight-bold"> Member ID : </label>
              &nbsp;&nbsp;
              <div> {this.state.member.memberId}</div>
            </div>
            <div className="row">
              <label className="font-weight-bold"> Full Name: </label>
              &nbsp;&nbsp;
              <div> {this.state.member.fullName}</div>
            </div>
            <div className="row">
              <label className="font-weight-bold"> Mother Name: </label>
              &nbsp;&nbsp;
              <div> {this.state.member.motherName}</div>
            </div>
            <div className="row">
              <label className="font-weight-bold"> Date Of Birth: </label>
              &nbsp;&nbsp;
              <div> {this.state.member.dob}</div>
            </div>
            <div className="row">
              <label className="font-weight-bold"> Age : </label>
              &nbsp;&nbsp;
              <div> {this.state.member.age}</div>
            </div>
            <div className="row">
              <label className="font-weight-bold"> Gender : </label>
              &nbsp;&nbsp;
              <div> {this.state.member.gender}</div>
            </div>
            <div className="row">
              <label className="font-weight-bold"> Mobile No : </label>
              &nbsp;&nbsp;
              <div> {this.state.member.mobileNo}</div>
            </div>
            <div className="row">
              <label className="font-weight-bold"> Adhar Card Number : </label>
              &nbsp;&nbsp;
              <div> {this.state.member.adharCardNo}</div>
            </div>
            <div className="row">
              <label className="font-weight-bold"> Voter ID Number : </label>
              &nbsp;&nbsp;
              <div> {this.state.member.voterIdNo}</div>
            </div>
            <div className="row">
              <label className="font-weight-bold">
                {" "}
                Nationality(IN/Other) :{" "}
              </label>
              &nbsp;&nbsp;
              <div> {this.state.member.nationality}</div>
            </div>
            <div className="row">
              <label className="font-weight-bold">
                {" "}
                Educational Details :{" "}
              </label>
              &nbsp;&nbsp;
              <div> {this.state.member.educationDetails}</div>
            </div>
            <div className="row">
              <label className="font-weight-bold"> Marrital Status : </label>
              &nbsp;&nbsp;
              <div> {this.state.member.marritalStatus}</div>
            </div>
            <div className="row">
              <label className="font-weight-bold"> Relationship: </label>
              &nbsp;&nbsp;
              <div> {this.state.member.relationship}</div>
            </div>
            <div className="row">
              <label className="font-weight-bold"> City : </label>
              &nbsp;&nbsp;
              <div> {this.state.member.city}</div>
            </div>
            <div className="row">
              <label className="font-weight-bold">Pin Code : </label>
              &nbsp;&nbsp;
              <div> {this.state.member.pinCode}</div>
            </div>
            <div className="row">
              <label className="font-weight-bold"> District : </label>
              &nbsp;&nbsp;
              <div> {this.state.member.district}</div>
            </div>
            <div className="row">
              <label className="font-weight-bold"> State : </label>
              &nbsp;&nbsp;
              <div> {this.state.member.state}</div>
            </div>
            <Link to={`/members-by-userId/${this.state.member.userId}`}>
              <button class="button btn btn-display mt-3 ml-5 w-50">
                <i class="fas fa-arrow-alt-circle-left fa-2x "></i>
              </button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default AdminViewMember;
