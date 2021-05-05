import React, { Component } from "react";
import "../Component/About.css";
import { Link } from "react-router-dom";
class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: this.props.match.params.userId,
    };
  }

  render() {
    return (
      <>
        <div className="main-div">
          .<h2 className="text-capitalize text-center title">About Us</h2>
          <Link to={`/userPortal/${this.state.userId}`}>
            <button class="button btn btn-display  mt-3 ml-5 w-auto">
              <i class="fas fa-arrow-alt-circle-left fa-2x "></i>
            </button>
          </Link>
          <div className="about-div">
            <div className="about-row d-block">
              <h4>Shri Amit Shah,</h4>
              <a
                classname="link"
                href="http://censusindia.gov.in/2011-Documents/Shri_Amit_Shah.pdf"
              >
                Home Minister
              </a>
            </div>
            <div className="about-row d-block ">
              <h4>Shri G.Kishan Reddy,</h4>
              <a
                classname="link"
                href="http://censusindia.gov.in/2011-Documents/Shri_GKishan_Reddy.pdf"
              >
                Minister of State (Home)
              </a>
            </div>
            <div className="about-row d-block ">
              <h4>Shri Nityanand Rai,</h4>
              <a
                classname="link"
                href="http://censusindia.gov.in/2011-Documents/Shri_Nityanand_Rai.pdf"
              >
                Minister of State (Home)
              </a>
            </div>
            <div className="about-row d-block ">
              <h4>Shri Ajay Kumar Bhalla,</h4>
              <a
                classname="link"
                href="http://censusindia.gov.in/2011-Documents/Shri_Ajay_Bhalla.pdf"
              >
                Home Secretary
              </a>
            </div>
            <div className="about-row d-block">
              <h4>Dr. Vivek Joshi,</h4>
              <a
                classname="link"
                href="https://censusindia.gov.in/2011-common/AboutUs2017.html#"
              >
                Registrar General And Census Commissioner, India
              </a>
            </div>
            <div className="about-row d-block ">
              <h4>ORGI Divisions</h4>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
