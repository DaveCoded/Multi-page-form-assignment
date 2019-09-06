import React from 'react';

const CheckboxGroup = ({ name, label, handleChecked, values }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type='checkbox'
        name={name}
        onChange={handleChecked(name)}
        checked={values[name]}
      />
    </div>
  );
};

export default CheckboxGroup;
