import React, { Component } from 'react';
import '../Container/AddMember.css';


class AddMember extends Component {
    render() {
        return (
            <>
            <div className="container-fluid add-container">
                <div className="registration-form">
                    <form>
                        <div className="form-icon">
                            <span><i className="icon icon-user"></i></span>
                        </div>
                        <div className="row input-row">
                            <div className="col-md-8">
                                <div className="form-group">
                                    <input type="text" className="form-control item" id="fullName" placeholder="Full Name"/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input type="text" className="form-control item" id="motherName" placeholder="Mother Name"/>
                                </div>
                            </div>
                        </div>
                        <div className="row input-row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input type="date" className="form-control item" id="dob" placeholder="Date of Birth"/>
                                </div>
                            </div>
                            <div className="col-md-8 radio-div">
                            <fieldset id="payment_method">
                                <legend>Payment Method</legend>
                                <div class="fieldgroup">
                                <input type="radio" name="payment_method"value="Bill Me"/><label for= "payment1">BillMe
                                </label>
                                </div>
                                <div class="fieldgroup">
                                <input type="radio" name="payment_method"value="Bill Me"/><label for= "payment2">Credit   Card</label>
                                </div>
                                </fieldset>
                            </div>
                        </div>








                    {/* <div className="form-group">
                                <input type="password" className="form-control item" id="password" placeholder="Password"/>
                            </div>
                        
                        <div className="form-group">
                            <input type="text" className="form-control item" id="email" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control item" id="phone-number" placeholder="Phone Number"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control item" id="birth-date" placeholder="Birth Date"/>
                        </div> */}
                        <div className="form-group">
                            <button type="button" className="btn btn-block create-account">Create Account</button>
                        </div>
                </form>
            </div>
        </div> 
            </>
        );
    }
}

export default AddMember;