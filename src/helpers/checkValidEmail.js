const checkValidEmail = (userEmail, errors) => {
  const validEmailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i;

  if (!validEmailRegex.test(userEmail)) {
    errors.userEmail = 'Please enter a valid email address';
    return false;
  }
  return true;
};

export default checkValidEmail;
