import React from 'react';
import SVG from '../components/SVG';

const FormDone = ({ values }) => {
  console.log(JSON.stringify(values));

  return (
    <div className='done-container'>
      <h1>Success!</h1>
      <SVG />
      <div className='credit-where-its-due'>
        Icon made by{' '}
        <a
          href='https://www.flaticon.com/authors/gregor-cresnar'
          title='Gregor Cresnar'>
          Gregor Cresnar
        </a>{' '}
        from{' '}
        <a href='https://www.flaticon.com/' title='Flaticon'>
          www.flaticon.com
        </a>
      </div>
      <p className='verify'>
        Please verify your email address, you should
        <br />
        have received an email from us already!
      </p>
    </div>
  );
};

export default FormDone;
