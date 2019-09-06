import React, { Component } from 'react';

export class FormUserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      touched: {
        userName: false,
        userEmail: false,
        userPassword: false
      }
    };
  }

  // Check if input has been touched by user
  handleBlur = input => e => {
    this.setState({
      touched: { ...this.state.touched, [input]: true }
    });
  };

  validate = (userName, userEmail, userPassword) => {
    const errors = {
      userName: '',
      userEmail: '',
      userPassword: ''
    };

    const { touched } = this.state;

    // Regex for valid email address
    const validEmailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i;

    // Separate password checks for separate error messages
    const lowercaseCheck = /^(?=.*[a-z])/;
    const uppercaseCheck = /^(?=.*[A-Z])/;
    const numericalCheck = /^(?=.*[0-9])/;

    // Name required
    if (touched.userName && userName.length === 0) {
      errors.userName = 'Please enter your name';
    }
    // Email required & valid
    if (touched.userEmail && !validEmailRegex.test(userEmail)) {
      errors.userEmail = 'Please enter a valid email address';
    }
    // Password required and passes regex tests
    if (touched.userPassword) {
      if (userPassword.length < 9) {
        errors.userPassword = 'Password too short';
      } else if (!lowercaseCheck.test(userPassword)) {
        errors.userPassword = 'Please include a lowercase character';
      } else if (!uppercaseCheck.test(userPassword)) {
        errors.userPassword = 'Please include an uppercase character';
      } else if (!numericalCheck.test(userPassword)) {
        errors.userPassword = 'Please include a numerical character';
      }
    }
    return errors;
  };

  continue = errors => e => {
    e.preventDefault();
    const { userName, userEmail, userPassword } = this.props.values;
    this.validate(userName, userEmail, userPassword);
    // If required fields are not empty & there are no errors, button works
    if (
      userEmail &&
      userName &&
      userPassword &&
      (!errors.userEmail && !errors.userName && !errors.userPassword)
    ) {
      this.props.nextStep();
    }
  };

  render() {
    const { values, handleChange } = this.props;
    const errors = this.validate(
      values.userName,
      values.userEmail,
      values.userPassword
    );

    return (
      <div>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            onChange={handleChange('userName')}
            defaultValue={values.userName}
            onBlur={this.handleBlur('userName')}
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
            onBlur={this.handleBlur('userEmail')}
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
            onBlur={this.handleBlur('userPassword')}
          />
          <div>{errors.userPassword}</div>
        </div>
        <button onClick={this.continue(errors)}>Next step</button>
      </div>
    );
  }
}

export default FormUserDetails;
