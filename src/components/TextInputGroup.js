import React from 'react';

const TextInputGroup = ({
  type,
  name,
  label,
  handleChange,
  values,
  errors,
  required
}) => {
  return (
    <div style={{ width: '100%' }}>
      <label className='input-label' htmlFor={name}>
        {label}: {required ? <span className='asterisk'>*</span> : null}
      </label>
      <input
        className='text-input'
        type={type}
        name={name}
        onChange={handleChange(name)}
        defaultValue={values[name]}
        noValidate
      />
      {errors ? <div className='errors'>{errors[name]}</div> : null}
    </div>
  );
};

export default TextInputGroup;
