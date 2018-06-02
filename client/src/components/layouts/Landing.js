import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">EazzyLicence</h1>
                <p className="lead">
                  {" "}
                  . Welcome to TradeDepot's driver's licence registration
                  portal.<br />
                  <b>For Fresh Applicants</b>, To apply for a driver's licence,
                  first, fill the registration form and then apply.<br />
                  <b>For reviewers</b>, Sign up, and then process applications
                </p>
                <hr />
                {/* <Link to="/signup" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </Link> */}
                <Link to="/register" className="btn btn-lg btn-info mr-2">
                  Register
                </Link>
                <Link to="/login" className="btn btn-lg btn-light">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
