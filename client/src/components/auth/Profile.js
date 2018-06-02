import React, { Component } from "react";
import axios from "axios";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      handle: "",
      type: "",
      scores: "",
      location: "",
      choose: "",
      address: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      handle: this.state.handle,
      type: this.state.type,
      scores: this.state.scores,
      location: this.state.location,
      choose: this.state.choose,
      address: this.state.address
    };

    console.log(user);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Licence Application</h1>
              <p className="lead text-center">
                Apply for your driver's Licence.<br />
                Ensure you fill each field appropriately
              </p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Handle"
                    name="handle"
                    value={this.state.handle}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="integer"
                    className="form-control form-control-lg"
                    placeholder="Test Scores"
                    name="scores"
                    value={this.state.scores}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="State where application is being made from"
                    name="location"
                    value={this.state.location}
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
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
