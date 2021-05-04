import React, { Component } from "react";
import axios from "axios";
import { Pie, Bar } from "react-chartjs-2";
import "../Container/Statistics.css";
import { Link } from "react-router-dom";
class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = { Data: {}, Data1: {} };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/springfox/api/member/memberInfo")
      .then((res) => {
        const genderArr = res.data;
        let Gender = [];
        let Age = [];
        let cnt = [];
        let cnt1 = [];
        let lab = ["Male", "Female", "Other"];
        let lab1 = ["Below 18", "18 to 45", "Above 45"];
        let count = 0;
        let count1 = 0;
        let count2 = 0;
        let ct = 0;
        let ct1 = 0;
        let ct2 = 0;
        genderArr.forEach((record) => {
          Gender.push(record.gender);
          Age.push(record.age);
        });

        Gender.forEach((Item) => {
          if (Item === "Male") {
            count = count + 1;
          } else if (Item === "Female") {
            count1 = count1 + 1;
          } else {
            count2 = count2 + 1;
          }
        });

        cnt[0] = count;
        cnt[1] = count1;
        cnt[2] = count2;

        Age.forEach((Item) => {
          if (Item > 0 && Item < 18) {
            ct = ct + 1;
          } else if (Item >= 18 && Item < 45) {
            ct1 = ct1 + 1;
          } else {
            ct2 = ct2 + 1;
          }
        });

        cnt1[0] = ct;
        cnt1[1] = ct1;
        cnt1[2] = ct2;
        this.setState({
          Data: {
            labels: lab,
            datasets: [
              {
                label: "Description Ratio",
                data: cnt,
                backgroundColor: ["#FBBF24", "#F87171", "#A78BFA"],
              },
            ],
          },
        });
        this.setState({
          Data1: {
            labels: lab1,
            datasets: [
              {
                label: "Age Ratio",
                data: cnt1,

                backgroundColor: "#ff416c",
                borderColor: "black",
                borderWidth: 0.3,
              },
            ],
          },
        });
      });
  }

  render() {
    return (
      <>
        <div className="main">
          <Link to="/adminPortal">
            <input className="button1" type="submit" value="Back" />
          </Link>
          <div className="child">
            <h2 className="chart"> Gender Ratio</h2>
            <Pie
              data={this.state.Data}
              options={{ maintainAspectRatio: false }}
            />
          </div>

          <div
            className="bardiv"
            style={{
              width: "500px",
              height: "400px",
              margin: "auto",
            }}
          >
            <h2 className="chart">Age Ratio</h2>
            <Bar
              data={this.state.Data1}
              options={{
                title: {
                  display: true,
                  text: "Average Rainfall per month",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Statistics;
