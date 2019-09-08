const checkValidName = (userName, errors) => {
  if (userName.length === 0) {
    errors.userName = 'Please enter your name';
    return false;
  }
  return true;
};

export default checkValidName;
