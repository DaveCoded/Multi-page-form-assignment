import React, { Component } from 'react';
import TextInputGroup from './TextInputGroup';

export class FormUserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {}
    };
  }

  validate = () => {
    let formIsValid = true;
    const errors = {
      userName: '',
      userEmail: '',
      userPassword: ''
    };
    const { userName, userEmail, userPassword } = this.props.values;

    // Regex for valid email address
    const validEmailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i;
    // Separate password checks for separate error messages
    const lowercaseCheck = /^(?=.*[a-z])/;
    const uppercaseCheck = /^(?=.*[A-Z])/;
    const numericalCheck = /^(?=.*[0-9])/;

    // Name required
    if (userName.length === 0) {
      formIsValid = false;
      errors.userName = 'Please enter your name';
    }
    // Email required & valid
    if (!validEmailRegex.test(userEmail)) {
      formIsValid = false;
      errors.userEmail = 'Please enter a valid email address';
    }
    // Password required and passes regex tests
    if (userPassword.length < 9) {
      formIsValid = false;
      errors.userPassword = 'Password too short';
    } else if (!lowercaseCheck.test(userPassword)) {
      errors.userPassword = 'Please include a lowercase character';
      formIsValid = false;
    } else if (!uppercaseCheck.test(userPassword)) {
      errors.userPassword = 'Please include an uppercase character';
      formIsValid = false;
    } else if (!numericalCheck.test(userPassword)) {
      errors.userPassword = 'Please include a numerical character';
      formIsValid = false;
    }

    this.setState({ errors: errors });
    return formIsValid;
  };

  // Proceed to next form page
  continue = e => {
    e.preventDefault();
    if (this.validate()) {
      this.props.nextStep();
    }
  };

  render() {
    const { values, handleChange } = this.props;
    const { errors } = this.state;

    return (
      <form onSubmit={this.continue}>
        <TextInputGroup
          type='text'
          name='userName'
          label='name'
          handleChange={handleChange}
          values={values}
          errors={errors}
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
        />
        <TextInputGroup
          type='password'
          name='userPassword'
          label='password'
          handleChange={handleChange}
          values={values}
          errors={errors}
        />
        <button type='submit'>Next</button>
      </form>
    );
  }
}

export default FormUserDetails;
