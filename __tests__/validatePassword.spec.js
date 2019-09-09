const checkValidPassword = password => {
  // Separate password checks for separate error messages
  const lowercaseCheck = /^(?=.*[a-z])/;
  const uppercaseCheck = /^(?=.*[A-Z])/;
  const numericalCheck = /^(?=.*[0-9])/;

  if (password.length < 9) {
    return 'too short';
  } else if (!lowercaseCheck.test(password)) {
    return 'no lowercase letter';
  } else if (!uppercaseCheck.test(password)) {
    return 'no uppercase letter';
  } else if (!numericalCheck.test(password)) {
    return 'no number';
  }
  return true;
};

describe('Validate password input', () => {
  test('should return true', () => {
    expect(checkValidPassword('GaryK1991')).toBe(true);
  });

  test('should recognise an 8 character password is too short', () => {
    expect(checkValidPassword('Gary1991')).toBe('too short');
  });

  test('should require a number in the password', () => {
    expect(checkValidPassword('GaryKasparov')).toBe('no number');
  });

  test('should require an uppercase character', () => {
    expect(checkValidPassword('garykasparov1991')).toBe('no uppercase letter');
  });

  test('should require a lowercase character', () => {
    expect(checkValidPassword('GARYKASPAROV1991')).toBe('no lowercase letter');
  });
});
