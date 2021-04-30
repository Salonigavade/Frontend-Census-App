import React, { Component } from "react";
import "../Container/AddMember.css";

class AddMember extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      memberId: "",
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

    // this.onChangeFullNameHandler = this.onChangeFullNameHandler.bind(this);
  }

  onClickAddMember = (e) => {
    e.preventDefault();

    let member = {
      memberId: this.state.memberId,
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
  };

  render() {
    return (
      <>
        <div className="container-fluname add-container">
          <div className="registration-form">
            <form onSubmit={this.onClickAddMember}>
              <div className="form-icon">
                <span>
                  <i className="icon icon-user"></i>
                </span>
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
                      <input type="radio" name="gender" value="Male" />
                      <label for="male">Male</label>
                    </div>
                    <div class="fieldgroup">
                      <input type="radio" name="gender" value="Female" />
                      <label for="female">Female</label>
                    </div>
                    <div class="fieldgroup">
                      <input type="radio" name="gender" value="Other" />
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
                      value={this.state.value}
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
                      value={this.state.name}
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
                      onChange={this.onChangeEduvationDetailsHandler}
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control item"
                      name="marritalStatus"
                      placeholder="Marrital Status"
                      value={this.state.marritalStatus}
                      onChange={this.onChangeMarritalStatusHandler}
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
                <button type="button" className="btn btn-block create-account">
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default AddMember;
