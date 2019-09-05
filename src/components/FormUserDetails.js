import React, { Component } from 'react';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            onChange={handleChange('userName')}
            defaultValue={values.userName}
          />
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
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            onChange={handleChange('userPassword')}
            defaultValue={values.userPassword}
          />
        </div>
        <button onClick={this.continue}>Next step</button>
      </div>
    );
  }
}

export default FormUserDetails;
