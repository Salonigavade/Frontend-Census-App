import React, { Component } from "react";
import "../Container/AddMember.css";
import MemberService from "../Service/MemberService";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

class AdminAddMember extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: this.props.match.params.userId,
      fullName: "",
      motherName: "",
      dob: "",
      gender: "",
      mobileNo: "",
      adharCardNo: "",
      voterIdNo: "",
      nationality: "",
      educationDetails: "",
      marritalStatus: "",
      relationship: "",
      city: "",
      pinCode: "",
      district: "",
      state: "",
    };

    this.onChangeFullNameHandler = this.onChangeFullNameHandler.bind(this);
    this.onChangeMotherNameHandler = this.onChangeMotherNameHandler.bind(this);
    this.onChangeDOBHandler = this.onChangeDOBHandler.bind(this);
    this.onRoleChangeMale = this.onRoleChangeMale.bind(this);
    this.onRoleChangeFemale = this.onRoleChangeFemale.bind(this);
    this.onRoleChangeOther = this.onRoleChangeOther.bind(this);
    this.onChangeMobileNoHandler = this.onChangeMobileNoHandler.bind(this);
    this.onChangeAdharCardNoHandler = this.onChangeAdharCardNoHandler.bind(
      this
    );
    this.onChangeVoterIdNoHandler = this.onChangeVoterIdNoHandler.bind(this);
    this.onChangeNationalityHandler = this.onChangeNationalityHandler.bind(
      this
    );
    this.onChangeEducationDetailsHandler = this.onChangeEducationDetailsHandler.bind(
      this
    );
    this.onChangeMarried = this.onChangeMarried.bind(this);
    this.onChangeUnmarried = this.onChangeUnmarried.bind(this);
    this.onChangeRelationshipHandler = this.onChangeRelationshipHandler.bind(
      this
    );
    this.onChangeCityHandler = this.onChangeCityHandler.bind(this);
    this.onChangePinCodeHandler = this.onChangePinCodeHandler.bind(this);
    this.onChangeDistrictHandler = this.onChangeDistrictHandler.bind(this);
    this.onChangeStateHandler = this.onChangeStateHandler.bind(this);
  }

  onChangeFullNameHandler = (e) => {
    this.setState({ fullName: e.target.value });
  };

  onChangeMotherNameHandler = (e) => {
    this.setState({ motherName: e.target.value });
  };

  onChangeDOBHandler = (e) => {
    this.setState({ dob: e.target.value });
  };

  onRoleChangeMale = (e) => {
    this.setState({ gender: e.target.value });
  };

  onRoleChangeFemale = (e) => {
    this.setState({ gender: e.target.value });
  };

  onRoleChangeOther = (e) => {
    this.setState({ gender: e.target.value });
  };

  onChangeMobileNoHandler = (e) => {
    this.setState({ mobileNo: e.target.value });
  };

  onChangeAdharCardNoHandler = (e) => {
    this.setState({ adharCardNo: e.target.value });
  };

  onChangeVoterIdNoHandler = (e) => {
    this.setState({ voterIdNo: e.target.value });
  };

  onChangeNationalityHandler = (e) => {
    this.setState({ nationality: e.target.value });
  };

  onChangeEducationDetailsHandler = (e) => {
    this.setState({ educationDetails: e.target.value });
  };

  onChangeMarried = (e) => {
    this.setState({ marritalStatus: e.target.value });
  };

  onChangeUnmarried = (e) => {
    this.setState({ marritalStatus: e.target.value });
  };

  onChangeRelationshipHandler = (e) => {
    this.setState({ relationship: e.target.value });
  };

  onChangeCityHandler = (e) => {
    this.setState({ city: e.target.value });
  };

  onChangePinCodeHandler = (e) => {
    this.setState({ pinCode: e.target.value });
  };

  onChangeDistrictHandler = (e) => {
    this.setState({ district: e.target.value });
  };

  onChangeStateHandler = (e) => {
    this.setState({ state: e.target.value });
  };

  onClickAddMember = (e) => {
    e.preventDefault();

    let member = {
      fullName: this.state.fullName,
      motherName: this.state.motherName,
      dob: this.state.dob,
      gender: this.state.gender,
      mobileNo: this.state.mobileNo,
      adharCardNo: this.state.adharCardNo,
      voterIdNo: this.state.voterIdNo,
      nationality: this.state.nationality,
      educationDetails: this.state.educationDetails,
      marritalStatus: this.state.marritalStatus,
      relationship: this.state.relationship,
      city: this.state.city,
      pinCode: this.state.pinCode,
      district: this.state.district,
      state: this.state.state,
    };

    console.log(member);

    MemberService.addMember(this.state.userId, member)
      .then((res) => {
        alert("Member Added Successful");
        this.props.history.push(`/members-by-userId/${this.state.userId}`);
      })
      .catch((res) => {
        alert("unable to add details");
      });
  };

  render() {
    return (
      <>
        <div className="container add-container">
          <div className="registration-form ">
            <form>
              <div className="form-icon">
                <div className="usericon">
                  <AccountCircleIcon />
                </div>
              </div>
              <div className="row input-row">
                <div className="col-md-8">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control item"
                      name="fullName"
                      placeholder="Full Name"
                      value={this.state.fullName}
                      onChange={this.onChangeFullNameHandler}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control item"
                      name="motherName"
                      placeholder="Mother Name"
                      value={this.state.motherName}
                      onChange={this.onChangeMotherNameHandler}
                    />
                  </div>
                </div>
              </div>
              <div className="row input-row">
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control item"
                      name="dob"
                      placeholder="Date of Birth"
                      value={this.state.dob}
                      onChange={this.onChangeDOBHandler}
                    />
                  </div>
                </div>
                <div className="col-md-8 radio-div">
                  <fieldset id="gender">
                    <div class="fieldgroup paraField">
                      <p>Select your gender: </p>
                    </div>
                    <div class="fieldgroup">
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={this.state.gender === "Male"}
                        onChange={this.onRoleChangeMale}
                      />
                      <label for="male">Male</label>
                    </div>
                    <div class="fieldgroup">
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={this.state.gender === "Female"}
                        onChange={this.onRoleChangeFemale}
                      />
                      <label for="female">Female</label>
                    </div>
                    <div class="fieldgroup">
                      <input
                        type="radio"
                        name="gender"
                        value="Other"
                        checked={this.state.gender === "Other"}
                        onChange={this.onRoleChangeOther}
                      />
                      <label for="other">Other</label>
                    </div>
                  </fieldset>
                </div>
              </div>
              <div className="row input-row">
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      type="tel"
                      className="form-control item"
                      name="mobileNo"
                      placeholder="Mobile No"
                      value={this.state.mobileNo}
                      onChange={this.onChangeMobileNoHandler}
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control item"
                      name="adharCardNo"
                      placeholder="Adhar Card No"
                      value={this.state.adharCardNo}
                      onChange={this.onChangeAdharCardNoHandler}
                    />
                  </div>
                </div>
              </div>
              <div className="row input-row">
                <div className="col-md-8">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control item"
                      name="voterIdNo"
                      placeholder="Voter Id No"
                      value={this.state.voterIdNo}
                      onChange={this.onChangeVoterIdNoHandler}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control item"
                      name="nationality"
                      placeholder="Nationality"
                      value={this.state.nationality}
                      onChange={this.onChangeNationalityHandler}
                    />
                  </div>
                </div>
              </div>
              <div className="row input-row">
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control item"
                      name="educationDetails"
                      placeholder="Education Details"
                      value={this.state.educationDetails}
                      onChange={this.onChangeEducationDetailsHandler}
                    />
                  </div>
                </div>
                <div className="col-md-8 radio-div">
                  <fieldset id="marritalStatus">
                    <div class="fieldgroup paraField">
                      <p>Marrital Status: </p>
                    </div>
                    <div class="fieldgroup ml-lg-1">
                      <input
                        type="radio"
                        name="marritalStatus"
                        value="Married"
                        checked={this.state.marritalStatus === "Married"}
                        onChange={this.onChangeMarried}
                      />
                      <label for="Married">Married</label>
                    </div>
                    <div class="fieldgroup">
                      <input
                        type="radio"
                        name="marritalStatus"
                        value="Unmarried"
                        onChange={this.onChangeUnmarried}
                      />
                      <label for="Unmarried">Unmarried</label>
                    </div>
                  </fieldset>
                </div>
              </div>
              <div className="row input-row">
                <div className="col-md-8">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control item"
                      name="relationship"
                      placeholder="Relationship"
                      value={this.state.relationship}
                      onChange={this.onChangeRelationshipHandler}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control item"
                      name="city"
                      placeholder="City"
                      value={this.state.city}
                      onChange={this.onChangeCityHandler}
                    />
                  </div>
                </div>
              </div>
              <div className="row input-row">
                <div className="col-md-8">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control item"
                      name="pinCode"
                      placeholder="Pin Code"
                      value={this.state.pinCode}
                      onChange={this.onChangePinCodeHandler}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control item"
                      name="district"
                      placeholder="District"
                      value={this.state.district}
                      onChange={this.onChangeDistrictHandler}
                    />
                  </div>
                </div>
              </div>
              <div className="row input-row">
                <div className="col-md-8">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control item"
                      name="state"
                      placeholder="State"
                      value={this.state.state}
                      onChange={this.onChangeStateHandler}
                    />
                  </div>
                </div>
                <div className="col-md-4"></div>
              </div>
              <div className="form-group">
                <button
                  type="button"
                  className="btn btn-block btn btn-display  create-account"
                  onClick={this.onClickAddMember}
                >
                  Add Member
                </button>

                <Link to={`/members-by-userId/${this.state.userId}`}>
                  <button class="button btn btn-display mt-3 ml-0 w-auto">
                    <i class="fas fa-arrow-alt-circle-left fa-2x "></i>
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default AdminAddMember;
