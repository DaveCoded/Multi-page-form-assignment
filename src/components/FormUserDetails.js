import React, { Component } from 'react';

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
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            onChange={handleChange('userName')}
            defaultValue={values.userName}
          />
          <div>{errors.userName}</div>
        </div>
        <div>
          <label htmlFor='role'>Role</label>
          <input
            type='text'
            name='role'
            onChange={handleChange('userRole')}
            defaultValue={values.userRole}
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            onChange={handleChange('userEmail')}
            defaultValue={values.userEmail}
          />
          <div>{errors.userEmail}</div>
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            onChange={handleChange('userPassword')}
            defaultValue={values.userPassword}
          />
          <div>{errors.userPassword}</div>
        </div>
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default FormUserDetails;
