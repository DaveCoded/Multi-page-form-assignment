import React from 'react';

const PasswordRequirements = () => {
  return (
    <>
      <p className='password-paragraph'>Your password must have:</p>
      <ul className='password-list'>
        <div className='left-column'>
          <li>9 or more characters</li>
          <li>at least one lowercase letter</li>
        </div>
        <div className='right-column'>
          <li>at least one capital letter</li>
          <li>at least one number</li>
        </div>
      </ul>
    </>
  );
};

export default PasswordRequirements;
