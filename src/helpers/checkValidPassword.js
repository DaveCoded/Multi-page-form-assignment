const checkValidPassword = (userPassword, errors) => {
  // Separate password checks for separate error messages
  const lowercaseCheck = /^(?=.*[a-z])/;
  const uppercaseCheck = /^(?=.*[A-Z])/;
  const numericalCheck = /^(?=.*[0-9])/;

  if (userPassword.length < 9) {
    errors.userPassword = 'Password too short';
    return false;
  } else if (!lowercaseCheck.test(userPassword)) {
    errors.userPassword = 'Please include a lowercase character';
    return false;
  } else if (!uppercaseCheck.test(userPassword)) {
    errors.userPassword = 'Please include a capital letter';
    return false;
  } else if (!numericalCheck.test(userPassword)) {
    errors.userPassword = 'Please include a numerical character';
    return false;
  }
  return true;
};

export default checkValidPassword;
