const checkValidName = require('./checkValidName');

describe('Dummy test', () => {
  test('should return true', () => {
    const input = 'Dave';

    expect(checkValidName(input)).toBeTruthy();
  });

  test('should return false', () => {
    const input = '';

    expect(checkValidName(input)).toBeFalsy();
  });
});
