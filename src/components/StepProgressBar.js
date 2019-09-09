import React from 'react';

const StepProgressBar = ({ step }) => {
  return (
    <div className='container'>
      <ul className='progressbar'>
        <li
          // Conditionally set active class according to current step/page
          className={step === 1 || step === 2 || step === 3 ? 'active' : null}>
          <span className='page-title'>User</span>
        </li>
        <li className={step === 2 || step === 3 ? 'active' : null}>
          <span className='page-title'>Privacy</span>
        </li>
        <li className={step === 3 ? 'active' : null}>
          <span className='page-title'>Done</span>
        </li>
      </ul>
    </div>
  );
};

export default StepProgressBar;
