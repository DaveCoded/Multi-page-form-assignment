import React from 'react';
import CheckboxGroup from './CheckboxGroup';

const FormPrivacyDetails = props => {
  const proceed = e => {
    e.preventDefault();
    props.nextStep();
  };

  const back = e => {
    e.preventDefault();
    props.prevStep();
  };

  const { handleChecked, values } = props;

  return (
    <form className='form privacy-form' onSubmit={proceed}>
      <CheckboxGroup
        name='trayProducts'
        handleChecked={handleChecked}
        values={values}
        label='Receive updates about Tray.io product by email'
      />
      <CheckboxGroup
        name='otherProducts'
        handleChecked={handleChecked}
        values={values}
        label='Receive communication by email for other products created by the Tray.io team'
      />
      <div className='button-group'>
        <button className='btn back-button' onClick={back}>
          Go Back
        </button>
        <button className='btn submit-button' type='submit'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormPrivacyDetails;
