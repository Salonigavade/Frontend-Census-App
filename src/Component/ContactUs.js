import { RemoveShoppingCartSharp } from "@material-ui/icons";
import React, { Component } from "react";
import "../Component/ContactUs.css";
import { Link } from "react-router-dom";

class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: this.props.match.params.userId,
    };
  }

  onClickSubmit = (e) => {
    alert("data submited");
  };

  render() {
    return (
      <>
        <h1 className="text-capitalize text-center title">
          Contact Information
        </h1>
        <div className="contact_us">
          <div className="row contact-back">
            <Link to={`/userPortal/${this.state.userId}`}>
              <button class="button btn btn-display mb-2 ml-5 w-auto">
                <i class="fas fa-arrow-alt-circle-left fa-2x "></i>
              </button>
            </Link>
          </div>
          <div className="row contact-div">
            <div className="col-md-7 pl-5">
              <h5>For Administration and Policy, you may contact :</h5>

              <p className="contact-para">
                Office of The Registrar General and Census Commissioner, India
                <br />
                NDCC-II Bldg, Jai Singh Road, New Delhi -110001 (INDIA)
                <br />
                <strong>Tel. Nos:</strong> +91-11-23438284, 23438120
                <br />
                <strong>Fax No :</strong> +91-11-23438121
                <br />
                <strong>E-mailID(s):</strong> rgi.rgi@nic.in
              </p>

              <h5>For Query related to Data, you may contact :</h5>

              <p className="contact-para">
                ORGI - Data Dissemination Unit (DDU) New Delhi
                <br />
                1st Floor, West Block-1, R. K. Puram, New Delhi-110066
                <br />
                <strong>Contact No(s):</strong> +91-011-26104012
                <br />
                <strong>Contact Person:</strong> Mr. Gurvinder Singh and Mr.
                Bhanu Pratap Pandey
                <br />
                <strong>E-mailID(s):</strong> ddu.rgi@nic.in
              </p>

              <h5>
                For suggestion / problem with the designing / working of this
                site and further improvement, you may contact:
              </h5>

              <p className="contact-para">
                ORGI - Data Processing Division (DPD) New Delhi
                <br />
                National Data Center, Block-III, 8th Floor, Delhi IT Park,
                Shastri Park, Delhi – 110053
                <br />
                <strong>Contact No(s):</strong>{" "}
                +91-11-22170801,22170802,22170803
                <br />
                <strong>Fax No :</strong> +91-11-22170806
                <br />
                <strong>E-mailID(s):</strong> websupport.rgi@nic.in
              </p>
            </div>
            <div className="col-md-5 contact-form">
              <form id="contactus">
                <h3>Contact us form</h3>
                <fieldset>
                  {" "}
                  <input
                    placeholder="Full Name"
                    type="text"
                    tabindex="1"
                    required
                    autofocus
                  />{" "}
                </fieldset>
                <fieldset>
                  {" "}
                  <textarea
                    placeholder="Full contact address"
                    tabindex="5"
                    required
                  ></textarea>{" "}
                </fieldset>
                <fieldset>
                  {" "}
                  <input
                    placeholder="Pin Code"
                    type="text"
                    tabindex="2"
                    required
                  />{" "}
                </fieldset>
                <fieldset>
                  {" "}
                  <input
                    placeholder="Email Address"
                    type="email"
                    tabindex="2"
                    required
                  />{" "}
                </fieldset>
                <fieldset>
                  {" "}
                  <input
                    placeholder="Phone Number"
                    type="tel"
                    tabindex="3"
                    required
                  />{" "}
                </fieldset>
                <fieldset>
                  {" "}
                  <textarea
                    placeholder="Feedback"
                    tabindex="5"
                    required
                  ></textarea>{" "}
                </fieldset>
                <fieldset>
                  {" "}
                  <button
                    name="submit"
                    type="button"
                    className="btn btn-primary btn-display"
                    id="contactus-submit"
                    onClick={this.onClickSubmit}
                  >
                    Send Now
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ContactUs;
