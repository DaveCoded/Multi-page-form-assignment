import React, { Component } from 'react';

export class FormPrivacyDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { handleChecked, values } = this.props;

    return (
      <div>
        <div>
          <label htmlFor='trayProducts'>
            Receive updates about Tray.io product by email
          </label>
          <input
            type='checkbox'
            name='trayProducts'
            onChange={handleChecked('trayProducts')}
            checked={values.trayProducts}
          />
        </div>
        <div>
          <label htmlFor='otherProducts'>
            Receive communication by email for other products created by the
            Tray.io team
          </label>
          <input
            type='checkbox'
            name='otherProducts'
            onChange={handleChecked('otherProducts')}
            checked={values.otherProducts}
          />
        </div>
        <div>
          <button onClick={this.back}>Go Back</button>
          <button onClick={this.continue}>Submit</button>
        </div>
      </div>
    );
  }
}

export default FormPrivacyDetails;
