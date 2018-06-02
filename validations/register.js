const Validator = require("validator");
const isEmpty = require("./is-empty");
// import moment from 'moment';
// moment().format();

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.first_name = !isEmpty(data.first_name) ? data.first_name : "";
  data.last_name = !isEmpty(data.last_name) ? data.last_name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.date_of_birth = !isEmpty(data.date_of_birth) ? data.date_of_birth : "";
  data.sex = !isEmpty(data.sex) ? data.sex : "";
  data.state_of_origin = !isEmpty(data.state_of_origin)
    ? data.state_of_origin
    : "";
  data.occupation = !isEmpty(data.occupation) ? data.occupation : "";
  data.address = !isEmpty(data.address) ? data.address : "";

  if (!Validator.isLength(data.first_name, { min: 2, max: 30 })) {
    errors.first_name = "First name must be between 2 and 30 characters";
  }

  if (!Validator.isLength(data.last_name, { min: 2, max: 30 })) {
    errors.last_name = "Last name must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.first_name)) {
    errors.first_name = "First name field is required";
  }

  if (Validator.isEmpty(data.last_name)) {
    errors.last_name = "Last name field is required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

 
  if (Validator.isEmpty(data.date_of_birth)) {
    errors.date_of_birth = "Date of Birth field is required";
  }

  // if (!moment(date_of_birth, 'MM/DD/YYYY', true).isValid()) {
  //   errors.date_of_birth = "Date of birth is invalid";
  // }

  if (Validator.isEmpty(data.sex)) {
    errors.sex = "Sex field is required";
  }

  if (Validator.isEmpty(data.state_of_origin)) {
    errors.state_of_origin = "State of Origin field is required";
  }

  if (Validator.isEmpty(data.occupation)) {
    errors.occupation = "Occupation field is required";
  }

  if (Validator.isEmpty(data.address)) {
    errors.address = "Residential address field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
