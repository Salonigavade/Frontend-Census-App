import React, { Component } from "react";
import { Link } from "react-router-dom";
class ActAndRules extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: this.props.match.params.userId,
    };
  }

  render() {
    return (
      <>
        <div>
          <h1 className="text-capitalize text-center title">Act And Rules</h1>
          <Link to={`/userPortal/${this.state.userId}`}>
            <button class="button btn btn-display mt-4 ml-5  w-auto">
              <i class="fas fa-arrow-alt-circle-left fa-2x "></i>
            </button>
          </Link>
          <div className="container">
            <table class="table table-striped mt-4 table-hover table-responsive-md table-bordered">
              <thead className="table-dark text-white ">
                <tr>
                  <th scope="col">Sr. No</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Download</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>The Census Act, 1948</td>
                  <td>
                    <a href="https://censusindia.gov.in/2011-Act&Rules/notifications/Act%20&%20Rules%20corrected%2029-5-08_doc.pdf">
                      <i class="fas fa-download fa-2x"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>The Census Rules, 1990</td>

                  <td>
                    <a href="https://censusindia.gov.in/2011-Act&Rules/notifications/census_rules_1990.pdf">
                      <i class="fas fa-download fa-2x"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>The Citizenship Act, 1955</td>
                  <td>
                    <a href="https://censusindia.gov.in/2011-Act&Rules/notifications/CitizenshipAct1955.pdf">
                      <i class="fas fa-download fa-2x"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td> The Registration of Births and Deaths Act, 1969</td>
                  <td>
                    <a href="https://censusindia.gov.in/2011-Act&Rules/notifications/rbd_act_1969.pdf">
                      <i class="fas fa-download fa-2x"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>
                    Rules under Section 6A of the IT (Amendment) Act-2008,
                    Notification No - GSR 316(E) dated 14-04-2011 regarding the
                    'The Information Technology (Electronic Service Delivery)
                    Rules, 2011 - Dept.of IT, MoCIT
                  </td>
                  <td>
                    <a href="https://censusindia.gov.in/2011-Act&Rules/notifications/MIT_notification_316E.pdf">
                      <i class="fas fa-download fa-2x"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td> ORGI Notification dated 23-04-2010</td>
                  <td>
                    <a href="https://censusindia.gov.in/2011-Act&Rules/notifications/Notification.pdf">
                      <i class="fas fa-download fa-2x"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>
                    ORGI Gazette Notification (Amendent the Census Rules 1990 )
                    dated 19-06-2018
                  </td>
                  <td>
                    <a href="https://censusindia.gov.in/2011-Act&Rules/notifications/Gazette%20Notification.pdf">
                      <i class="fas fa-download fa-2x"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>
                    ORGI Gazette Notification (Pre-Test Notification for Census
                    2021 ) dated 28-06-2019
                  </td>
                  <td>
                    <a href="https://censusindia.gov.in/2011-Act&Rules/notifications/PreTestNotification2021.pdf">
                      <i class="fas fa-download fa-2x"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td>
                    ORGI Gazette Notification (Period of Houselisting Operation
                    and Questions in Houselisting & Housing Census for Census
                    2021) dated 07-01-2020
                  </td>
                  <td>
                    <a href="https://censusindia.gov.in/2011-Act&Rules/notifications/Final%20Notification.pdf">
                      <i class="fas fa-download fa-2x"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default ActAndRules;
