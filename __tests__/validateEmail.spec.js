const checkValidEmail = input => {
  const validEmailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i;

  if (!validEmailRegex.test(input)) {
    return false;
  }
  return true;
};

const shouldFail = 'dave2l4k';

const shouldPass = 'dave@gmail.com';

describe('Validate email input', () => {
  test('should return false', () => {
    expect(checkValidEmail(shouldFail)).toBe(false);
  });

  test('should return true', () => {
    expect(checkValidEmail(shouldPass)).toBe(true);
  });
});
