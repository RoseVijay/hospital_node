const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateResetInput(data) {
  let errors = {};

  data.password = !isEmpty(data.newPassword) ? data.newPassword : "";
  data.passwordcnf = !isEmpty(data.confirmpassword) ? data.confirmpassword : "";

  if (Validator.isEmpty(data.newPassword)) {
    errors.password = "Password field is required";
  }

  if (!Validator.isLength(data.newPassword, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  if (Validator.isEmpty(data.confirmpassword)) {
    errors.passwordcnf = "Confirm Password field is required";
  }

  if (!Validator.equals(data.newPassword, data.confirmpassword)) {
    errors.passwordcnf = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
