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
    <form onSubmit={proceed}>
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
      <div>
        <button onClick={back}>Go Back</button>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default FormPrivacyDetails;
