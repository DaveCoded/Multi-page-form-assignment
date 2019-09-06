import React from 'react';

const StepProgressBar = ({ step }) => {
  return (
    <div className='container'>
      <ul className='progressbar'>
        <li className='active'>Your details</li>
        <li>Privacy</li>
        <li>Done</li>
      </ul>
    </div>
  );
};

export default StepProgressBar;
