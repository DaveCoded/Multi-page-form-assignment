import React, { Component } from 'react';

import StepProgressBar from './StepProgressBar';
import FormUserDetails from './FormUserDetails';
import FormPrivacyDetails from './FormPrivacyDetails';
import FormDone from './FormDone';

export class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      userName: '',
      userRole: '',
      userEmail: '',
      userPassword: '',
      trayProducts: true,
      otherProducts: false
    };
  }
  // Proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle input changes
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  handleChecked = input => e => {
    this.setState({ [input]: e.target.checked });
  };

  render() {
    // Destructure state
    const { step } = this.state;
    const {
      userName,
      userEmail,
      userRole,
      userPassword,
      trayProducts,
      otherProducts
    } = this.state;
    // // Save values to pass as props
    const values = {
      userName,
      userRole,
      userEmail,
      userPassword,
      trayProducts,
      otherProducts
    };

    let formJsx;

    // Conditionally render form pages based on step
    switch (step) {
      case 1:
        formJsx = (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        break;
      case 2:
        formJsx = (
          <FormPrivacyDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChecked={this.handleChecked}
            values={values}
          />
        );
        break;
      case 3:
        formJsx = <FormDone values={values} />;
        break;
      default:
        return null;
    }
    return (
      <>
        <StepProgressBar step={step} />
        {formJsx}
      </>
    );
  }
}

export default UserForm;
