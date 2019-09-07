import React from 'react';

const CheckboxGroup = ({ name, label, handleChecked, values }) => {
  return (
    <div className='checkbox-group'>
      <input
        type='checkbox'
        name={name}
        onChange={handleChecked(name)}
        checked={values[name]}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default CheckboxGroup;
