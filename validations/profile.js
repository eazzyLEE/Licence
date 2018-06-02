const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.type = !isEmpty(data.type) ? data.type : "";
  data.scores = !isEmpty(data.scores) ? data.scores : "";
  data.location = !isEmpty(data.location) ? data.location : "";
  data.choose = !isEmpty(data.choose) ? data.choose : "";
  data.address = !isEmpty(data.address) ? data.address : "";
  // data.type = !isEmpty(data.type) ? data.type : "";

  data.skills = !isEmpty(data.skills) ? data.skills : "";

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = "Handle needs to be between 2 and 40 characters";
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = "Profile handle is required";
  }

  if (Validator.isEmpty(data.type)) {
    errors.type = "type field is required";
  }

  if (Validator.isEmpty(data.skills)) {
    errors.skills = "Skills handle is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
