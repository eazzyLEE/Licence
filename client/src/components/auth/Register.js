import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { Button } from "react-bootstrap";
import axios from "axios";

import "react-datepicker/dist/react-datepicker.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      date_of_birth: moment(),
      sex: "",
      state_of_origin: "",
      occupation: "",
      address: "",
      email: "",

      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleChange(date) {
    this.setState({ date_of_birth: date });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      date_of_birth: this.state.date_of_birth,
      sex: this.state.sex,
      state_of_origin: this.state.state_of_origin,
      occupation: this.state.occupation,
      address: this.state.address
    };

    axios
      .post("/api/users/register", newUser)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data));
  }

  render() {
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Register</h1>
              <p className="lead text-center">
                Create your Registration Profile
              </p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="First Name"
                    name="first_name"
                    value={this.state.first_name}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Last Name"
                    name="last_name"
                    value={this.state.last_name}
                    onChange={this.onChange}
                  />
                </div>
                <div>
                  <p>Date of Birth: </p>
                  <DatePicker
                    selected={this.state.date_of_birth}
                    onChange={this.handleChange}
                  />;
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter Male or Female"
                    name="sex"
                    value={this.state.sex}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="State of Origin"
                    name="state_of_origin"
                    value={this.state.state_of_origin}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Occupation"
                    name="occupation"
                    value={this.state.occupation}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Residential Address"
                    name="address"
                    value={this.state.address}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  <small className="form-text text-muted">
                    This site uses Gravatar so if you want a profile image, use
                    a Gravatar email
                  </small>
                </div>

                <Button
                  onClick={() => {
                    this.props.history.replace("/profile");
                  }}
                >
                  Register
                  {/* <input type="submit" className="btn btn-info btn-block mt-4" /> */}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
