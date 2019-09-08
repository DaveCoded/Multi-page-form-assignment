import React from 'react';

const PasswordRequirements = () => {
  return (
    <>
      <p style={{ marginTop: '20px', color: '#787878' }}>
        Your password must have:
      </p>
      <ul
        style={{
          width: '100%',
          margin: '5px 0px 20px 90px',
          color: '#787878'
        }}>
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
