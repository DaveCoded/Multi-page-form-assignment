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
    expect(checkValidPassword('GaryKasparov1991')).toBe(true);
  });

  test('should return false', () => {
    expect(checkValidPassword('GaryKasparov')).toBe('no number');
  });

  test('should return false', () => {
    expect(checkValidPassword('garykasparov1991')).toBe('no uppercase letter');
  });

  test('should return false', () => {
    expect(checkValidPassword('GARYKASPAROV1991')).toBe('no lowercase letter');
  });

  test('should return false', () => {
    expect(checkValidPassword('g1991')).toBe('too short');
  });
});
