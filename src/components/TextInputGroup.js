import React from 'react';

const TextInputGroup = ({
  type,
  name,
  label,
  handleChange,
  values,
  errors
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        onChange={handleChange(name)}
        defaultValue={values[name]}
      />
      {errors ? <div>{errors[name]}</div> : null}
    </div>
  );
};

export default TextInputGroup;
