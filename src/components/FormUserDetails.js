import React, { Component } from 'react';
import TextInputGroup from './TextInputGroup';

import checkValidName from '../helpers/checkValidName';
import checkValidEmail from '../helpers/checkValidEmail';
import checkValidPassword from '../helpers/checkValidPassword';
import PasswordRequirements from './PasswordRequirements';

export class FormUserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {}
    };
  }

  validate = () => {
    const { userName, userEmail, userPassword } = this.props.values;
    const errors = {
      userName: '',
      userEmail: '',
      userPassword: ''
    };

    let validName = true;
    let validEmail = true;
    let validPassword = true;

    validName = checkValidName(userName, errors);
    validEmail = checkValidEmail(userEmail, errors);
    validPassword = checkValidPassword(userPassword, errors);

    this.setState({ errors: errors });
    return validName && validEmail && validPassword;
  };

  // Proceed to next form page
  proceed = e => {
    e.preventDefault();
    if (this.validate()) {
      this.props.nextStep();
    }
  };

  render() {
    const { values, handleChange } = this.props;
    const { errors } = this.state;

    return (
      <form className='form user-form' onSubmit={this.proceed} noValidate>
        <TextInputGroup
          type='text'
          name='userName'
          label='name'
          handleChange={handleChange}
          values={values}
          errors={errors}
          required
        />
        <TextInputGroup
          type='text'
          name='userRole'
          label='role'
          handleChange={handleChange}
          values={values}
        />
        <TextInputGroup
          type='email'
          name='userEmail'
          label='email'
          handleChange={handleChange}
          values={values}
          errors={errors}
          required
        />
        <TextInputGroup
          type='password'
          name='userPassword'
          label='password'
          handleChange={handleChange}
          values={values}
          errors={errors}
          required
        />
        <PasswordRequirements />
        <button className='btn btn--submit' type='submit'>
          Next
        </button>
      </form>
    );
  }
}

export default FormUserDetails;
